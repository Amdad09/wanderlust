import { Navbar } from "@/components/navbar"
import { Banner } from "@/components/banner"
import { WhyChoose } from "@/components/why-choose"
import { Testimonials } from "@/components/testimonials"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <main className="flex-1 pt-16">
        <Banner />
        <WhyChoose />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
