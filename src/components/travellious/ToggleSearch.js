import React from "react";
import {Planed} from "./Images";

function ToggleSearch() {
    return (
        <div style={{ borderTopRightRadius: "10px", borderTopLeftRadius: "10px", height: "70px", backgroundColor: "white", width: "20%", display: "flex", justifyContent: "space-around", paddingBottom: "10px", marginLeft: "10%"}}>
            <div>
                <button style={{backgroundColor: "purple", color: "white", marginTop: "5px", padding: "5px", height: "5vh", display:"flex", flexDirection: "row", alignContent: "center"}}>
                    <Planed/>
                    Flight
                </button>
            </div>
            <div>
                <button style={{backgroundColor: "purple", color: "white", marginTop: "5px", padding: "5px", height: "5vh", display:"flex", flexDirection: "row", alignContent: "center", gap:"5px"}}>
                    <img src="" alt="hotel"/>
                    Hotel
                </button>
            </div>
        </div>
    );
}

export default ToggleSearch