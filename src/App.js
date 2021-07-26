import './App.scss';
import Landing from "./components/landing";
import Projects from "./components/projects";
import {Container} from "@material-ui/core";

function App() {
  return (
    <Container className="App" maxWidth="sm">
      <Landing/>
      <Projects/>
    </Container>
  );
}

export default App;
