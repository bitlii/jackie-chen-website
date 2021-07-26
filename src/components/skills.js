import React from 'react';
import "./skills.scss";
import {Chip, Container, Divider} from "@material-ui/core";

export default function Skills() {
    let data = {
        languages: ["Python", "Java", "JavaScript", "R", "SQL", "HTML/CSS (+ SASS)"],
        frameworks: ["Spring", "React", "Vue.js", "Node.js", "Express"],
        tools: ["Git"],
    }

    function displayCategory(skills) {
        return skills.map((skill) => {
            return <Chip className="skill" label={skill} color="primary"/>
        });
    }

    return (
      <Container className="section">
          <h1> Skills </h1>
          <h3> Languages </h3>
          <div className="category">
              {displayCategory(data.languages)}
          </div>
          <h3> Frameworks </h3>
          <div className="category">
              {displayCategory(data.frameworks)}
          </div>
          <h3> Tools </h3>
          <div className="category">
              {displayCategory(data.tools)}
          </div>
      </Container>
    );
}