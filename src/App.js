import { Route, 
         Routes, 
         useLocation } from "react-router-dom";
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
