import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import EduExp from "./pages/EduExp";
import Spec from "./pages/Spec";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import ContactMe from "./pages/ContactMe";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/eduexp" element={<EduExp />} />
        <Route path="/spec" element={<Spec />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}