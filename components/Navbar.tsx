import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-950 px-6 py-4 text-white">
      <Link href="/" className="text-xl font-bold">
        Agency Digital
      </Link>
      <div className="flex gap-6 text-sm text-slate-300">
        <Link href="/" className="hover:text-white">Home</Link>
        <Link href="/about" className="hover:text-white">About</Link>
      </div>
    </nav>
  );
}