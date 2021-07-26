import "./landing.scss";
import {Box, Container} from "@material-ui/core";

export default function Landing() {
    return (
      <Container className="landing-section section">
          <Box className="header">
              <h1>Jackie Chen</h1>
              <p> Computer & Data Scientist, Powerlifter, Gamer, Footballer </p>
          </Box>
      </Container>
    );
}