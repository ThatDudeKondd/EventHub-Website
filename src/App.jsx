import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Utility Components
import Navbar from './components/eventhub/Navbar';
import Footer from './components/eventhub/Footer';
import CursorAura from './components/eventhub/CursorAura';
import ScrollToTop from './components/eventhub/ScrollToTop';
import PageNotFound from './lib/PageNotFound';

// Pages
import Home from './pages/Home';
import Commands from './pages/Commands';
import Events from './pages/Events';
import Status from './pages/Status';
import Applications from './pages/Applications';
import Documentation from './pages/Documentation';
import Team from './pages/Team';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Affiliates from './pages/Affiliates';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CursorAura />
      <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-indigo-500/30 selection:text-white relative bg-grid">
        {/* Navbar */}
        <Navbar />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/events" element={<Events />} />
            <Route path="/status" element={<Status />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/team" element={<Team />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}