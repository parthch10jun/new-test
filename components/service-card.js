"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServiceCard({ service, variants }) {
  return (
    <motion.div variants={variants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
      <Card className="h-full bg-slate-800/50 border-slate-700 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
        <CardHeader>
          <CardTitle>{service.title}</CardTitle>
          <CardDescription>{service.subtitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-slate-300">{service.description}</p>
        </CardContent>
        <CardFooter>
          <Button asChild variant="ghost" className="p-0 hover:bg-transparent hover:text-purple-400">
            <Link href={`/services/${service.id}`} className="inline-flex items-center text-purple-400">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
