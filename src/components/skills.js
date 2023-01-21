import React from 'react';
import "./skills.scss";
import {Container, Label} from "semantic-ui-react";

export default function Skills() {
    let data = {
        languages: ["TypeScript/JavaScript", "C#", "HTML/CSS", "Python", "Java", "SQL (T-SQL, PostgreSQL)"],
        frameworks: ["React", ".NET", "Node.js", "Express", "Jest" ],
        tools: ["Git", "Azure", "Windows", "Linux"],
        // todo: processes
    }

    function displayCategory(skills) {
        return skills.map((skill) => {
            return <Label>{skill}</Label>
        });
    }

    return (
      <Container id="skills" className="section">
          <h1 > Skills </h1>
          <h3> Languages </h3>
          <Label.Group className="category">
              {displayCategory(data.languages)}
          </Label.Group>
          <h3> Frameworks </h3>
          <Label.Group className="category">
              {displayCategory(data.frameworks)}
          </Label.Group>
          <h3> Tools </h3>
          <Label.Group className="category">
              {displayCategory(data.tools)}
          </Label.Group>
      </Container>
    );
}
