import { createRoot } from 'react-dom/client';
import App from './pages/home'

const root = createRoot(document.getElementById('app'));
root.render(<App />);