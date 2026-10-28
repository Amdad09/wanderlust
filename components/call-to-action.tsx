import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CallToAction() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
        alt="Aerial view of a tropical island"
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-24 md:py-32 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
          Ready To Start Your Journey?
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Join thousands of travelers who have discovered the world with us
        </p>

        <Button
          size="lg"
          className="mt-10 bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-sm font-semibold uppercase tracking-wide rounded-md shadow-lg"
        >
          Book Your Trip Today <span className="ml-2">→</span>
        </Button>
      </div>
    </section>
  )
}
