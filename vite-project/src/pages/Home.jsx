import React from "react";
import { Container, Button } from "react-bootstrap";
import "../styles/Home.css";
const Home = () => {
  return (
    <Container>
      <h1>Welcome To Our Website</h1>
      <p>We are here to serve You</p>
      <Button variant="primary" type="submit">
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
