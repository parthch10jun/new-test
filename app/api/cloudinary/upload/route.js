import { NextResponse } from "next/server"
import { v2 as cloudinary } from "cloudinary"

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name: "dg3pe6tge",
  api_key: "497516615579351",
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file")
    const folder = formData.get("folder") || "tranquility"

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Convert file to buffer for Cloudinary upload
    const buffer = await file.arrayBuffer()
    const base64 = Buffer.from(buffer).toString("base64")
    const dataURI = `data:${file.type};base64,${base64}`

    // Upload to Cloudinary using the SDK
    const result = await cloudinary.uploader.upload(dataURI, {
      folder: folder,
      resource_type: "auto",
    })

    return NextResponse.json({
      public_id: result.public_id,
      url: result.secure_url,
    })
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error)
    return NextResponse.json({ error: error.message || "Error uploading file" }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const { public_id } = await request.json()

    if (!public_id) {
      return NextResponse.json({ error: "No public_id provided" }, { status: 400 })
    }

    // Delete from Cloudinary using the SDK
    const result = await cloudinary.uploader.destroy(public_id)

    return NextResponse.json({ result })
  } catch (error) {
    console.error("Error deleting from Cloudinary:", error)
    return NextResponse.json({ error: error.message || "Error deleting file" }, { status: 500 })
  }
}
