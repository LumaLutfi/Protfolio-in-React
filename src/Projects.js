import React,{Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle,CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import './css/Projects.css';

class Projects extends Component{
constructor(props){
    super(props);
    this.state = {activeTab: 0};
    }

    toggleCategories(){
        if (this.state.activeTab === 0){
            return(
            //JavaScript Project
        <div className="projects-grid">
            <Card shadow={5} style={{minWidth:'450', margin:'450'}}>
            <CardTitle style={{color:'#fff', height:'176px', background:'url(https://clipartart.com/images/javascript-icon-clipart-6.png) center/cover'}}>JavaScript Project#1</CardTitle>
            <CardText className="projects-text">
                This Project for a Resturant. The customer can order online and choose from the menu options. 
                after choosing, the customer can see his order and payment amount. I used JavaScript to creat a method for calculate the total after 
                select each item from the menu.
            </CardText>
            <CardActions className="project-link" border>
                <Button colored><a href='https://github.com/LumaLutfi/FoodOrder.git'>GitHub</a></Button>
                <Button colored><a href="https://codepen.io/lumalutfi/pen/jZQOQm">CodePen</a></Button>
                <Button colored><a href='https://youtu.be/ekhvpUIYYck'>LiveDemo</a></Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card> 
        </div> 
            )
        } else if (this.state.activeTab === 1){
            return(
                //WordPress Project1
        <div className="projects-grid">
            <Card className="project-link" shadow={5} style={{minWidth:'450', margin:'450'}}>
            <CardTitle style={{color:'#fff', height:'176px', background:'url(http://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/256/wordpress-icon.png) center/cover'}}>WordPress Project#1</CardTitle>
            <CardText>
                This Project for an Orgenazation that proved supports and gender equality for pepole how live under poverty. 
                I created this website with 12 pages and I installed plugins that help the website functionality. 
                I can see his order and payment amount. 
                I desigend the navegation bar using HTML, uploaded images to the library, edit images using photoshop,
                used additional CSS to design layout and stractures. 
            </CardText>
            <CardActions border>
                {/* <Button coloreda><a href='/'>GitHub</a></Button>
                <Button colored>CodePen</Button> */}
                <Button colored><a href='https://jeepyah.org'>LiveDemo</a></Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
             {/*WordPress Project2 */}
            <Card className="project-link" shadow={5} style={{minWidth:'450', margin:'450'}}>
            <CardTitle style={{color:'#fff', height:'176px', background:'url(http://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/256/wordpress-icon.png) center/cover'}}>WordPress Project#2</CardTitle>
            <CardText className="projects-text">
            This Project for an Orgenazation that have a client wanted to start his own business. 
            The business is a coffee shop therfore I was very interested when I created this website.
            I installed some helpful plugins that help me to design the layout such as Elementor.
            I also used a short code plugin, additional CSS and modified themes.
            </CardText>
            <CardActions border>
                {/* <Button colored>GitHub</Button>
                <Button colored>CodePen</Button> */}
                <Button colored><a href='https://justcoffeemm.org/'>LiveDemo</a></Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
            {/*WordPress Project3 */}
             <Card className="project-link" shadow={5} style={{minWidth:'450', margin:'450'}}>
            <CardTitle style={{color:'#fff', height:'176px', background:'url(http://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/256/wordpress-icon.png) center/cover'}}>WordPress Project#3</CardTitle>
            <CardText className="projects-text"> 
                This Project for a Resturant. I created this website for a client that own a restaurant.
                In this website I created the most common pages that display the business. I also worked with SEO plugin that resulting 
                indexing the website in google search engine.   
            </CardText>
            <CardActions border style={{marginTop:'3em'}}>
                {/* <Button colored>GitHub</Button>
                <Button colored>CodePen</Button> */}
                <Button colored><a href='http://www.shawarmahuts.ca/'>LiveDemo</a></Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
         </div>
            )
        }/* else if (this.state.activeTab === 2){
            return(
            <Card className="project-link" shadow={5} style={{minWidth:'450', margin:'450'}}>
            <CardTitle style={{color:'#fff', height:'176px', background:'url(http://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/256/wordpress-icon.png) center/cover'}}>WordPress Project#3</CardTitle>
            <CardText className="projects-text"> 
                This Project for a Resturant. I created this website for a client that own a restaurant.
                In this website I created the most common pages that display the business. I also worked with SEO plugin that resulting 
                indexing the website in google search engine.   
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored><a href='http://www.shawarmahuts.ca/'>LiveDemo</a></Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
            
            )
        }else if(this.state.activeTab === 3){
            return(
            <Card className="project-link" shadow={5} style={{minWidth:'450', margin:'450'}}>
            <CardTitle style={{color:'#fff', height:'176px', background:'url(http://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/256/wordpress-icon.png) center/cover'}}>WordPress Project#4</CardTitle>
            <CardText className="projects-text">
            This Project for an Orgenazation that have a client wanted to start his own business. The business is a coffee shop therfore I was very interested when I created this website.
             I installed some helpful plugins that help me to design the layout such as Elementor.
              I also used a short code plugin, additional CSS and modified themes.
            </CardText>
            <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>CodePen</Button>
                <Button colored><a href='https://justcoffeemm.org/'>LiveDemo</a></Button>
            </CardActions>
            <CardMenu style={{color:'#fff'}}>
                <IconButton name='share'/>
            </CardMenu>
            </Card>
            )
            } */
        }
    render(){
        return(
            <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
            <Tab>JavaScript</Tab>
            <Tab>WordPress</Tab>
            {/* <Tab>WordPress</Tab>
            <Tab>WordPress</Tab> */}
            </Tabs>
            <section >
                <Grid className="projects-grid">
                <Cell col={12}>
                    <div className="content">{this.toggleCategories()}</div>
                </Cell>
                </Grid>
            </section>
            </div>
        )
    }
};

export default Projects;