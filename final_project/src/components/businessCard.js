import React from 'react'
import { IoIosHeart, IoIosHeartEmpty, IoLogoWhatsapp, IoMdPin, IoMdPerson } from "react-icons/io";
import '../style/businessCard.css'


const BusinessCard = (props) => {
    const { items, item, user, setUser } = props

    const id = item?.id;

    const saveUsersFavorites = async (favorites) => {

        setUser({ ...user, favorites: favorites });
        await fetch("http://localhost:5000/users/" + user.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });
    }

    const addFav = (props1) => {
        let arry = user.favorites;
        let addArray = true;
        arry.map((item, key) => {
            if (item === props1.id) {
                arry.splice(key, 1);
                addArray = false;
            }
        });
        if (addArray) {
            arry.push(props1.id);
        }
        saveUsersFavorites(arry)
    }

    return (
        <>{item && <div className="card" style={{ width: '15rem' }}>
            <img className="card-img-top" src={item.logo} alt="Logo" />
            <div className="card-body">
                <div className="name">
                    <label className="card-title"><IoMdPerson /> שם:</label>
                    <label className="card-title"> {item.name} </label>
                </div>
                <div className="area">
                    <label className="card-title"><IoMdPin /> אזור:</label>
                    <label className="card-title"> {item.area} </label>
                </div>
                <div className="number">
                    <label className="card-title"><IoLogoWhatsapp /> מספר טלפון:</label>
                    <label className="card-title">{item.phoneNumber}</label>
                </div>
                <td>
                    {user?.favorites ?
                        user.favorites.includes(id) ? (
                            <IoIosHeart
                                onClick={() => addFav({ items, id })}
                                style={{ color: 'red' }}
                            />
                        ) : (
                            <IoIosHeartEmpty
                                onClick={() => addFav({ items, id })}
                                style={{ color: 'red' }}
                            />
                        )
                        : ''}
                </td>
            </div>
        </div>}
        </>);
}

export default BusinessCard;