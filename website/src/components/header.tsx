import Link from "next/link";
import { Logo } from "./logo";

export function Header(props) {
  return (
    <header className="px-4 md:px-6 h-14 py-2 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Logo className="h-6 w-6 text-white" />
      </Link>
    </header>
  );
}
