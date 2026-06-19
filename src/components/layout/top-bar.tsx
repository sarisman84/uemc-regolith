import Link from "next/link";
import "@/app/globals.css";

function generateNavLinksFromPages(
  pagePaths: {
    path: string;
    name?: string;
    entryStyle?: string;
    linkStyle?: string;
  }[],
) {
  return pagePaths.map((page) => (
    <li key={page.path} className={page.entryStyle}>
      <Link href={page.path} className={page.linkStyle}>
        {page.name ||
          page.path.replace("/", "").charAt(0).toUpperCase() +
            page.path.replace("/", "").slice(1)}
      </Link>
    </li>
  ));
}

export function TopBar() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <nav>
        <ul className="flex items-center gap-4">
          {generateNavLinksFromPages([
            {
              path: "/home",
              name: "Bexalite",
              entryStyle: "border-r border-amber-50 pr-4",
              linkStyle: "text-xl font-bold",
            },
            { path: "/contacts" },
            { path: "/calculator" },
            { path: "/guides" },
          ])}{" "}
        </ul>
      </nav>
      <Link href="/"> Login </Link>
    </header>
  );
}
