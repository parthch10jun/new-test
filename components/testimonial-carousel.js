"use client"

import { useState, useEffect } from "react"
import Slider from "react-slick"
import { Quote } from "lucide-react"

// Import slick-carousel styles
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const testimonials = [
    {
        quote:
            "We had the privilege of working with TCSA as our cybersecurity and compliance partner. Their vCISO leadership and deep expertise across ISO 27001, SOC 1/2, and GDPR were instrumental in aligning our security posture with global standards. TCSA consistently delivered strategic insight and audit readiness, making them a trusted long-term partner.",
        name: "Dharminder Singh, CTO",
        company: "Cargo Flash Infotech",
    },
    {
        quote:
            "Surendra brings a rare blend of deep compliance knowledge and execution excellence. Their vCISO services have helped multiple organizations maintain strong security and data protection postures. They’re dependable, forward-thinking, and exceptionally good at translating regulatory requirements into action.",
        name: "INTERCERT",
        company: "",
    },
    {
        quote:
            "TCSA demonstrates a strong grasp of both technical and business dynamics. Their team simplifies complex security frameworks into actionable programs. With a focus on ownership and delivery, TCSA has proven to be an asset for any organization aiming for operational and compliance maturity.",
        name: "Rajiv Nandwani, Strategic CIO",
        company: "",
    },
    {
        quote:
            "Working with TCSA has been a seamless experience. The team is sharp, structured, and understands the full picture of cybersecurity program management. They’re hands-on, proactive, and always go the extra mile to solve critical challenges.",
        name: "Rathi Group",
        company: "",
    },
    {
        quote:
            "TCSA stands out for their subject matter depth and commitment to delivery. Their strength lies in breaking down complex risk and compliance problems into simple, implementable solutions—always adding business value through clarity and consistency.",
        name: "Shaleen Khetarpaul, AVP & CISO",
        company: "BSES Rajdhani",
    },
]

// Custom styles for the carousel dots
const carouselStyles = `
  .testimonial-carousel .slick-dots {
    bottom: -40px;
  }
  .testimonial-carousel .slick-dots li button:before {
    font-size: 12px;
    color: hsl(var(--muted-foreground));
    opacity: 1;
    transition: color 0.3s ease;
  }
  .testimonial-carousel .slick-dots li.slick-active button:before {
    color: hsl(var(--accent));
  }
`

export default function TestimonialCarousel() {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }

    if (!isMounted) {
        // Render a static fallback for SSR and initial load
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                    <div key={index} className="glass-card p-8 rounded-xl shadow-lg min-h-[250px]">
                        <div className="w-full h-full bg-muted animate-pulse rounded-md"></div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <>
            <style>{carouselStyles}</style>
            <Slider {...settings} className="testimonial-carousel -mx-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 h-full">
                        <div className="glass-card glass-card-hover p-8 rounded-xl shadow-lg h-full flex flex-col">
                            <Quote className="w-10 h-10 text-muted-foreground/50 mb-4 flex-shrink-0" />
                            <p className="italic text-muted-foreground flex-grow mb-6">"{testimonial.quote}"</p>
                            <div className="mt-auto border-t border-border pt-4">
                                <p className="font-bold text-lg text-foreground">{testimonial.name}</p>
                                {testimonial.company && <p className="font-medium text-accent">{testimonial.company}</p>}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    )
}
