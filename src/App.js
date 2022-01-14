import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Landing from "./components/landing";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Header from "./components/header";
import {Container} from "semantic-ui-react";

function App() {
  return (
    <Container className="app" maxWidth="md">
        <Header/>
        <Landing/>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Projects/>
    </Container>
  );
}

export default App;
