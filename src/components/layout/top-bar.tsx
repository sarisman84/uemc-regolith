import Link from "next/link";

export function TopBar() {
  return (
    <header className="flex items-center justify-between p-4">
      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <span>Bexalite</span>
          </li>
          <li>
            <Link href="/"> Calculator </Link>
          </li>
          <li>
            <Link href="/"> Guides </Link>
          </li>
        </ul>
      </nav>
      <Link href="/"> Login </Link>
    </header>
  );
}
