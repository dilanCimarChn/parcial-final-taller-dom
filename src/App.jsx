import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import './App.css';
export function AppRoutes() {
  return <><Header /><Routes>
    <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
    <Route path="/dashboard" element={<Dashboard />} /><Route path="*" element={<NotFound />} />
  </Routes></>;
}
export default function App() { return <BrowserRouter><AppRoutes /></BrowserRouter>; }
