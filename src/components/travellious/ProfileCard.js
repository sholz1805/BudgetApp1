import React, {useState} from 'react';
import image from '../../assets/logo.svg'
import './ProfileCard.css'

const ProfileCard = (props) => {

    let {username, hobby} = props

    const handleClick = ()=>{
        let newObject = {username: `${username}`, hobby: `My hobby is ${hobby}`, favouriteQuote: "Itamiyo kangaeru. Itamiyo shire"}
        setState({ ...state, ...newObject })
    }

    const [state, setState] = useState({username: username, hobby: hobby})

    return (
        <div className="profile-card">
            <img src={image} alt="profile card" className="profile-card-avatar"/>
            <div className="details-container">
                <div className="firstname-details">
                    <p>Name</p>
                    <h1>{state.username}</h1>
                </div>
                <div className="hobby-details">
                    <p>Hobby</p>
                    <h1>{state.hobby}</h1>
                </div>
                <div className="firstname-details">
                    <p>Favourite Quote</p>
                    <h1>{state.favouriteQuote}</h1>
                </div>
            </div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
};

export default ProfileCard;
