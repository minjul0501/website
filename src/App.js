import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import FrontPage from "./pages/frontPage";
import BioPage from "./pages/bio";
import RoboticsPage from "./pages/robotics";
import {menuOptions} from "./pages/constants";
import FirstBlog from "./pages/first_blog";

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path={"/"}
               element={<FrontPage/>}
        />
         <Route path={"/".concat(menuOptions[1].toLowerCase())}
                element={<BioPage/>}
         />
          <Route path={"/".concat(menuOptions[2].toLowerCase().replace(" ", "_"))}
                 element={<RoboticsPage/>}
          />
          <Route path={"/first_blog"}
                 element={<FirstBlog/>}
          />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
