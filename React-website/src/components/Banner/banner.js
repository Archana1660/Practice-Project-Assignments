import React from 'react';
import './bannerStyle.css';

const Banner = (props) => {
    const bannerStyle = {
        backgroundImage: `url(${props.bannerData.imageURL})`,
        backgroundSize: `cover`,
        color: `yellow`
    }
    return (
        <div className="banner-wrapper d-flex" style={bannerStyle}>
            <div className="container align-self-center">
            <div className="row">
                   <div className="col-span-6">
                   <h3>{props.bannerData.greet}</h3>
                    <h1>{props.bannerData.name}</h1>
                    <p>{props.bannerData.description}</p>
                    <button className="btn btn-primary">View MyProfile</button>
                   </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;