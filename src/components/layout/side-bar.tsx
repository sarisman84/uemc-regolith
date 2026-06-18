import Link from "next/link";

export function SideBar() {
  return (
    <aside className="flex flex-col items-center justify-between p-4">
      <section>
        <span>Contracts</span>
        <nav>
          <ul>
            <li>
              <Link href="/"> Mining </Link>
            </li>
            <li>
              <Link href="/"> Hauling </Link>
            </li>
            <li>
              <Link href="/"> Other </Link>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
}
