import React from 'react';
import './style.css';

const Banner = (props) => {
    const bannerStyle = {
        backgroundImage: `url(${props.imageURL})`
    }
    return (
        <div className="banner-wrapper" style={bannerStyle}>
            <div className="container-fluid p-5">
                <h2>{props.title}</h2>
                <h1>{props.subTitle}</h1>
                <p className="my-3">{props.description}</p>
                <button className="btn btn-primary">{props.buttonName}</button>
            </div>
        </div>
    );
}

export default Banner;