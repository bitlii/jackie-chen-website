import './App.scss';
import 'semantic-ui-css/semantic.min.css'
import Landing from "./components/landing";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import {Container} from "semantic-ui-react";

function App() {
  return (
    <Container className="app" maxWidth="md">
        <Landing/>
        <About/>
        <Skills/>
        <Projects/>
    </Container>
  );
}

export default App;
