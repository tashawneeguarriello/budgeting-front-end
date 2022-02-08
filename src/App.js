import { Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

import NavBar from "./Components/Navbar";

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
