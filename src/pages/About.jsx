import React from "react";
import "../styles/About.css";
import Newsletter from "../shared/Newsletter";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <>
      <section className="pt-3">
        <Container className="pt-3">
          <Row>
            <Col lg="8" className="pt-4">
              <div className="about-container pt-3">
                
                <img src='https://img.freepik.com/free-photo/happy-young-asia-businessmen-businesswomen-meeting-brainstorming-ideas-about-new-paperwork-project-colleagues-working-together-planning-success-strategy-enjoy-teamwork-small-modern-office_7861-2535.jpg?w=826&t=st=1675566846~exp=1675567446~hmac=ce4f87c25cf8c902afd374d1195c6de52d09dd68220876c2293e52272cf13157' alt="Our Team" className="team-image" />
                <p>
                  Welcome to our <span className="highlight">traveGo </span>
                  website, where we aim to inspire and
                  help plan your next adventure. We believe in the power of
                  travel to create meaningful connections and provide a unique
                  perspective on the world. Our team of experienced travelers
                  and content creators works tirelessly to bring you the latest
                  information, tips, and recommendations for destinations around
                  the globe. Whether you're seeking excitement or relaxation, we
                  have something for everyone. We're proud of the diverse
                  backgrounds and perspectives our team members bring to the
                  table, and we're dedicated to delivering high-quality content
                  that truly resonates with our readers. Thank you for choosing
                  our travel website as your trusted source for all things
                  travel. We can't wait to see where your journey takes you
                  next.
                </p>
              </div>
            </Col>
            <Col lg='4' className="pt-5">
                <img src="https://img.freepik.com/free-photo/young-traveler_1150-5654.jpg?w=740&t=st=1675567331~exp=1675567931~hmac=387a32e83f357ec9156ba25c0db277b4f7ce64cb7c0d51be4036d01563226dc8" alt="aboutImg" className="team-image" />
                <img src="https://img.freepik.com/free-photo/tourist-from-mountain-top-sun-rays-man-wear-big-backpack-against-sun-light_1150-9129.jpg?w=740&t=st=1675567778~exp=1675568378~hmac=4d972850a6663c471af4c3c3a093dccc1808a890733a8b15f3cfe33b97de5b42" alt="aboutImg" className="team-image" />
            </Col>
        
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default About;
