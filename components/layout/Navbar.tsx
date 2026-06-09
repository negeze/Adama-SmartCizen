import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">
              SC
            </span>
          </div>
          <span className="text-xl font-bold">
            SmartCitizen
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>

          <Link
            href="/citizen-portal"
            className="hover:text-primary"
          >
            Citizen Portal
          </Link>

          <Link
            href="/official-dashboard"
            className="hover:text-primary"
          >
            Official Dashboard
          </Link>

          <Link
            href="/auth/login"
            className="hover:text-primary"
          >
            Sign In
          </Link>

          <Link
            href="/auth/register"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}