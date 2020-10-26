import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Jony from "./components/Jony";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Jony} />
          <Route path='/education' component={Education} />
          <Route path='/experience' component={Experience} />
          <Route path='/projects' component={Projects} />
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
