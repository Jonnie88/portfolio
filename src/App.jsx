// App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

import data from "./data.json";

const App = () => {
  const user = data.find((user) => user.id === 1);
  let userFullName = `${user.firstName} ${user.lastName}`;
  return (
    <Router>
      <Routes>
        <Route
          path="portfolio/"
          element={<Layout userFullName={userFullName} />}
        >
          <Route path="portfolio/" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/projects" element={<Projects />} />
          <Route path="/portfolio/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
