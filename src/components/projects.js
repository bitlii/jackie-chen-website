import React from "react";
import "./projects.scss";
import {Container, Card, Label, CardGroup, LabelGroup, Icon, CardContent, Image} from "semantic-ui-react";

export default function Projects() {

    let data = [
        {
            title: "Refood",
            image: "/images/refood.png",
            meta: "",
            description: "A SENG302 Project.",
            labels: ["Java", "Spring", "JavaScript", "HTML/CSS", "Vue.js", "SQL"],
            //todo github:
        },
        {
            title: "Dodgeball!",
            image: "",
            meta: "The most fun you can have sitting in front of a UC Funkit (microcontroller kit).",
            description: "A player vs player game where one player must knock the other player out by hitting them with a dodgeball, and the other play must survive as long as possible.",
            labels: ["C"],
        },
        {
            title: "Recurrent",
            image: "",
            meta: "",
            description: "",
            labels: ["Java", "Android"]
        }
    ];


    function displayProjects() {
        return data.map((project) => {
           return (
               <Card className="project-card" raised>
                   <Image className="project-card-image" src={project.image}/>
                   <Card.Content>
                       <Card.Header>{project.title}</Card.Header>
                       <Card.Meta>{project.meta}</Card.Meta>
                       <Card.Description>{project.description}</Card.Description>
                   </Card.Content>
                   <Card.Content extra>
                       <Icon className="github right floated" size="big" link/>
                       <Label.Group as="span">
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
            <CardGroup centered className="project-list" doubling stackable>
                {displayProjects()}
            </CardGroup>
        </Container>
    );
}
