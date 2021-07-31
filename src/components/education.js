import {Container, Card, Icon} from "semantic-ui-react";

export default function Education() {
    const educationCardStyle = {
        maxWidth: "500px",
    }
    // todo: extract this css into scss file.
    const header = {
        display: "flex",
        justifyContent: "center",
    }

    return (
      <Container id="education" className="section">
          <div style={header}>
              <Icon className="graduation cap" style={{margin: "auto 4px auto 0"}} size="large"/>
              <h2 style={{margin: "auto 0"}}>Education</h2>
          </div>
          <Card
              style={educationCardStyle}
              centered
              raised
              fluid>
              <Card.Content>
                  <Card.Header textAlign="left">
                      University of Canterbury
                  </Card.Header>
                  <Card.Meta>
                      2019 - 2021
                  </Card.Meta>
                  <Card.Meta>
                      7.11 GPA
                  </Card.Meta>
                  <Card.Description>
                      Bachelor of Science: Computer Science and Data Science
                  </Card.Description>
              </Card.Content>
              <Card.Content extra>
                  <Card.Description>
                      UC Football Club General Executive Committee Member
                  </Card.Description>
                  <Card.Meta>
                      2020 - 2021
                  </Card.Meta>
              </Card.Content>
          </Card>
      </Container>
    );
}