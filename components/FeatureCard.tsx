interface FeatureProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureProps) {
  return (
    <div className="bg-slate-700 text-white p-6 rounded-xl border border-slate-600 shadow-lg">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-300 text-sm">{description}</p>
    </div>
  );
}