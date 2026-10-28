import Link from "next/link"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/bookings", label: "My Bookings" },
  { href: "/admin", label: "Admin" },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Left: navigation links */}
        <div className="flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-gray-700 hover:text-[#15A1BF] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Center: logo */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-[#15A1BF]"
          >
            Wanderlast
          </Link>
        </div>

        {/* Right: profile, login, sign up */}
        <div className="flex items-center gap-5">
          <Link
            href="/profile"
            className="flex items-center gap-1.5 text-[15px] font-medium text-gray-700 hover:text-[#15A1BF] transition-colors"
          >
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Profile
          </Link>
          <Link
            href="/login"
            className="text-[15px] font-medium text-gray-700 hover:text-[#15A1BF] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-[15px] font-medium text-gray-700 hover:text-[#15A1BF] transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  )
}
