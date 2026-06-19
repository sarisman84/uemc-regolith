import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-950 text-gray-50">
        <header className="flex flex-col items-center gap-4">
          <h1 className="text-7xl font-bold"> Bexalite </h1>
          <p> The Regolith Project 2024 </p>
          <div>
            <a
              href="/home"
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
            >
              Get Started
            </a>
            <a
              href="/contacts"
              className="ml-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition"
            >
              Learn More
            </a>
          </div>
        </header>
      </div>
    </div>
  );
}
