import React from "react";

import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import { Container } from "semantic-ui-react";

const App = () => {
  return (
    <>
      <NavBar/>
      <Container className={'main'}>
        <EventDashboard/>
      </Container>
    </>
  );
};

export default App;

