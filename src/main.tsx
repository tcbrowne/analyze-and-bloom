
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('🚀 Main.tsx: Starting application initialization');
console.log('🔍 Main.tsx: Window location:', window.location.href);
console.log('🔍 Main.tsx: User agent:', navigator.userAgent);

// Fix TypeScript error by properly typing the webkit property
const hasWebkitRequestFileSystem = 'webkitRequestFileSystem' in window;
console.log('🔍 Main.tsx: Has webkit file system:', hasWebkitRequestFileSystem);

const rootElement = document.getElementById("root");
console.log('🔍 Main.tsx: Root element found:', !!rootElement);

if (rootElement) {
  console.log('✅ Main.tsx: Creating React root');
  const root = createRoot(rootElement);
  console.log('✅ Main.tsx: Rendering App component');
  root.render(<App />);
} else {
  console.error('❌ Main.tsx: Root element not found!');
}
