import { BrowserRouter, Routes, Route, data } from 'react-router'
import { createRoot } from 'react-dom/client'
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { DATA } from '../dataCard';

createRoot(document.body).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout data={DATA} />} >
        <Route index element={<HomePage data={DATA} />} />
        <Route path="test" element={<div>test</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
)