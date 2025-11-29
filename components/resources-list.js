"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { getHardcodedArticles } from "@/lib/resourcesData"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowRight, Calendar } from "lucide-react"

export default function ResourcesList() {
    const searchParams = useSearchParams()
    const categoryFromUrl = searchParams.get("category")

    const [articles, setArticles] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const [activeCategory, setActiveCategory] = useState(categoryFromUrl || "all")

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            const articlesData = getHardcodedArticles()
            setArticles(articlesData)
            const uniqueCategories = ["all", ...new Set(articlesData.map((article) => article.category))]
            setCategories(uniqueCategories)
            setLoading(false)
        }, 300)
    }, [])

    useEffect(() => {
        setActiveCategory(categoryFromUrl || "all")
    }, [categoryFromUrl])

    const filteredArticles =
        activeCategory === "all" ? articles : articles.filter((article) => article.category === activeCategory)

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    // Theme-aware classes
    const tabsListBg = "bg-slate-100 dark:bg-slate-800/50"
    const tabsListBorder = "border-slate-300 dark:border-slate-700"
    // TabsTrigger active state: purple might be fine for both, or customize
    const tabsTriggerActive = "data-[state=active]:bg-purple-600 data-[state=active]:text-white"
    const tabsTriggerText = "text-slate-700 dark:text-slate-200" // For non-active

    const cardClasses = "bg-card border" // Rely on shadcn's theme-aware Card
    const cardHoverClasses =
        "transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10" // Hover might need light theme adjustment if purple clashes

    const badgeClasses =
        "bg-purple-100 text-purple-700 border-purple-300 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-500/50"
    const dateColor = "text-slate-500 dark:text-slate-400"
    // CardTitle uses default text-foreground which is theme-aware
    const cardDescriptionColor = "text-muted-foreground" // Theme-aware
    const cardContentTextColor = "text-slate-700 dark:text-slate-300"

    const readMoreButtonClasses =
        "text-purple-600 hover:text-purple-700 hover:bg-purple-100/50 dark:text-purple-400 dark:hover:text-purple-300 dark:hover:bg-purple-900/20"
    const noArticlesTextColor = "text-slate-500 dark:text-slate-400"

    // Skeleton theming for internal loading state
    const skeletonBaseBg = "bg-slate-300 dark:bg-slate-700"
    const skeletonCardClasses = "" // Rely on default Card for skeleton

    return (
        <section className="py-16 px-4">
            {" "}
            {/* Main section container */}
            <div className="container mx-auto">
                <div className="mb-10">
                    <Tabs value={activeCategory} className="w-full" onValueChange={setActiveCategory}>
                        <div className="mb-8 overflow-x-auto pb-2">
                            <TabsList className={`${tabsListBg} ${tabsListBorder} p-1`}>
                                {categories.map((category) => (
                                    <TabsTrigger key={category} value={category} className={`${tabsTriggerText} ${tabsTriggerActive}`}>
                                        {category === "all" ? "All Resources" : category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </div>

                        {loading ? (
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                {Array(6)
                                    .fill()
                                    .map((_, i) => (
                                        <Card key={i} className={skeletonCardClasses}>
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
                        ) : (
                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                            >
                                {filteredArticles.length > 0 ? (
                                    filteredArticles.map((article) => (
                                        <motion.div key={article.id} variants={fadeIn} className="h-full">
                                            <Card className={`h-full ${cardClasses} ${cardHoverClasses} overflow-hidden flex flex-col`}>
                                                <CardHeader>
                                                    <div className="flex justify-between items-start">
                                                        <Badge variant="outline" className={badgeClasses}>
                                                            {article.category}
                                                        </Badge>
                                                        <div className={`flex items-center text-sm ${dateColor}`}>
                                                            <Calendar className="h-3 w-3 mr-1" />
                                                            {article.date}
                                                        </div>
                                                    </div>
                                                    <CardTitle className="mt-3 text-lg">{article.title}</CardTitle>{" "}
                                                    {/* Uses default text-foreground */}
                                                    <CardDescription className={cardDescriptionColor}>{article.author}</CardDescription>
                                                </CardHeader>
                                                <CardContent className="flex-grow">
                                                    <p className={`${cardContentTextColor} line-clamp-3 mb-4 text-sm`}>
                                                        {article.summary || article.content?.substring(0, 120) + "..."}
                                                    </p>
                                                    {(article.image || article.imageUrl) && (
                                                        <div className="mt-4 h-40 overflow-hidden rounded-md">
                                                            <img
                                                                src={article.image || article.imageUrl}
                                                                alt={article.title}
                                                                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                                                            />
                                                        </div>
                                                    )}
                                                </CardContent>
                                                <CardFooter>
                                                    <Button asChild variant="ghost" className={`ml-auto ${readMoreButtonClasses}`}>
                                                        <Link href={`/resources/${article.id}`} className="inline-flex items-center">
                                                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                                                        </Link>
                                                    </Button>
                                                </CardFooter>
                                            </Card>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="col-span-full text-center py-12">
                                        <p className={`${noArticlesTextColor} text-lg`}>No articles found in "{activeCategory}".</p>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </Tabs>
                </div>
            </div>
        </section>
    )
}
