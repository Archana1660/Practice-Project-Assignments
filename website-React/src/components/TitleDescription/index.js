import React from 'react';
import './style.css';

export const TitleDescription = (props) => {
    return (
        <div className="container-fluid">
            <h3 className="">{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

//export default Section;