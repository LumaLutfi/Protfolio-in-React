import React, {Component} from 'react';
import{Grid, Cell, Content} from 'react-mdl';
import './css/resume.css';
import './components/education';
import Education from './components/education';
import Experience from './components/experience';
import Skills from './components/skills';

class Resume extends Component{
    render() {
        return(
            <div className="contact-body">
            <Content> 
                <Grid>
                    <Cell col={4}>
                      <div style={{textAlign:'center'}}>
                        <img src="https://cdn.impactinit.com/cdn/x/x@82e4a27fd3/smss52/smsimg30/pv/isignstockcontributors/iss_18508_00897.jpg"
                        alt='avatar'
                        style={{height:'250px',paddingTop:'6em'}}>
                        </img>
                      </div>
                    
                    <h1 style={{paddingTop:'1em',color:'black',textAlign:'left'}}>Luma Altaae</h1>
                    <h4 style={{color:'gray',textAlign:'left'}}>WEB DEVELOPER</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p style={{textAlign:'justify'}}>Visionary Junior Front End Developer with more than 1 year of 
                        expertise spanning front-end web development, functional programming 
                        and graphic design. Proven track record in architecting innovative web 
                        designs that exceed end-user expectations. Adept in supporting with web 
                        development projects—designing, testing and deploying highly responsive 
                        and dynamic websites. Expertise in utilizing content management systems,
                        programming languages to orchestrate fully-optimized and responsive sites 
                        with high compatibility across multiple platforms. 
                        Expertise in architecting web design layouts, managing content, 
                        administering database systems and employing new technology to enhance 
                        web functionality and exceed bottom-line requirements.</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <div style={{textAlign:'left'}}><h5 >Address</h5>
                        <p>80 Prestwick St SE</p>
                        <h5>Phone</h5>
                        <p>(403)616-8775</p>
                        <h5>Email</h5>
                        <p>luma_kamal@yahoo.com</p>
                        </div>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    </Cell>
                    <Cell className='resume-right-col' col={8}>
                    
                    <h1 style={{textAlign:'left'}}>Education</h1>
                    <Education 
                    startYear={2017}
                    endYear={2018}
                    schoolName="SAIT"
                    schoolDescription="Object Oriented Software Development Certificate"/>

                    <Education 
                    startYear={2000}
                    endYear={2004}
                    schoolName="University of Baghdad"
                    schoolDescription="BSc. in Statistics"/>
                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    
                    <h1 style={{textAlign:'left'}}>Experience</h1>
                    <Experience 
                    startYear='Jan 2018'
                    endYear='March 2018'
                    jobName="Front & Back End Web Development for the University of Calgary"
                    jobDiscreption='Web Development: Pioneered website updates to meet client 
                    specifications—assessed client needs, identified requirements and required 
                    custom updates. Utilized Python, Django, JavaScript, PHP, HTML and CSS programming 
                    languages to orchestrate codes, designs and website user interface functions. 
                    Developed menu bar, logos, layout, drop-down list menus and design layout.
                    Database Management: Steered the integration of back-end web applications—utilized SQL to calculate, 
                    sort and organize data sets and create structured tables. Administered database management 
                    system and developed end-user documentation to support with the maintenance of website database system updates.'
                    />
                    <Experience 
                    startYear={2018}
                    endYear='to present'
                    jobName="Front End Web Developer for CUSO International"
                    jobDiscreption='Project Management || Web Development || Client Engagement
                    Recruited by senior organizational leaders to support with the development and administration of the organization-wide website. Engaged directly with clients, assessed their needs, identified website specifications and administered full project life cycle that includes planning, designing, testing, deployment and post-development support.
                    Web Development: Pioneered a 20-page custom website—identified the hosting domain server and pioneered organization’s logo, branding and site layout. Utilized a content management system that includes WordPress and installed plugins, themes and SEO enhancement features. Inputted web content, utilized programming languages and implemented design functionality and requirements.
                    End-User Support: Orchestrated end-user documentation and provided ongoing support—steered training for target users and administered regular website updates. Maintained content, installed new plugins and integrated designated technology to improve dynamic behaviour  and boost responsiveness.
                    '
                    />
                     <hr style={{borderTop:'3px solid #e22947'}}/>
                     <h1 style={{textAlign:'left'}}>Skills</h1>
                     <Skills 
                     skill='JavaScript'
                     progress={50}/>
                     <Skills 
                     skill='HTML/CSS'
                     progress={60}/>
                     <Skills 
                     skill='React'
                     progress={50}/>
                     <Skills 
                     skill='WordPress'
                     progress={70}/>
                    </Cell>
                </Grid>
                </Content>
            </div>
        )
    }

}

export default Resume;