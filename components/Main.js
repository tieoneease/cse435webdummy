
import React from 'react'
import { Grid, 
  Row, 
    Col,
    Image } from 'react-bootstrap'

const Main = () => (
  <Grid>
    <Row className="show-grid">
      <Col xs={12} md={10}>
        <h1>Project Overview</h1>
        <h2>Background</h2>
        <p>
          Autonomous or Highly Automated driving is an area of intense interest by the public and
          the auto industry. It is obvious that a self driving car must be able to stay in its lane,
          brake at intersections, & remain under control during maneuvers, in other words exibit
          basic driving skills. But another fundamental aspect of the driving function is avoiding
          collisions (in this case with pedestrians) in emergency situations. Human drivers do
          this by:
        </p>
        <ol>
          <li>
            Recognizing & responding to potential hazardous situations (identifying a
            risk and adjusting driving situation to reduce it)
          </li>
          <li>
            Recognizing & responding to immediate hazards (identifying an imminent
            collision and executing strong avoidance maneuver)
          </li>
        </ol>

        <p>
          The APCA is a system fitted to an autonomous vehicle for the purpose of avoiding
          pedestrians automatically (without human driver intervention).
    </p>
  <h5><a href="http://www.cse.msu.edu/~cse435/Projects/F2016/ProjectDescriptions/Mobis-Ped-Avoid-2016-Agnew.pdf">Original Project Description.pdf</a></h5>
    <h2>Features</h2>
    <p>
      The APCA will comprise of the following main features:
    </p>
    <ol>
      <li>
        Monitor path in front of vehicle while driving, looking for pedestrians and
        identifying potential collisions with them.
    </li>
    <li>
      Determine potential collisions by
      analyzing collision path between vehicle and pedestrian. 
    </li>
    <li>
      Take action to avoid
      pedestrians by executing velocity reduction commands (automatic braking)
      which override the current steady state velocity of the vehicle. 
    </li>
    <li>
      An automatic brake by wire system in the vehicle to reduce
      velocity as requested by the system
    </li>
    <li>
      Behicle velocity will automatically return to steady state
      velocity When the command is ended (hazard no longer exists)
    </li>
  </ol>

</Col>
    </Row>

    <Row className="show-grid">
      <Col xs={6} md={10}>
        <h2>Team</h2>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={6} md={2}>
        <h4>CJ Cummings</h4>
        <a href="http://www.cse.msu.edu/~cummi197/">
        <Image responsive src="./assets/CJ.jpg" rounded></Image>
      </a>
        <h4>Security Engineer</h4>
      </Col>
      <Col xs={6} md={2}>
        <h4>Tyler Maklebust</h4>
        <a href="http://www.cse.msu.edu/~maklebus/">
        <Image responsive src="./assets/tyler.jpg" rounded></Image>
      </a>
        <h4>Project Facilitator</h4>
      </Col>
      <Col xs={6} md={2}>
        <h4>Mark Velez</h4>
        <a href="http://www.cse.msu.edu/~velezmar/">
        <Image responsive src="./assets/mark.jpg" rounded></Image>
      </a>
        <h4>Artifacts Manager</h4>
      </Col>
      <Col xs={6} md={2}>
        <h4>Sam Chung</h4>
        <a href="http://www.cse.msu.edu/~chungsam/">
        <Image responsive src="./assets/sam.jpg" rounded></Image>
      </a>
        <h4>Project Manager</h4>
      </Col>
      <Col xs={6} md={2}>
        <h4>Wan Kim</h4>
        <a href="http://www.cse.msu.edu/~kimwan/">
        <Image responsive src="./assets/wan.jpg" rounded></Image>
      </a>
        <h4>Domain Expert</h4>
      </Col>
    </Row>
    <Row className="show-grid">
      <Col xs={6} md={10}>
        <h2>Course Info</h2>
        <h4>Instructor: <a href="http://cse.msu.edu/~chengb/">Dr. Betty Cheng</a></h4>
        <h4>Course Website: <a href="http://www.cse.msu.edu/~cse435/">CSE435: Software Engineering</a></h4>
      </Col>
    </Row>

  </Grid>
)

export default Main


