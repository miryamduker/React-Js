import KV_0494 from '../pics/KV_0494.JPG'
import '../style/openingPage.css'
import React from 'react'
import ExistingUser from './existingUser';
import NewUser from './newUser'


export default function OpeningPage(props) {
    return (
        <div class="body" style={{ backgroundImage: `url(${KV_0494})`, backgroundPosition: `center`, backgroundSize: `cover`, height: `1200px` }}>
            <div className="opening-body">
                <h1 className="header">
                    ברוכים הבאים לאתר בואי כלה
                </h1>
                <div className="login" >
                    <div className="new-user">
                        <NewUser user={props.user} setUser={props.setUser} users={props.users} />
                    </div>
                    <div className="existing-user">
                        <ExistingUser user={props.user} setUser={props.setUser} />
                    </div>
                </div>
            </div>
        </div>
    )
}