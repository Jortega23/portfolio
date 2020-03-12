import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                <h2 className= 'title'>Contact</h2>
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <div className="contactList">
                  <div className="linkedContact">
                    <h3>LinkedIn:</h3>
                    <h4>jesus-codes</h4>
                    <a href='https://www.linkedin.com/in/jesus-codes'><i className='fa fa-linkedin'></i></a>
                  </div>
                  <div className="emailContact">
                    <h3>Email:</h3>
                    <h4>jortegs23@gmail.com</h4>
                    <a href="mailto:jortegs23@gmail.com"><i className='fa fa-envelope'></i></a>
                  </div>  
                </div>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}