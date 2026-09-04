import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">About Our Agency</h1>
      <p className="text-slate-300 max-w-xl mx-auto mb-6">
        We build modern web applications, custom digital solutions, and high-converting frontend experiences.
      </p>
      <Link href="/" className="text-blue-400 hover:underline">
        ← Back to Home
      </Link>
    </main>
  );
}