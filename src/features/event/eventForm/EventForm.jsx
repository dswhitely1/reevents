import React, { Component } from 'react';
import {
  Button,
  Form,
  Segment
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  createEvent,
  updateEvent
} from '../eventActions';
import cuid from 'cuid';
import userImage from '../../../assets/images/user.png';

const mapState = ( state, ownProps ) => {
  const eventId = ownProps.match.params.id;
  let event     = {
    title   : '',
    date    : '',
    city    : '',
    venue   : '',
    hostedBy: ''
  };
  if (eventId && state.events.length > 0) {
    event = state.events.filter( event => event.id === eventId )[0];
  }

  return {
    event
  };
};

const actions = {
  createEvent,
  updateEvent
};

class EventForm extends Component {
  state = {
    ...this.props.event
  };

  componentDidMount() {
    if (this.props.selectedEvent !== null) {
      this.setState( {
        ...this.props.selectedEvent
      } );
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateEvent( this.state );
      this.props.history.push(`/events/${this.state.id}`)
    } else {
      const newEvent = {
        ...this.state,
        id          : cuid(),
        hostPhotoURL: userImage
      };
      this.props.createEvent( newEvent );
      this.props.history.push(`/events`);
    }
  };

  handleChange = ( {target: {name, value}} ) => {
    this.setState( {[name]: value} );
  };

  render() {
    const {title, date, city, venue, hostedBy} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete={'off'}>
          <Form.Field>
            <label>Event Title</label>
            <input placeholder="Event Title" value={title} name={'title'}
                   onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" placeholder="Event Date" value={date}
                   name={'date'} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City event is taking place" value={city}
                   name={'city'} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input placeholder="Enter the Venue of the event" value={venue}
                   name={'venue'} onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input placeholder="Enter the name of person hosting"
                   value={hostedBy} name={'hostedBy'}
                   onChange={this.handleChange} />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button"
                  onClick={this.props.history.goBack}>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default connect( mapState, actions )( EventForm );