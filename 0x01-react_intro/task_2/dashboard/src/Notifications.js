import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';
function Notifications() {
    return (
        <>
            <div className='Notifications'>
                <button
                    style={{
                        position: "absolute",
                        right: "5px",
                        border: "none",
                        backgroundColor: "#1f1f0f",
                    }} aria-label="Close">
                        <img src={closeIcon} alt="close" />
                </button>
                <p>Here is the list of notifications</p>
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