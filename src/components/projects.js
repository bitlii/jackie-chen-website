import React from "react";
import "./projects.scss";
import {Container, Card, Label, CardGroup, Icon, Image} from "semantic-ui-react";

export default function Projects() {

    let data = [
        {
            title: "Refood",
            image: "/images/refood.png",
            meta: "SENG302 University Project",
            description: "Developed in a team of 8, Refood is a website that helps reduce food (and other) waste by connecting people with businesses to help sell left over goods.",
            labels: ["Java", "Spring", "JavaScript", "HTML/CSS", "Vue.js", "SQL"],
            github: "",
            link: "",
        },
        {
            title: "Dodgeball!",
            image: "",
            meta: "The most fun you can have sitting in front of a UC Funkit (microcontroller kit).",
            description: "A player vs player game where one player must knock the other player out by hitting them with a dodgeball, and the other play must survive as long as possible.",
            labels: ["C"],
            github: "https://github.com/nzjchen/ENCE260-Assignment",
        },
        {
            title: "Recurrent",
            image: "/images/recurrent.png",
            meta: "",
            description: "A simple android app that helps track your recurring expenses and income streams.",
            labels: ["Java", "Android"],
            github: "https://github.com/nzjchen/recurrent",
            link: "",
        },
        {
            title: "Streetwhere",
            image: "/images/streetwhere.png",
            meta: "",
            description: "My currently active side project - A WIP website to help find connect with clothing stores worldwide.",
            labels: ["HTML/CSS", "React", "JavaScript", "PostgreSQL"],
            link: "https://www.streetwhere.net/",
        }
    ];


    function displayProjects() {
        return data.map((project) => {
           return (
               <Card className="project-card" raised>
                   {
                       project.image !== ""
                           ? <Image className="project-card-image" src={project.image} alt="Image of the project"/>
                           : null
                   }
                   <Card.Content>
                       <Card.Header>{project.title}</Card.Header>
                       <Card.Meta>{project.meta}</Card.Meta>
                       <Card.Description>{project.description}</Card.Description>
                   </Card.Content>
                   <Card.Content extra>
                       {
                           project.github !== ""
                                ? <a href={project.github}><Icon className="github right floated" size="big" link /></a>
                                : null
                       }
                       {
                           project.link !== ""
                               ? <a href={project.link}><Icon className="linkify right floated" size="big" link /></a>
                               : null
                       }
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
