import "./landing.scss";
import {Container} from "semantic-ui-react";

export default function Landing() {
    return (
      <Container className="landing-section section">
          <div className="header">
              <h1>Jackie Chen</h1>
              <p> Computer & Data Scientist, Powerlifter, Gamer, Footballer </p>
          </div>
      </Container>
    );
}