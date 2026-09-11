export default function Footer({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <footer id="contact" className={`${isDarkMode ? 'bg-slate-900 text-slate-400 border-slate-800' : 'bg-white text-slate-500 border-slate-200'} py-6 text-center text-sm border-t transition-colors duration-300`}>
      <p>© 2026 Agency Digital. All rights reserved.</p>
    </footer>
  );
}