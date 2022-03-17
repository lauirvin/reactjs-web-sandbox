import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HookApiTest from '../pages/HookApiTest';
import CanvasDrawingBoard from '../pages/CanvasDrawingBoard';
import NotFound from '../pages/NotFound';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/hook-api-test" element={<HookApiTest />} />
      <Route path="/canvas-drawing-board" element={<CanvasDrawingBoard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
