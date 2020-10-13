import React from 'react';
import './Contact.css';

const name = 'Susan Lynch';
const avatar = 'https://randomuser.me/api/portraits/women/76.jpg';
const online = true;

function Contact() {
    return (
        <b className="Contact">
            <img className="avatar" src={avatar}/>
            <div>
                <div className="status">
                    <h4 className="name">{name}</h4>
                    <div className="status-online"></div>
                    <div className="status-text">{online? 'online': 'offline'}</div>
                </div>
            </div>
        </b>
    )
}

export default Contact;