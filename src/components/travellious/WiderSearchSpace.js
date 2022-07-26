import {CheckInCheckOut, LocationAndTravelers} from "./Booking";
import React from "react";

function WiderSearch() {
    return (
        <div style={{width: "100%",height: "40vh", borderTopRightRadius: "15px", borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px", backgroundColor: "white", boxShadow: "0 4px 4px rgba(113, 110, 110, 0.25)", padding: "1%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginLeft: "10%"}}>
            <div style={{display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center"}}>
                <input style={{width: "50vw", height: "3vh", backgroundColor: "unset", border: "2px solid purple", borderRadius: "8px", display: "flex", justifyContent: "center", textAlign: "center", fontSize: "16px", color: "black", margin: "0 0 5% 0", padding: "5px", cursor: "text"}} placeholder="Search for location"/>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                    <LocationAndTravelers/>
                    <CheckInCheckOut/>
                </div>
            </div>
        </div>
    );
}


export default WiderSearch