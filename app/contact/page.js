import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white px-6 transition-colors duration-300">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-2 text-lg opacity-80">Oops! Page not found.</p>
      <Link
        href="/"
        className="mt-6 bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
