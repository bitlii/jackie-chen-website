import React from "react";
import "./projects.scss";
import {Container, Card, Label, CardGroup, LabelGroup} from "semantic-ui-react";

export default function Projects() {

    let data = [
        {
            title: "Refood",
            description: "A SENG302 Project.",
            labels: ["Java", "Spring", "JavaScript", "HTML/CSS", "Vue.js", "SQL"],
        },
        {
            title: "Dodgeball!",
            description: "The most fun you can have sitting in front of a UC Funkit (microcontroller kit).\n" +
                "A player vs player game where one player must knock the other player out by hitting them with a dodgeball, and the other play must survive as long as possible.",
            labels: ["C"],
        }
    ];


    function displayProjects() {
        return data.map((project) => {
           return (
               <Card className="project-card">
                   <Card.Content>
                       <h2>{project.title}</h2>
                       <p>{project.description}</p>
                   </Card.Content>
                   <Card.Content extra>
                       <Label.Group color="blue">
                           {
                               project.labels.map((label) => {
                                   return <Label>{label}</Label>
                               })
                           }
                       </Label.Group>
                   </Card.Content>
               </Card>
           );
        });
    }


    return (
        <Container id="projects" className="project-section section">
            <h1> Projects </h1>
            <CardGroup centered className="project-list">
                {displayProjects()}
            </CardGroup>
        </Container>
    );
}