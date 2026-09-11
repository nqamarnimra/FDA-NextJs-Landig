import Link from 'next/link';

export default function HeroSection({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <section id="hero" className={`${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-900'} py-20 px-6 text-center transition-colors duration-300`}>
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Transform Your Brand
      </h1>
      <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-lg max-w-2xl mx-auto mb-6`}>
        We build modern web applications, custom digital solutions, and high-converting frontend experiences.
      </p>

      <Link 
        href="/about" 
        className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded inline-block"
      >
        Learn More About Us
      </Link>
    </section>
  );
}