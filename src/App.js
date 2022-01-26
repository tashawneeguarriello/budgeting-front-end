import { Routes, Route } from "react-router-dom";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import axios from "axios";

import NavBar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";

// const URL = useEffect(() => {
//   axios.get(`${URL}/transactions`).then((response) => {
//     setTotal(
//       response.data.reduce((a, b) => {
//         a = a.amount + b.amount;
//         return { amount: a };
//       }).amount
//     );
//   });
// }, []);

function App() {
  //const [total, setTotal] = useState(0);
  return (
    <div>
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
