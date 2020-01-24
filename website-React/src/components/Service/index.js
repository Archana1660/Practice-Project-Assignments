import React from 'react';
import './style.css';
import {TitleDescription} from '../TitleDescription';
import {ServiceList} from '../ServiceList';

export const Service = (props) => {
    return (
        <div className="header-wrapper">
            <TitleDescription title={props.title} description={props.description}/>
            <ServiceList servicesList={props.servicesList}/>
        </div>
    );
}

//export default Section;