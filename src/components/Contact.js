import React from 'react';
import './Contact.css';

class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      online: this.props.online
    };
  }

  render() {
    console.log(this.state.online)
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt={this.props.name} />
        <div>
          <p className="name">{this.props.name}</p>
          <div 
           onClick={event => {
            //  const newStatus = this.state.online;
             this.setState({ online : !this.state.online});
           }}
          className="status">
            <div className={this.state.online ? "status-online" : "status-offline"} />
            <p className="status-text">{this.state.online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
    );
  }
}


export default Contact;