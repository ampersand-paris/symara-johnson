import { BrowserRouter as Router,
  Routes,
  Route,
  Switch } from "react-router-dom";

import appHeight from "./appHeight";
import { useState } from "react";

/* === Pages === */ 
import About from "./pages/about";
import Contact from "./pages/contact"
import ProjectsView from "./pages/projectsView";
import Navigation from "./partials/navigation";
import ProjectsMenu from "./partials/projects";
import ContactMenu from "./partials/contact";
import Symara from "./partials/symara";

function App() {
  const [order, setOrder] = useState(<><About /><ProjectsMenu handleCallBack={callBack}/><ContactMenu handleCallBack={callBack} /></>);

  function callBack(arg) {
    setOrder(arg)
  }

  return (
    <Router>
        <Routes>
          <Route element={<Navigation order={<><About /><ProjectsMenu handleCallBack={callBack}/><ContactMenu handleCallBack={callBack} /></>} />} path="/"></Route>
          <Route element={<Navigation order={<><Symara handleCallBack={callBack}/><ProjectsMenu handleCallBack={callBack} /><Contact /></>} />} path="/contact"></Route>
          <Route element={<Navigation order={<><Symara handleCallBack={callBack}/><ProjectsView /><ContactMenu handleCallBack={callBack} /></>} />} path="/projects"></Route>
        </Routes>
    </Router>
  );
}

export default App;
