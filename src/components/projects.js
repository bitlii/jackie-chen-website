import React from "react";
import "./projects.scss";
import {Container, Card, CardContent, CardActions, Chip} from "@material-ui/core";

export default function Projects() {
    return (
        <Container className="section">
            <h1> Projects </h1>
            <Card className="card">
                <CardContent>
                    <h2>Refood</h2>
                    <p>A SENG302 Project.</p>
                </CardContent>
                <div>
                    <Chip label="Java" color="primary"/>
                </div>
                <CardActions>
                    <div>Github Link Here</div>
                </CardActions>
            </Card>
        </Container>
    );
}