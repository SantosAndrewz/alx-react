import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

function Notifications() {
    return (
        <>
            <div className='Notifications'>
                <p>Here is the list of notifications</p>
                <button style={{
                    position: "absolute",
                    right: "3%",
                    width: "2px",
                    top: "10%",
                    backgroundColor: "#ffffff",
                    border: "none",
                    }} aria-label="Close" onClick={() => console.log("Close button has been clicked")}>
                    <img src={closeIcon} alt="close" style={{width: "18px" }} />
                </button>
                <ul>
                    <li data-priority="default">New course available</li>
                    <li data-priority="urgent">New resume available</li>
                    <li data-priority="urgent" dangerouslySetInnerHTML={{
                        __html: getLatestNotification(),
                    }}></li>
                </ul>
            </div>
        </>

    );

}

export default Notifications;