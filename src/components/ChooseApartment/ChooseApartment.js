import React from 'react';
import Apartment from './Apartment/Apartment';
import Map from './Map/Map';

const ChooseApartment = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5 mt-5">
                   <Apartment formData={props.formData}></Apartment>
                </div>
                <div className="col-md-7">
                    <Map></Map>
                </div>
            </div>
        </div>
    );
};

export default ChooseApartment;