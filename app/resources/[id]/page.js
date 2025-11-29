"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation" // Removed notFound, using useRouter for client-side handling
import Link from "next/link"
import { motion } from "framer-motion"
import { getHardcodedArticleById, getHardcodedArticles } from "@/lib/resourcesData" // Updated import
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ArrowLeft, Calendar, Clock, User, Share2, AlertTriangle } from "lucide-react"
import PageHeader from "@/components/page-header"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function ArticleDetailPage() {
  const { id } = useParams()
  const router = useRouter()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (id) {
      setLoading(true)
      // Simulate async fetch for consistent UX, though data is local
      setTimeout(() => {
        const articleData = getHardcodedArticleById(id)
        if (!articleData) {
          setError("Article not found. You will be redirected to resources.")
          setArticle(null)
          // Optionally redirect after a delay or let user click back
          // setTimeout(() => router.push('/resources'), 3000);
        } else {
          setArticle(articleData)
          setError(null)
        }
        setLoading(false)
      }, 300) // Small delay to mimic loading
    }
  }, [id, router])

  if (loading) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 dark:from-cyber-darker dark:to-cyber-dark py-20 px-4">
          <div className="container mx-auto">
            <Skeleton className="h-64 w-full rounded-xl bg-muted mb-8" />
            <Skeleton className="h-10 w-2/3 bg-muted mb-4" />
            <Skeleton className="h-6 w-1/3 bg-muted mb-8" />
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <Skeleton className="h-4 w-full bg-muted mb-2" />
                <Skeleton className="h-4 w-full bg-muted mb-2" />
                <Skeleton className="h-4 w-3/4 bg-muted mb-6" />
                <Skeleton className="h-4 w-full bg-muted mb-2" />
                <Skeleton className="h-4 w-full bg-muted mb-2" />
                <Skeleton className="h-4 w-2/3 bg-muted mb-6" />
              </div>
              <div>
                <Skeleton className="h-64 w-full bg-muted rounded-xl" />
              </div>
            </div>
          </div>
        </div>
    )
  }

  if (error || !article) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 dark:from-cyber-darker dark:to-cyber-dark py-20 px-4">
          <div className="container mx-auto text-center">
            <AlertTriangle className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-4">Error Loading Article</h1>
            <p className="text-muted-foreground mb-8">{error || "The requested article could not be found."}</p>
            <Button asChild>
              <Link href="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
              </Link>
            </Button>
          </div>
        </div>
    )
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  // Create a list of related articles, excluding the current one
  const relatedArticles = getHardcodedArticles()
      .filter((a) => a.id !== article.id)
      .slice(0, 3) // Show up to 3 related articles

  return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/50 dark:from-cyber-darker dark:to-cyber-dark">
        <PageHeader
            title={article.title}
            description={article.category}
            image={article.image || article.imageUrl || "/placeholder.svg?width=1200&height=400"}
        />

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="mb-8">
              <Link
                  href="/resources"
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Resources
              </Link>
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              <motion.div className="md:col-span-2" variants={fadeIn} initial="hidden" animate="visible">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/50">
                    {article.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {article.author || "Tranquility Team"}
                  </div>
                  {article.readTime && (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                  )}
                </div>

                <h1 className="text-3xl font-bold text-foreground mb-6">{article.title}</h1>

                {article.summary && (
                    <div className="mb-8 text-lg text-muted-foreground font-medium italic border-l-4 border-primary pl-4 py-2">
                      {article.summary}
                    </div>
                )}

                <div className="prose prose-slate dark:prose-invert max-w-none">
                  {article.content ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        h3: ({ node, ...props }) => <h3 className="text-2xl font-bold text-foreground mt-8 mb-4" {...props} />,
                        p: ({ node, ...props }) => <p className="text-muted-foreground mb-6 leading-relaxed" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-6" {...props} />,
                        li: ({ node, ...props }) => <li className="text-muted-foreground mb-2" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold text-foreground" {...props} />,
                      }}
                    >
                      {article.content}
                    </ReactMarkdown>
                  ) : (
                    <p className="text-muted-foreground">
                      Content for this article is currently being prepared. Please check back later.
                    </p>
                  )}
                </div>

                <div className="mt-12 pt-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">Share this article</div>
                    <div className="flex space-x-4">
                      <Button
                          variant="ghost"
                          size="icon"
                          className="text-muted-foreground hover:text-primary hover:bg-primary/10"
                      >
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                <Card className="glass-card overflow-hidden sticky top-24">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {relatedArticles.length > 0 && (
                          <div>
                            <h3 className="text-lg font-medium text-foreground mb-4">Related Resources</h3>
                            <div className="space-y-4">
                              {relatedArticles.map((related) => (
                                  <div key={related.id} className="group">
                                    <Link href={`/resources/${related.id}`} className="block">
                                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                                        {related.title}
                                      </h4>
                                      <p className="text-sm text-muted-foreground line-clamp-2">{related.summary}</p>
                                    </Link>
                                  </div>
                              ))}
                            </div>
                          </div>
                      )}

                      <div className="pt-4 border-t border-border">
                        <h3 className="text-lg font-medium text-foreground mb-4">Popular Categories</h3>
                        <div className="flex flex-wrap gap-2">
                          {[...new Set(getHardcodedArticles().map((a) => a.category))].slice(0, 4).map((cat) => (
                              <Link key={cat} href={`/resources?category=${encodeURIComponent(cat)}`}>
                                <Badge
                                    variant="outline"
                                    className="bg-accent/10 text-accent border-accent/50 hover:bg-accent/20 cursor-pointer"
                                >
                                  {cat}
                                </Badge>
                              </Link>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-border">
                        <h3 className="text-lg font-medium text-foreground mb-4">Need Help?</h3>
                        <p className="text-muted-foreground mb-4">Contact our team for personalized cybersecurity guidance.</p>
                        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          <Link href="/contact">Contact Us</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
  )
}
