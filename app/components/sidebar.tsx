export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-16 bg-black flex flex-col items-center pt-6 z-50">
      <Logo />
    </aside>
  );
}

function Logo() {
  return (
    <svg
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Transparent Speaker"
    >
      <rect x="0" y="0" width="12" height="2.5" fill="white" />
      <rect x="0" y="8.5" width="10" height="2.5" fill="white" />
      <rect x="0" y="0" width="2.5" height="20" fill="white" />
    </svg>
  );
}
