import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AboutUsPage,
  HomePage,
  StatisticsPage,
  SchedulePage,
  TeamsPage,
} from "./pages";
import Sidebar from "./components/nav";
import Header from "./components/Header";
import { navData } from "./constants";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <div className="flex flex-col">
          <Header />
          <div className="bg-gray-100 max-w-7xl mx-auto flex sm:flex-row flex-col">
            <Sidebar />
            <div className="w-screen sm:w-[calc(100vw-210px)] max-w-[calc(1280px-210px)]">
              <Routes>
                {navData.map((item) => (
                  <Route
                    key={item.id}
                    path={item.href}
                    element={
                      item.component === "HomePage" ? (
                        <HomePage />
                      ) : item.component === "SchedulePage" ? (
                        <SchedulePage />
                      ) : item.component === "StatisticsPage" ? (
                        <StatisticsPage />
                      ) : item.component === "TeamsPage" ? (
                        <TeamsPage />
                      ) : item.component === "AboutUsPage" ? (
                        <AboutUsPage />
                      ) : (
                        <h3>Not Found</h3>
                      )
                    }
                  />
                ))}
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
