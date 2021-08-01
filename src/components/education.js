import "./_base.scss";
import {Container, Card, Icon, Divider} from "semantic-ui-react";

export default function Education() {
    const educationCardStyle = {
        maxWidth: "500px",
    }

    return (
      <Container id="education" className="section">
          <h1>Education</h1>

          <Card
              style={educationCardStyle}
              centered
              raised
              fluid>
              <Card.Content>
                  <Card.Header textAlign="left">
                      <Icon className="graduation cap"/> University of Canterbury
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
              <Card.Content>
                  <Card.Description>
                      Notable courses include:
                      Algorithms, Artificial Intelligence, Big Data Computing, Data Wrangling, Web Computing Architectures, Software Engineering.
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
