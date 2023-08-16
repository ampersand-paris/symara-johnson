import { BrowserRouter as Router,
  Routes,
  Route,
  Switch } from "react-router-dom";

import appHeight from "./appHeight";

/* === Pages === */ 
import About from "./pages/about";
import Contact from "./pages/contact"
import ProjectsView from "./pages/projectsView";

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Contact />} path="/contact"></Route>
          <Route element={<ProjectsView />} path="/projects"></Route>
        </Routes>
    </Router>
  );
}

export default App;
