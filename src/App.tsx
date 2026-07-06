import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Home } from './pages/Home';
import { Validate } from './pages/Validate';
import { Register } from './pages/Register';
import { Comply } from './pages/Comply';
import { Fund } from './pages/Fund';
import { Market } from './pages/Market';
import { Grow } from './pages/Grow';
import { Story } from './pages/Story';
import { Pricing } from './pages/Pricing';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/validate" element={<Validate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/comply" element={<Comply />} />
        <Route path="/fund" element={<Fund />} />
        <Route path="/market" element={<Market />} />
        <Route path="/grow" element={<Grow />} />
        <Route path="/story" element={<Story />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
}
