import React from 'react';
import './servicesStyle.css';

const Services = (props) => {
   
    return(
        <div className="container text-center">
            <div className="row justify-content-center">
                <div className="col-7">
                <h1>{props.myServices.title}</h1>
                <p>{props.myServices.descriptionService}</p>
                </div>
            </div>
            <div className="row">
            
                
                {props.myServices.serviceList.map((item)=>{
                        return(
                            <div className="col-sm-4 pt-5">
                            <img className="serviceLogo" src={item.imagePath} alt={item.altText}/>
                            <h5 className="my-4">{item.title}</h5>
                            <p>{item.description}</p>
                            </div>
                        )
                    })} 
                             
               
            </div>
        </div>
    )
}

export default Services;