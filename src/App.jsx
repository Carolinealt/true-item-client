import { NavLink, Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import clsx from "clsx";
import Home from "./pages/Home/Home";
import TasksPage from "./pages/TasksPage/TasksPage";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/tasks" className={buildLinkClass}>
          tasks
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TasksPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
