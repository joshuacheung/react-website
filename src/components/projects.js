import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton} from 'react-mdl';

class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { activeTab: 0};
  }

  toggleCategories(){ {/*determining which tab is pressed*/}
    if(this.state.activeTab === 2){
      return(
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> Portfolio Website</CardTitle>
          <CardText>
            React was used with the mdl library to create a website with tabs displaying my resume, projects, an about me page, and contact information. Uses javascript, html, and css.
          </CardText>
            <div className = "social-linkers">
          <CardActions border> GitHub

          <a href = "https://github.com/joshuacheung/React-Project" rel = "noopener noreferrer" target = "_blank">
            <i className = "fa fa-github-square"  aria-hidden="true"/>

          </a>

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>
      )
    }else if(this.state.activeTab === 0){
      return(
        <div className = "projects-grid">
        {/*Project 1*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(http://www.portoalegre.travel/upload/b/74/743409_github-wallpaper.png) center / cover'}}> Othello</CardTitle>
          <CardText>
            Othello Simulator created with an AI player with a GUI implementation.
          </CardText>
            <div className = "social-linkers">
          <CardActions border> GitHub

          <a href = "https://github.com/joshuacheung/Othello-" rel = "noopener noreferrer" target = "_blank">
            <i className = "fa fa-github-square"  aria-hidden="true"/>

          </a>

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>

        {/*Project 2*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(http://www.portoalegre.travel/upload/b/74/743409_github-wallpaper.png) center / cover'}}> Nqueens</CardTitle>
          <CardText>
            This lab performs a simluation of the "Left, Right, Center" game.
          </CardText>
            <div className = "social-linkers">
          <CardActions border> GitHub

          <a href = "https://github.com/joshuacheung/NQueens" rel = "noopener noreferrer" target = "_blank">
            <i className = "fa fa-github-square"  aria-hidden="true"/>

          </a>

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>

        {/*Project 3*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(http://www.portoalegre.travel/upload/b/74/743409_github-wallpaper.png) center / cover'}}> Chess Simulator</CardTitle>
          <CardText>
            Chess Simulator with a class for each piece and uses data structures to conserve memory.
          </CardText>
            <div className = "social-linkers">
          <CardActions border> GitHub

          <a href = "https://github.com/joshuacheung/Chess-Simulator" rel = "noopener noreferrer" target = "_blank">
            <i className = "fa fa-github-square"  aria-hidden="true"/>

          </a>

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>




        </div>





      )
    }else if(this.state.activeTab === 1){
      return(
        <div className = "projects-grid">
        {/*Project 1*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(http://houseofbots.com/images/news/2351/cover.png) center / cover'}}> Left Right Center Game</CardTitle>
          <CardText>
            This lab performs a simluation of the "Left, Right, Center" game.
          </CardText>
            <div className = "social-linkers">
          <CardActions border> GitHub

          <a href = "https://github.com/joshuacheung/Left-Right-Center-Game-" rel = "noopener noreferrer" target = "_blank">
            <i className = "fa fa-github-square"  aria-hidden="true"/>

          </a>

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>

        {/*Project 2*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(http://houseofbots.com/images/news/2351/cover.png) center / cover'}}> Bit Vector Project</CardTitle>
          <CardText>
            This code intakes bit vectors and determines whether they are prime or composite in addition to determining whether it is a perfect number.
          </CardText>
            <div className = "social-linkers">
          <CardActions border> GitHub

          <a href = "https://github.com/joshuacheung/Bit-Vector-Project" rel = "noopener noreferrer" target = "_blank">
            <i className = "fa fa-github-square"  aria-hidden="true"/>

          </a>

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>

        {/*Project 3*/}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style= {{color: '#fff', height: '176px', background: 'url(http://houseofbots.com/images/news/2351/cover.png) center / cover'}}> Multithreading in C</CardTitle>
          <CardText>
            Chess Simulator with a class for each piece and uses data structures to conserve memory.
          </CardText>
            <div className = "social-linkers">
          <CardActions border> GitHub

          <a href = "https://github.com/joshuacheung/Multithreading-in-C" rel = "noopener noreferrer" target = "_blank">
            <i className = "fa fa-github-square"  aria-hidden="true"/>

          </a>

          </CardActions>
          </div>
          <CardMenu style = {{color: '#fff'}}>
            <IconButton name = "share"/>
          </CardMenu>
        </Card>




        </div>
      )
    }else if(this.state.activeTab === 3){
      return(
        <div><h1>This is C++</h1></div>
      )
    }
  }

  render(){
    return(
      <div className = "category-tabs">
        <Tabs activeTab = {this.state.activeTab} onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Java</Tab>
          <Tab>C</Tab>
          <Tab>React</Tab>
        </Tabs>



          <Grid>
            <Cell col = {12}>
              <div className = "content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>

      </div>
    )
  }
}

export default Projects;
