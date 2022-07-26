import React from 'react';
import map_pin from '../../assets/map-pin.svg'
import plane from '../../assets/plane-svgrepo-com.svg'
import calendar from '../../assets/calendar.svg'
import search from '../../assets/search.svg'

const MapPin = () => {
    return (
        <div>
            <img src={map_pin} alt="location" height="24px"/>
        </div>
    );
};

export default MapPin;

export const Plane = () =>{
    return(
        <div>
            <img src={plane} alt="profile" height="24px" style={{padding: "2em"}}/>
        </div>
    )
}

export const Planed = () =>{
    return(
        <div>
            <img src={plane} alt="profile" height="24px"/>
        </div>
    )
}

export const Calendar = () => {
    return(
        <div>
            <img src={calendar} alt="location"/>
        </div>
    )
}

export const Search = () => {
    return(
        <div>
            <img src={search} alt="search" style={{paddingLeft: "2em"}}/>
        </div>
    )
}
