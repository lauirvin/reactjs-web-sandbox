import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import HookApiTest from '../pages/HookApiTest';
import DndConnectArrows from '../pages/DndConnectArrows';
import NotFound from '../pages/NotFound';

const Router = (): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/hook-api-test" element={<HookApiTest />} />
      <Route path="/dnd-connect-arrows" element={<DndConnectArrows />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
export default Router;
