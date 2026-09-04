import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeatureCard from '@/components/FeatureCard';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-900 text-white">
      <Navbar />
      <HeroSection />

      <section className="py-16 px-6 max-w-6xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon="⚡"
            title="Fast Performance"
            description="Built using Next.js App Router for optimal load speeds."
          />
          <FeatureCard
            icon="🎨"
            title="Modern UI"
            description="Styled with Tailwind CSS to ensure a clean design."
          />
          <FeatureCard
            icon="📱"
            title="Responsive Layout"
            description="Fully customizable layout adapted for mobile and desktop screens."
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}