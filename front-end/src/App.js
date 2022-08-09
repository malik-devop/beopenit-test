import MyForm from "./screen/product-table";
import MyList from "./screen/product-list";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyForm />} />
          <Route path="/list" element={<MyList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
