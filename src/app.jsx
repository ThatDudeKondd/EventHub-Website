import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout & Utility Components
import Navbar from "./components/eventhub/navbar";
import Footer from "./components/eventhub/footer";
import CursorAura from "./components/eventhub/cursorAura";
import ScrollToTop from "./components/eventhub/scrollToTop";
import PageNotFound from "./lib/pageNotFound";

// Pages
import Home from "./pages/home";
import Commands from "./pages/commands";
import Events from "./pages/events";
import Status from "./pages/status";
import Applications from "./pages/applications";
import Documentation from "./pages/documentation";
import Team from "./pages/team";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Affiliates from "./pages/affiliates";
import Dashboard from "./pages/dashboard";

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
