"use client"

import { useToast } from "@/hooks/use-toast.js"
import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from "@/components/ui/toast.jsx"
import { CustomToaster as CustomToasterComponent } from "@/components/ui/custom-toast.jsx"

export function Toaster() {
    const { toasts, customToasts, dismissCustom } = useToast()

    return (
        <ToastProvider>
            {/* Standard Toasts */}
            {toasts.map(({ id, title, description, action, ...props }) => (
                <Toast key={id} {...props}>
                    <div className="grid gap-1">
                        {title && <ToastTitle>{title}</ToastTitle>}
                        {description && <ToastDescription>{description}</ToastDescription>}
                    </div>
                    {action}
                    <ToastClose />
                </Toast>
            ))}
            <ToastViewport />

            {/* Custom Toasts */}
            <CustomToasterComponent toasts={customToasts} onDismiss={dismissCustom} />
        </ToastProvider>
    )
}
