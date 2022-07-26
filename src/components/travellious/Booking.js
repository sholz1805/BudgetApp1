import React from "react";
import MapPin, {Calendar, Search, Planed} from "./Images";
import {Plane} from "./Images";


export function LocationAndTravelers() {
    return (
        <div style={{display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "space-around", border:"1px solid gray", padding: "10px 20px", borderRadius: "20px", width: "25vw", height: "15vh"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                    <MapPin/>
                    <div>
                        <h3 style={{margin: "5px 0"}}>Location</h3>
                        <h6 style={{margin: "0"}}>Where are you going?</h6>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                    <Planed/>
                    <div>
                        <h3 style={{margin: "5px 0"}}>Travelers</h3>
                        <h6 style={{margin: "0"}}>Add guests</h6>
                    </div>
                </div>
            </div>
            <Plane/>
        </div>
    );
}

export function CheckInCheckOut() {
    return (
        <div style={{display: "flex", flexDirection: "row", alignContent: "center", justifyContent: "space-between", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "row", alignContent: "center", alignItems: "center", justifyContent: "space-around", border:"1px solid gray", padding: "10px 20px", borderRadius: "20px", width: "25vw", height: "15vh"}}>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                    <Calendar/>
                    <div>
                        <h3 style={{margin: "5px 0"}}>Location</h3>
                        <h6 style={{margin: "0"}}>Where are you going?</h6>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "10px"}}>
                    <Calendar/>
                    <div>
                        <h3 style={{margin: "5px 0"}}>Travelers</h3>
                        <h6 style={{margin: "0"}}>Add guests</h6>
                    </div>
                </div>
            </div>
            <Search/>
        </div>
    );
}