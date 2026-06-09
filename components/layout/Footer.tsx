import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/20 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid md:grid-cols-4 gap-8 mb-8">

          <div>
            <h3 className="font-bold mb-3">
              SmartCitizen
            </h3>
            <p className="text-sm text-muted-foreground">
              Digital accountability platform connecting
              citizens and government.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Platform
            </h3>

            <div className="space-y-2 text-sm">
              <Link href="/citizen-portal" className="block">
                Citizen Portal
              </Link>

              <Link href="/official-dashboard" className="block">
                Official Dashboard
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Support
            </h3>

            <div className="space-y-2 text-sm">
              <Link href="/help">
                Help Center
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Legal
            </h3>

            <div className="space-y-2 text-sm">
              <Link href="/privacy">
                Privacy Policy
              </Link>

              <Link href="/terms">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 text-center text-sm text-muted-foreground">
          © 2026 SmartCitizen. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}