import {Container, Card, Image, CardGroup, List, Label} from "semantic-ui-react";
import "./experience.scss";

export default function Experience() {
  const cardStyle = {
    maxWidth: "500px",
  }

  let data = [
    {
      business: "Statistics New Zealand",
      image: "/images/experience/statsnz.png",
      title: "Analyst Developer",
      timeSpent: "Nov 2021 - Present",
      keyPoints: [
        "Developed new and optimized existing solutions and systems to handle extremely large databases (millions of rows)",
        "Built an internal security tool to help identify servers with vulnerabilities"
      ],
      tech: ["C#", ".NET", "Azure", "JavaScript", "React", "Microsoft SQL Server", "Kanban"]
    }
  ]

  return (
    <Container id="experience" className="section">
      <h1>Experience</h1>
      <CardGroup>
        {
          data.map((job) => {
            return (
              <Card
                style={cardStyle}
                centered
                raised
                fluid >
                <Image src={job.image} className="business-image" />
                <Card.Content>
                  <Card.Header style={{textAlign: "left"}}>{job.title}</Card.Header>
                  <Card.Meta style={{fontSize: "16px"}}>{job.business}</Card.Meta>
                  <Card.Meta>{job.timeSpent}</Card.Meta>
                  <Card.Description>
                    <List>
                      {
                        job.keyPoints.map((point) => <List.Item> {point} </List.Item>)
                      }
                    </List>
                  </Card.Description>
                </Card.Content>
                <Card.Content>
                  <Card.Description>
                    <Label.Group>
                      {
                        job.tech.map((t) => <Label> {t} </Label>)
                      }
                    </Label.Group>
                  </Card.Description>
                </Card.Content>
              </Card>
            )
          })
        }
      </CardGroup>
    </Container>
  );
}
