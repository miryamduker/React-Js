import React from "react";
import { withRouter } from "react-router-dom";
import '../style/newBusiness.css';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useHistory } from 'react-router';

function phonenumber(phoneNumber) {
    var phoneno = /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/;
    if (phoneNumber.match(phoneno)) {
        return true;
    }
    else {
        alert("מספר טלפון לא חוקי");
        return false;
    }
}

function name(name) {
    if (name === "") {
        alert("נא להכניס את שם העסק");
        return false;
    }
    else {
        return true;
    }
}

function area(area) {
    if (area === undefined) {
        alert("נא לבחור אזור");
        return false;
    }
    else {
        return true;
    }
}

function type(type) {
    if (type === undefined) {
        alert("נא לבחור תחום עיסוק");
        return false;
    }
    else {
        return true;
    }
}

export default withRouter(function NewBusiness(props) {

    const nameRef = React.useRef();
    const areaRef = React.useRef();
    const numberRef = React.useRef();
    const typeRef = React.useRef();
    const logoRef = React.useRef();

    const history = useHistory();

    const addBusiness = async (businessDetails) => {
        await fetch("http://localhost:5000/businessCards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(businessDetails),
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            id: props.items.length + 1,
            logo: logoRef.current.value,
            name: nameRef.current.value,
            area: areaRef.current.state.value,
            phoneNumber: numberRef.current.value,
            type: typeRef.current.state.value
        }
        if (phonenumber(numberRef.current.value) && name(nameRef.current.value) && area(data.area) && type(data.type)) {
            addBusiness(data);
            alert("העסק נכנס למערכת בהצלחה");
            history.push('/homePage')
        }
    };

    return (
        <div className="form">
            <form className="new-business" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="h">שם העסק</label>
                    <input type="text" className="form-control" placeholder="שם העסק" ref={nameRef} />
                </div>
                <div className="form-group">
                    <label className="h">אזור העסק</label>
                    <RadioGroup ref={areaRef}>
                        <FormControlLabel value="צפון" control={<Radio />} label="צפון" />
                        <FormControlLabel value="מרכז הארץ" control={<Radio />} label="מרכז הארץ" />
                        <FormControlLabel value="ירושלים" control={<Radio />} label="ירושלים והסביבה" />
                        <FormControlLabel value="דרום" control={<Radio />} label="דרום" />
                    </RadioGroup>
                </div>
                <div className="form-group">
                    <label className="h">מספר טלפון</label>
                    <input type="tel" className="form-control" placeholder="מספר טלפון" ref={numberRef} />
                </div>
                <div className="form-group">
                    <label className="h">תחום העסק</label>
                    <RadioGroup ref={typeRef}>
                        <FormControlLabel value="makeupArtists" control={<Radio />} label="מאפרת" />
                        <FormControlLabel value="hairdressers" control={<Radio />} label="מתסרקת" />
                        <FormControlLabel value="dressRentals" control={<Radio />} label="השכרת שמלות" />
                        <FormControlLabel value="shaitelMachers" control={<Radio />} label="פאנית" />
                        <FormControlLabel value="cosmetics" control={<Radio />} label="קוסמטיקאית" />
                        <FormControlLabel value="flowers" control={<Radio />} label="פרחים" />
                    </RadioGroup>
                </div>
                <div className="form-group">
                    <label className="h">קישור ללוגו</label>
                    <input type="url" className="form-control" placeholder="קישור ללוגו" ref={logoRef} />
                </div>
                <button type="submit" className="btn ">להוספת העסק</button>
            </form>
        </div>
    );
})
