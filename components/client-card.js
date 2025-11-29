"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientCard({ client }) {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex items-center justify-center p-6 bg-slate-800/50 border border-slate-700 rounded-lg transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10"
    >
      {client.logo ? (
        <Image
          src={client.logo || "/placeholder.svg"}
          alt={client.name}
          width={120}
          height={60}
          className="max-h-12 w-auto object-contain"
        />
      ) : (
        <span className="text-lg font-medium text-slate-300">{client.name}</span>
      )}
    </motion.div>
  )
}
