import BusinessCard from './businessCard';
import React, { useEffect, useState } from 'react';
import '../style/showBuisness.css'

const { useHistory, useLocation, withRouter } = require("react-router-dom");

export default withRouter(function ShowBuisneses(props) {

    const areaRef = React.useRef();
    const arrType = props.items.filter(item => item.type === props.location.pathname.split('/')[2]);
    const [arr, setArr] = useState(props.items.filter(item => item.type === props.location.pathname.split('/')[2]));

    const filterByArea = () => {
        if (areaRef.current.value !== "ללא סינון") {
            setArr(arrType.filter(item => (item.area === areaRef.current.value)))
        }
        else {
            setArr(arrType)
        }
    }

    useEffect(() => {
        debugger
        setArr(props.items.filter(item => item.type === props.location.pathname.split('/')[2]));
    }, [props.location.pathname])
    return (
        <div>
            <div className="area-dropdown">
                <label className="lable-drop">לסינון לפי אזור: </label>
                <select className="the-dropdown" ref={areaRef} onChange={filterByArea}>
                    <option>ללא סינון</option>
                    <option>צפון</option>
                    <option>מרכז הארץ</option>
                    <option>ירושלים</option>
                    <option>דרום</option>
                </select>
            </div>
            <div >{arr?.map((item, index) =>
                <BusinessCard items={arr} favorites={props.favorites} user={props.user} setUser={props.setUser}
                    setFavorites={props.setFavorites} item={item} index={index} />)}
            </div>
        </div>
    )
})