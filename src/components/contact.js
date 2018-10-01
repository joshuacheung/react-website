import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render(){
    return(
      <div className = "contact-body">
        <Grid className = "contact-grid">
          <Cell col={6}>
            <h2>Joshua Cheung</h2>
            <img
              src="https://image.flaticon.com/icons/svg/163/163801.svg"
              alt="avatar"
              style={{height: '250px'}}
              />

              <p style = {{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                  Hello! I am currently undergoing my third year pursuing a B.S Computer Science Degree.
                  I am looking for an internship in the software engineering/development field.
                   </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className = "contact-list">
              <List>

                <ListItem>
                  <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className = "fa fa-phone-square" aria-hidden = "true"/>
                      (408) 887-7743
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className = "fa fa-envelope" aria-hidden = "true"/>
                      joshuacheung1598@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style = {{fontSize: '25px', fontFamily: 'Anton'}}>
                    <i className = "fa fa-skype" aria-hidden = "true"/>
                      live:joshuac.ace
                  </ListItemContent>
                </ListItem>

              </List>
            </div>


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
