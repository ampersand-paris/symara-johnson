import { BrowserRouter as Router,
  Routes,
  Route,
  Switch } from "react-router-dom";

import appHeight from "./appHeight";

/* === Pages === */ 
import About from "./pages/about";

function App() {
  return (
    <Router>
        <Routes>
          <Route element={<About />} path="/about"></Route>
        </Routes>
    </Router>
  );
}

export default App;
