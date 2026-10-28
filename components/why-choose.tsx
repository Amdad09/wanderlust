import { Headset, Map, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
]

export function WhyChoose() {
  return (
    <section className="bg-cyan-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top divider dash */}
        <div className="flex justify-center">
          <span className="block h-0.5 w-6 rounded-full bg-cyan-500" />
        </div>

        {/* Heading */}
        <div className="mt-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Why Choose Wanderlust
          </h2>
          <p className="mt-3 text-gray-500">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-8"
            >
              <Icon className="h-9 w-9 text-cyan-600" strokeWidth={1.75} />
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom divider dash */}
        <div className="mt-16 flex justify-center">
          <span className="block h-0.5 w-6 rounded-full bg-cyan-500" />
        </div>
      </div>
    </section>
  )
}
