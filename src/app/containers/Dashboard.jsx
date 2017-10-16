import React from 'react';
import { Menu, Grid } from 'semantic-ui-react';

export default class Dashboard extends React.Component{
  constructor(){
    super();
    this.state = {
      activeItem: null
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name });
  }

  render(){
    return(
      <Grid>
        <Grid.Row column={1} padding={20}>
            <Grid.Column>
              <Menu>
                <Menu.Item
                  name='editorials'
                  active={this.state.activeItem === 'editorials'}
                  onClick={this.handleItemClick}
                >
                  Editorials
                </Menu.Item>

                <Menu.Item
                  name='reviews'
                  active={this.state.activeItem === 'reviews'}
                  onClick={this.handleItemClick}
                >
                  Reviews
                </Menu.Item>

                <Menu.Item
                  name='upcomingEvents'
                  active={this.state.activeItem === 'upcomingEvents'}
                  onClick={this.handleItemClick}
                >
                  Upcoming Events
                </Menu.Item>
              </Menu>
            </Grid.Column>
        </Grid.Row>
        <DatePicker/>
      </Grid>
    );
  }
}
