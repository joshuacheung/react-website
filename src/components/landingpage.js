import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render(){
    return(
      <div style = {{width: '100%', margin: 'auto' }}>
        <Grid className = "landing-grid">
          <Cell col = {12}>
            <img
              src="https://image.flaticon.com/icons/svg/163/163801.svg"
              alt = "avatar"
              className = "avatar-img"
              />

            <div className = "banner-text">
              <h1>Software Engineer</h1>

              <hr/>
              <p> Java | C | HTML/CSS | JavaScript | React |</p>

              <div className = "social-links">

                <a href = "https://www.linkedin.com/in/joshua-cheung-05351415a" rel = "noopener noreferrer" target = "_blank">
                  <i className = "fa fa-linkedin-square"  aria-hidden="true"/>
                </a>

                <a href="https://github.com/joshuacheung" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
