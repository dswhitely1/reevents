import React from 'react';
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Segment
} from 'semantic-ui-react';
import logo from '../../assets/images/logo.png';

const HomePage = ( {history: {push}} ) => {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src={logo}
            alt='logo'
            style={{marginBottom: 12}}
          />
          Re-vents
        </Header>
        <Button onClick={() => push( '/events' )} size='huge' inverted>
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
