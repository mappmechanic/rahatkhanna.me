import Link from "next/link";

export function Footer(props) {
  return (
    <footer className="px-4 md:px-6 py-4 flex items-center justify-between bg-white/10 text-white">
      <div className="text-sm">©2024 RahatKhanna.me All rights reserved.</div>
      <nav className="flex items-center space-x-4">
        {/* <Link className="hover:underline" href="#">
          Privacy Policy
        </Link>
        <Link className="hover:underline" href="#">
          Terms of Service
        </Link> */}
        <Link className="hover:underline" href="https://linkedin.com/in/rahatkh">
          Contact on LinkedIn
        </Link>
      </nav>
    </footer>
  );
}
