import React from "react";
import "./projects.scss";
import {Container, Card, Label} from "semantic-ui-react";

export default function Projects() {
    return (
        <Container className="section">
            <h1> Projects </h1>
            <Card className="card">
                <Card.Content>
                    <h2>Refood</h2>
                    <p>A SENG302 Project.</p>
                    <div>
                        <Label color="blue">Java</Label>
                    </div>
                </Card.Content>
                <Card.Content extra>
                    <div>Github Link Here</div>
                </Card.Content>
            </Card>
        </Container>
    );
}