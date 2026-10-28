const searchFields = [
  { label: "Location", placeholder: "Address, City or Zip" },
  { label: "Date/Duration", placeholder: "Anytime/3 Days" },
  { label: "Budget", placeholder: "$0–$3000" },
  { label: "People", placeholder: "5-10" },
]

export function Banner() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
        alt="Aerial coastal travel destination"
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
          Discover Your
          <span className="block">Next Adventure</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-gray-100">
          Explore breathtaking destinations and create unforgettable memories with
          our curated travel experiences.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#explore"
            className="inline-flex items-center gap-3 rounded-lg bg-[#15A1BF] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#1189A3]"
          >
            Explore Now
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#destinations"
            className="inline-flex items-center rounded-lg bg-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          >
            View Destination
          </a>
        </div>
      </div>

      {/* Bottom search bar, flush to the bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-stretch">
          {searchFields.map((field, i) => (
            <div
              key={field.label}
              className={`flex-1 px-6 py-4 ${
                i === 0 ? "" : "border-l border-white/20"
              }`}
            >
              <label className="block text-[15px] font-semibold text-white">
                {field.label}
              </label>
              <input
                type="text"
                placeholder={field.placeholder}
                className="mt-1 w-full bg-transparent text-sm text-white placeholder-gray-200 outline-none"
              />
            </div>
          ))}

          <button
            type="button"
            className="bg-[#15A1BF] px-12 text-base font-semibold text-white transition-colors hover:bg-[#1189A3]"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  )
}
