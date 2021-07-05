import Modal from 'react-bootstrap/Modal'
import '../style/modal.css'
import React, { useState } from 'react'
import { IoMdMail, IoMdKey, IoMdPerson, IoMdClose } from "react-icons/io";
import { withRouter } from 'react-router';
import { useHistory } from 'react-router';

export default withRouter(function NewUser(props) {
    const [show, setShow] = useState(false);
    const userNameRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const history = useHistory();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addUser = async (userDetails) => {
        await fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userDetails),
        });
    };

    function name(inputtxt) {
        if (inputtxt === "") {
            alert("נא למלא שם");
            return false;
        }
        else {
            return true;
        }
    }

    function password(inputtxt) {
        if (inputtxt.length < 6) {
            alert("סיסמא חייבת להכיל לפחות 6 תווים");
            return false;
        }
        else {
            return true;
        }
    }

    function email(inputtxt) {
        const mailformat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        if (inputtxt.match(mailformat)) {
            return true;
        }
        else {
            alert("מייל לא חוקי");
            return false;
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            id: props.users.length + 1,
            userName: userNameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            favorites: []
        }
        if (name(userNameRef.current.value) && password(passwordRef.current.value) && email(emailRef.current.value)) {
            addUser(data);
            alert("המשתמש נוסף בצלחה");
            props.setUser(data);
            history.push('/homePage')
        }
    };

    return (
        <div>
            <button className="b" variant="primary" onClick={handleShow}>
                משתמש חדש
            </button>
            <form className="new-user" onSubmit={handleSubmit}>
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
                                    <input type="text" className="form-control" id="usrname" placeholder="הכנס שם" ref={userNameRef} />
                                </div>
                                <div>
                                    <IoMdMail />
                                    <label className="l"> מייל משתמש</label>
                                    <input type="text" className="form-control" id="usrname" placeholder="הכנס מייל" ref={emailRef} />
                                </div>
                                <div >
                                    <IoMdKey />
                                    <label className="l"> סיסמא</label>
                                    <input type="text" className="form-control" id="psw" placeholder="הכנס סיסמא" ref={passwordRef} />
                                </div>
                                <div >
                                    <input type="checkbox" defaultValue defaultChecked />
                                    <label className="l">זכור אותי</label>
                                </div>
                                <button className="sb" type="submit" onClick={handleClose}>כניסה</button>
                            </form>
                        </div>
                    </div>
                </Modal>
            </form>
        </div>
    );
})
