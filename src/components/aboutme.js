import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class About extends Component {
  render(){
    return(
      <div>
        <Grid>
          <Cell col = {4}>
            <div style={{textAlign: 'center'}}>
              <img
                src= "https://image.flaticon.com/icons/svg/163/163801.svg"
                alt="avatar"
                style = {{height: '300px'}}
                paddingTop
                />
            </div>

            <h2 style = {{paddingTop: '2em'}}>Joshua Cheung</h2>
            <h4 style = {{color: 'grey'}}>Programmer</h4>
            <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am currently pursuing my BS Computer Science Degree at UCSC!
            I enjoy playing piano, rock climbing, and playing tennis. </p>
            <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>2635 Admiral Circle, Hayward, CA 94545</p>
            <h5>Phone</h5>
            <p>(408) 887-7743</p>
            <h5>Email</h5>
            <p>joshuacheung1598@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style = {{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>


          <Cell className = "about-right-col" col = {8}>
            <h2>Education</h2>


            <Education
              startYear = {2016}
              endYear = {2020}
              schoolName = "My University"
              schoolDescription = "Studied Computer Science at University of California, Santa Cruz"

              />

            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>

            <Experience
              startYear = "June 2018"
              endYear = "August 2018"
              jobName = "Programming Instructor"
              jobDescription = "Taught mid and advanced levels of Java, C++ and C to aspiring CS students"

              />

              <Experience
                startYear = "July 2017"
                endYear = "September 2017"
                jobName = "Dining Hall Busboy"
                jobDescription = "Worked at the Stanford Graduate School of Business as a busboy and learned how to communicate with people of varying cultural backgrounds"

                />

                <Experience
                  startYear = "June 2016"
                  endYear = "September 2017"
                  jobName = "Paris Baguette Employee"
                  jobDescription = "Worked as an advertising representative, barista, and cashier manager"

                  />

                  <Experience
                    startYear = "June 2015"
                    endYear = "September 2015"
                    jobName = "Underwriter Laboratories Intern"
                    jobDescription = "Developed and managed customer service input sheets for the company"

                    />

                  <hr style={{borderTop: '3px solid #e22947'}}/>
                  <h2>Skills</h2>

                  <div className = "progress-lines">
                    <Skills
                      skill = "Java     "
                      progress = {90}
                      />

                      <Skills
                        skill = "C         "
                        progress = {75}
                        />

                        <Skills
                          skill = "JavaScript"
                          progress = {50}
                          />

                          <Skills
                            skill = "HTML/CSS "
                            progress = {50}
                            />

                            <Skills
                              skill = "C++      "
                              progress = {50}
                              />
                  </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
