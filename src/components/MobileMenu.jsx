import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/teams", label: "Teams" },
  { href: "/visiting-teams", label: "Visiting Teams" },
  { href: "/policies", label: "Policies" },
  { href: "/about/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white"
        aria-expanded={open}
        aria-label="Toggle navigation menu"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-[#04163a] px-6 py-5 shadow-xl">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-200 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/contact"
              className="mt-2 rounded-full bg-blue-500 px-5 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/20"
            >
              Join a Team
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
