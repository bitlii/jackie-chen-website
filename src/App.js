import './App.scss';
import Landing from "./components/landing";
import Projects from "./components/projects";
import Skills from "./components/skills";
import About from "./components/about";
import {Container} from "@material-ui/core";

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
