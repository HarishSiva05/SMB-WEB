import { Route, Routes, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import Home from "./Pages/Home";
import Report from "./Pages/Report";
import Calender from "./Pages/Calender";
import Invoice from "./Pages/Invoice";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <Sidebar />
      <Pages>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route path="/calender" component={Calender} />
            <Route path="/report" component={Report} />
            
            <Route path="/inovice" component={Invoice} />
           
          </Routes>
        </AnimatePresence>
      </Pages>
    </>
  );
}

export default App;
