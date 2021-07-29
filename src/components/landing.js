import "./landing.scss";
import {Container, Flag} from "semantic-ui-react";

export default function Landing() {
    return (
        <Container id="home" className="landing-section section">
            <div className="header">
                <h1>Jackie Chen</h1>
                <div>
                    <Flag name="nz"/>
                    <Flag name="cn"/>
                </div>
                <br/>
                <p> Computer & Data Scientist, Powerlifter, Gamer, Footballer </p>
            </div>
        </Container>
    );
}