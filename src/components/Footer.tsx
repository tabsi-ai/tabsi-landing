export default function Footer() {
  return (
    <footer className="w-full py-8 flex flex-col items-center text-gray-500 dark:text-gray-400 border-t border-gray-100 dark:border-gray-800 mt-auto">
      <span className="font-semibold">Tabsi</span>
      <span className="text-sm mt-1">&copy; {new Date().getFullYear()} All rights reserved.</span>
      <span className="text-xs mt-2">AI-powered WhatsApp business assistant for small business</span>
    </footer>
  );
}
