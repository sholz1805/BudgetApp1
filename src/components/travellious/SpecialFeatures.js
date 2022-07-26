import React from 'react';
import "./App.css"

const SpecialFeatures = () => {
    return (
        <div style={{display: "flex", flexDirection:"row", justifyContent: "space-around", alignContent: "center", marginTop: "5%"}}>
            <div>
                <div style={{textAlign: "left", justifyContent: "left", marginBottom: "10%"}}>
                    <button style={{backgroundColor: "lightblue", padding:"7px", borderRadius: "7px", color:"white", fontFamily: "'Poppins' sans-serif"}}>01</button>
                    <h3>Get the best deals</h3>
                    <p>Find help with your travelling and booking plans and see
                    what to expect on your journey today with us</p>
                </div>
                <div style={{textAlign: "left", justifyContent: "left", marginBottom: "10%"}}>
                    <button style={{backgroundColor: "darkslategray", padding:"7px", borderRadius: "7px", color: "white"}}>01</button>
                    <h3>Get the best deals</h3>
                    <p>Find help with your travelling and booking plans and see
                        what to expect on your journey today with us</p>
                </div>
                <div style={{textAlign: "left", justifyContent: "left", marginBottom: "10%"}}>
                    <button style={{backgroundColor: "green", padding:"7px", borderRadius: "7px", color: "white"}}>01</button>
                    <h3>Get the best deals</h3>
                    <p>Find help with your travelling and booking plans and see
                        what to expect on your journey today with us</p>
                </div>
            </div>
            <div>
                <img src="" alt="zuma rock"/>
                <img src="" alt="bayelsa beach"/>
            </div>
        </div>
    );
};

export default SpecialFeatures;
