import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
