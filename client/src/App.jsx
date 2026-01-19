import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Edit from "./pages/edit";
import Create from "./pages/create";
import Undefined from "./pages/undefined";
import Sidebar from "./components/sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />

        <main className="flex-1 p-6 md:p-8 lg:p-10 h-screen overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tarif/:id" element={<Detail />} />
            <Route path="/ekle" element={<Create />} />
            <Route path="/düzenle/:id" element={<Edit />} />
            <Route path="/*" element={<Undefined />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
