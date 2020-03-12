import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    console.log(resumeData.skills[0])
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2 className='skillsHeader'>Skills</h2>
       				<div className='skillsList'>
                      <img src='images/html.png'></img>
                      <img src='images/css.png'></img>
                      <img src='images/javascript.png'></img>
                      <img src='images/react.png'></img>
                      <img src='images/ruby.png'></img>
                      <img src='images/rails.png'></img>
                      <img src='images/bootstrap.png'></img>
                      <img src='images/graphql.png'></img>
                      <img src='images/postgresql.png'></img>
                   </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}