import React from 'react';
import './style.css';

export const ServiceList = (props) => {
    return (
        <ul className="container-fluid">
            {props.servicesList.map((item) => {
                return <li>
                            <img src={item.imagePath} alt={item.altText}/>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li>
            })}
        </ul>
    );
}

//export default Section;