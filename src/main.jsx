import { BrowserRouter, Routes, Route } from 'react-router'
import { createRoot } from 'react-dom/client'
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";

createRoot(document.body).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="test" element={<div>test</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
)