import React from 'react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailed from '../../features/event/EventDetailed/EventDetailed';
import PeopleDashboard
  from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage
  from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/eventForm/EventForm';

const App = () => {
  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path='/(.+)' render={() => (
        <>
          <NavBar />
          <Container className={'main'}>
            <Route exact path='/' component={HomePage} />
            <Route path='/events' component={EventDashboard} />
            <Route path='/events/:id' component={EventDetailed} />
            <Route path='/people' component={PeopleDashboard} />
            <Route path='/people:id' component={UserDetailedPage} />
            <Route path='/settings' component={SettingsDashboard} />
            <Route path='/createEvent' component={EventForm} />
          </Container>
        </>
      )} />
    </>
  );
};

export default App;

