interface FeatureProps {
  isDarkMode: boolean;
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ isDarkMode, title, description, icon }: FeatureProps) {
  return (
    <div className={`${isDarkMode ? 'bg-slate-700 text-white border-slate-600' : 'bg-white text-slate-900 border-slate-200'} p-6 rounded-xl border shadow-lg transition-colors duration-300`}>
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'} text-sm`}>{description}</p>
    </div>
  );
}