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
        "Built a React application to facilitate the efficient transferring and exporting of database tables containing upwards of hundreds of millions of rows in any given export run. ",
        "Optimized existing solutions and systems to handle large databases read and writes (millions of rows), while maintaining security and confidentiality of the data.",
        "Extended existing applications to include new features and tools for the 2023 census.",
        "Mentored a graduate software developer through onboarding and our dozens of complex applications and systems."
      ],
      tech: ["C#", ".NET", "Azure", "TypeScript", "React", "SQL Server", "Kanban"]
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
