import { Suspense } from "react"
import PageHeader from "@/components/page-header"
import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import ResourcesList from "@/components/resources-list"

export const metadata = {
    title: "Resources - Tranquility Cybersecurity",
    description: "Explore our collection of cybersecurity insights, guides, and best practices to stay informed about the latest trends and threats in the industry.",
}

// Loading skeleton for the Suspense fallback
function DefaultLoadingSkeleton() {
    // Define base classes for skeleton elements for easier theme management
    const skeletonBaseBg = "bg-slate-300 dark:bg-slate-700" // Light gray for light, darker for dark
    const skeletonLighterBg = "bg-slate-200 dark:bg-slate-700/50" // Even lighter for light

    // Card will use default shadcn theming which is already theme-aware.
    // No need for `cardClasses` unless specific overrides are desired beyond shadcn defaults.

    return (
        <div className="container mx-auto py-16 px-4">
            {" "}
            {/* Container for skeleton content */}
            <div className="mb-8">
                <Skeleton className={`h-10 w-full md:w-3/4 lg:w-1/2 ${skeletonLighterBg} rounded`} />
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array(3)
                    .fill()
                    .map((_, i) => (
                        // Using default Card styling from shadcn/ui which is theme-aware
                        // Pass an empty className or specific structural classes if needed, but avoid hardcoding theme colors
                        <Card key={i} className="">
                            <CardHeader>
                                <Skeleton className={`h-6 w-2/3 ${skeletonBaseBg}`} />
                                <Skeleton className={`h-4 w-1/2 ${skeletonBaseBg} mt-2`} />
                            </CardHeader>
                            <CardContent>
                                <Skeleton className={`h-4 w-full ${skeletonBaseBg} mb-2`} />
                                <Skeleton className={`h-4 w-full ${skeletonBaseBg} mb-2`} />
                                <Skeleton className={`h-4 w-2/3 ${skeletonBaseBg}`} />
                                <Skeleton className={`h-32 w-full ${skeletonBaseBg} mt-4 rounded-md`} />
                            </CardContent>
                        </Card>
                    ))}
            </div>
        </div>
    )
}

// Main page component (Server Component)
export default function ResourcesPage() {
    // Theme-aware background for the entire page
    const pageBackground = "bg-gradient-to-b from-white to-slate-100 dark:from-slate-900 dark:to-slate-800"

    return (
        <div className={`min-h-screen ${pageBackground}`}>
            <PageHeader
                title="Resources"
                description="Cybersecurity insights, guides, and best practices"
                image="https://www.stldigital.tech/wp-content/uploads/2023/08/PoV-A-Complete-Guide-to-Cybersecurity-in-the-Modern-World-scaled.jpg?width=1200&height=400" // Updated query
            />
            <Suspense fallback={<DefaultLoadingSkeleton />}>
                <ResourcesList /> {/* ResourcesList will handle its own internal theme-aware styling */}
            </Suspense>
        </div>
    )
}
