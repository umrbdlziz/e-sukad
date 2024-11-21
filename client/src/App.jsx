import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUsPage,
  HomePage,
  ResultPage,
  SchedulePage,
  TeamsPage,
} from "./pages";
import Sidebar from "./components/nav";
import Header from "./components/Header";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto ">
      <BrowserRouter>
        <div className="flex flex-col">
          <Header />
          <div className="flex sm:flex-row flex-col">
            <Sidebar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/result" element={<ResultPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/teams" element={<TeamsPage />} />
              <Route path="/aboutus" element={<AboutUsPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
