import {Container} from "semantic-ui-react";

export default function About() {
    const infoStyle = {
        textAlign: "left",
        fontSize: "16px",
    }

    return(
        <Container
            id="about"
            className="section">
            <h1> About Me </h1>
            <p style={infoStyle}>
                Hi, I am currently a Computer Science & Data Science student in my final year at the University of Canterbury.
                I've been enjoying programming since high school and my passion for it has grown every year as I
                continue to accumulate more and more knowledge of all aspects of programming.
            </p>
            <p style={infoStyle}>
                If I'm not programming (or keeping up with school), then you'll probably find me playing video games with
                friends, on the pitch playing football, or pushing myself to the absolute limits in the gym.
            </p>
        </Container>
    );
}
