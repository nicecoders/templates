import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/home'

const root = createRoot(document.getElementById('app'));
root.render(<App />);
