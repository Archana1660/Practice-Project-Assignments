import React from 'react';
import './sectionStyle.css';
import cancel from '../../assets/cancel.png';


const Sections = (props) => {
    const driverPhoto={
        backgroundImage: `url(${props.rideData.vehicleType})`
    }
    return (
        <div className="row pt-2">
        {props.rideData.map((item) => {
            return (<>
                    <div className="col-2">
                        <img className="vehicleImage" src={item.vehicleType} alt="vehicle"/>
                    </div>
                    <div className="col-7">
                        <p className="font-weight-bold spaceBelow">rideData: {item.rideData}</p>
                        <p>{item.vehicleTypeName}: CRN {item.CRN}</p>
                        <ul className="address pl-3">
                            <li>{item.pickUpAddress}</li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li>{item.dropAddress}</li>
                        </ul>
                        <hr/>
                        
                    </div>
                    <div className="col-3">
                        <p className="font-weight-bold">{item.fare}</p>
                        <div className="forCancellation">
                        {item.isCancelled && <img className="cancelLogo" src={cancel} alt="cancel"/>}
                        </div>
                        <div style={driverPhoto}>
                            <img className="driver" src={item.driverProfile} alt="driver"/>
                        </div>
                        
                    </div>
                    </>
                )
             })}
        </div>
    );
}
export default Sections;