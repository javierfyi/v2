const NAV_LINKS = ["About", "Contact", "Shop in US", "Cart (0)"] as const;

export function Header() {
  return (
    <header className="bg-black text-white">
      <div className="flex items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center">
          <Logo />
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs tracking-wide text-gray-400 hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Menu"
            className="flex flex-col justify-center gap-[5px] w-6 h-6"
          >
            <span className="block w-full h-[1.5px] bg-white" />
            <span className="block w-full h-[1.5px] bg-white" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <svg
      width="16"
      height="24"
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Transparent Speaker"
    >
      <rect x="6" y="0" width="4" height="24" fill="white" />
      <rect x="0" y="0" width="16" height="4" fill="white" />
      <rect x="0" y="10" width="16" height="4" fill="white" />
    </svg>
  );
}
