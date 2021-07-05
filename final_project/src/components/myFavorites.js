import BusinessCard from "./businessCard";
import emailjs from 'emailjs-com';
import '../style/myFavorites.css'

export default function MyFavorites(props) {
    const { user, setUser, items } = props;

    var messages = ''
    function type(type) {
        switch (type) {
            case 'hairdressers':
                return "מתסרקת"
            case 'makeupArtists':
                return "מאפרת"
            case 'shaitelMachers':
                return "פאנית"
            case 'flowers':
                return "מעצבת פרחים"
            case 'dressRentals':
                return "השכרת שמלות"
            case 'cosmetics':
                return "קוסמטיקאית"
        }
    }



    const arr = props.user?.favorites && props.user.favorites.map(fav => items.find(item => item.id == fav))
    arr?.forEach(item => {
        messages = messages + '\nשם העסק: ' + item?.name + '\nמספר טלפון: ' + item?.phoneNumber + '\nאזור: ' +
            item?.area + '\nתחום עיסוק: ' + type(item?.type) + ' --- \n\n'
    });


    const handler = () => {
        emailjs.send('service_jzax4ok', 'favorites_list', {
            email: user.email,
            name: user.userName,
            message: messages
        }, 'user_cm0zCSLuZVWnA8fowMQqB')
            .then((result) => {
                alert("רשימת המועדפים נשלחה למייל " + user.email)
                console.log('emailjs result:', result.text);
            }, (error) => {
                console.log('emailjs error:', error.text);
            });
    }

    return (
        <div>
            <button className="email-btn" onClick={() => { handler() }}>
                לקבלת הרשימה למייל
                </button>
            <div>
                {props.user.favorites && props.user.favorites.map(fav => <BusinessCard user={props.user} setUser={props.setUser} item={props.items.find(item => item.id == fav)} />)}
            </div>
        </div>
    )
}