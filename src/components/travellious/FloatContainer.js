import React from 'react';
import ToggleSearch from "./ToggleSearch";
import WiderSearch from "./WiderSearchSpace";


const floatBox = () => {
    return (
        <div style={{display: "flex", justifyContent: "center", width: "80%", height: "20vh", position: "absolute", top: "75%", flexDirection: "column", marginTop: "10%", alignContent: "center"}}>
            <div>
                <ToggleSearch/>
            </div>
            <div>
                <WiderSearch/>
            </div>
        </div>
    );
};

export default floatBox;
