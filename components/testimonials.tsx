"use client"

import { useState } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "\"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable.\"",
    name: "Michael Chen",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "\"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!\"",
    name: "Sarah Johnson",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "\"The Kyoto Cultural Tour Was A Once-In-A-Lifetime Experience. Every Temple, Garden, And Meal Felt Thoughtfully Curated. I Cannot Wait To Book Again.\"",
    name: "Emma Williams",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
]

export function Testimonials() {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with controls on the right */}
        <div className="flex items-start justify-between mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              What Travelers Say
            </h2>
            <p className="mt-3 text-gray-500">
              Real experiences from our happy travelers
            </p>
          </div>

          {/* Circular prev/next buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              aria-label="Previous testimonial"
              className="h-12 w-12 rounded-full border-gray-200 text-gray-700 disabled:opacity-40"
              disabled={!api?.canScrollPrev()}
              onClick={() => api?.scrollPrev()}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Next testimonial"
              className="h-12 w-12 rounded-full border-gray-200 text-gray-700 disabled:opacity-40"
              disabled={!api?.canScrollNext()}
              onClick={() => api?.scrollNext()}
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Testimonial cards */}
        <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2">
                <div className="flex h-full items-stretch gap-6 rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
                  {/* Text content */}
                  <div className="flex flex-1 flex-col justify-between">
                    <p className="text-xl font-medium leading-snug text-gray-900">
                      {testimonial.quote}
                    </p>

                    <div className="mt-6">
                      <p className="text-cyan-600 font-medium">
                        — {testimonial.name}
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>

                  {/* Portrait image */}
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-56 w-48 shrink-0 rounded-lg object-cover"
                    decoding="async"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
