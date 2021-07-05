import Modal from 'react-bootstrap/Modal'
import '../style/modal.css'
import React, { useState } from 'react'
import { IoMdKey, IoMdPerson, IoMdClose } from "react-icons/io";
import db from '../data/db.json'
import { useRef } from 'react';
import { useHistory } from 'react-router';


export default function ExistingUser(props) {
    const [show, setShow] = useState(false);

    const nameRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const handleClose = () => {
        let u = db.users.find(user => user.userName === nameRef.current.value)

        if (u && u.password === passwordRef.current.value) {
            props.setUser(u)
            history.push('/homePage')
        } else {
            alert('user not exist')
        }
        setShow(false);
    }

    const handleShow = () => setShow(true);

    return (
        <div >
            <button className="b" variant="primary" onClick={handleShow}>
                משתמש קיים
            </button>
            <div className="modal">
                <Modal show={show} onHide={handleClose}>
                    <div className="content" >
                        <div className="header" >
                            <button type="button" className="close" data-dismiss="modal" onClick={handleClose}>
                                <IoMdClose />
                            </button>
                        </div>
                        <div className="body" >
                            <form role="form">
                                <div >
                                    <IoMdPerson />
                                    <label className="l">שם משתמש</label>
                                    <input type="text" className="form-control" id="usrname" ref={nameRef} placeholder="הכנס שם" />
                                </div>
                                <div >
                                    <IoMdKey />
                                    <label className="l"> סיסמא</label>
                                    <input type="text" className="form-control" id="psw" ref={passwordRef} placeholder="הכנס סיסמא" />
                                </div>
                                <button className="sb" type="submit" onClick={handleClose}>כניסה</button>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
    );
}