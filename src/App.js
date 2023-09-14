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

  function menuTransition(arg1, arg2, arg3) {
 
      console.log(arg1, arg2, arg3)

      let bigger = document.getElementsByClassName(arg1)
      let small = document.getElementsByClassName(arg2)
      let small2 = document.getElementsByClassName(arg3)
      
      small[0].style.width = "0px";
      small2[0].style.width = "0px";
      bigger[0].style.width = "100vW";

    setTimeout(function changeURL() {
      console.log(arg1)
      let slug = null;

      if (arg1 === 'projects-menu') {
        slug = '/projects'
      } else if (arg1 === 'symara-menu') {
        slug = '/'
      } else if (arg1 === 'contact-menu') {
        slug = '/contact'
      }

      let url = `${process.env.REACT_APP_FRONTEND}${slug}`
      window.location.href = url
    }, 400); 
}

  return (
    <Router>
        <Routes>
          <Route element={<Navigation order={<><About /><ProjectsMenu menuTransition={menuTransition} bigger='projects-menu' small='about-wrapper' small2='contact-menu' handleCallBack={callBack}/><ContactMenu menuTransition={menuTransition} bigger='contact-menu' small='about-wrapper' small2='projects-menu' handleCallBack={callBack} /></>} />} path="/"></Route>
          <Route element={<Navigation order={<><Symara menuTransition={menuTransition} bigger='symara-menu' small='projects-menu' small2='contact-wrapper' handleCallBack={callBack}/><ProjectsMenu menuTransition={menuTransition} bigger='projects-menu' small='symara-menu' small2='contact-wrapper' handleCallBack={callBack} /><Contact /></>} />} path="/contact"></Route>
          <Route element={<Navigation order={<><Symara menuTransition={menuTransition} bigger='symara-menu' small='projects-wrapper' small2='contact-menu' handleCallBack={callBack}/><ProjectsView /><ContactMenu menuTransition={menuTransition} bigger='contact-menu' small='projects-wrapper' small2='symara-menu' handleCallBack={callBack} /></>} />} path="/projects"></Route>
        </Routes>
    </Router>
  );
}

export default App;
