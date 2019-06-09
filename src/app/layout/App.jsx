import React, { Component } from 'react';
import EventDashboard from '../../features/event/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/navBar/NavBar';
import { Container } from 'semantic-ui-react';
import {
  Route,
  Switch,
  withRouter
} from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailed from '../../features/event/EventDetailed/EventDetailed';
import PeopleDashboard
  from '../../features/user/PeopleDashboard/PeopleDashboard';
import UserDetailedPage
  from '../../features/user/UserDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import EventForm from '../../features/event/eventForm/EventForm';

class App extends Component {
  render() {
    return (
      <>
        <Route exact path='/' component={HomePage} />
        <Route path='/(.+)' render={() => (
          <>
            <NavBar />
            <Container className={'main'}>
              <Switch key={this.props.location.key}>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/events' component={EventDashboard} />
                <Route path='/events/:id' component={EventDetailed} />
                <Route path='/people' component={PeopleDashboard} />
                <Route path='/profile:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingsDashboard} />
                <Route path={['/createEvent', '/manage/:id']}
                       component={EventForm} />
              </Switch>
            </Container>
          </>
        )} />
      </>
    );
  };
}

export default withRouter( App );

