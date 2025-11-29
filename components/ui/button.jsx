"use client" // Ensure this is a client component if using hooks like forwardRef effectively in older Next.js versions, though for App Router it's less critical for this specific component.

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils" // Assuming cn and utils.ts (or .js) exist

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
                destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
                outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-sm",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                // Custom variants from your original .tsx file
                blue: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
                purple: "bg-purple-600 text-white hover:bg-purple-700 shadow-sm",
                teal: "bg-teal-600 text-white hover:bg-teal-700 shadow-sm",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10 p-0",
                iconSm: "h-8 w-8 p-0 rounded-md",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Button.displayName = "Button"

export { Button, buttonVariants }
