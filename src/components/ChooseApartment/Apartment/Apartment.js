import React, { useState, useEffect } from 'react';
import './Apartment.scss';
import Spinner from '../../../images/Logo-Preloaders.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {date} from '../../../functions';

const Apartment = (props) => {
    const [apartments, setApartments] = useState(null);
    const { location, arrival, departure, guests } = props.formData;
    const arrivalDay = date.getDay(arrival)
    const departureDay = date.getDay(departure);
    const diffDays = date.getDiffDays(departure,arrival);
    const arrivalMonth = date.getMonth(arrival);
    const departureMonth = date.getMonth(departure);

    useEffect(() => {
        fetch('https://api-air-cnc.herokuapp.com/apartment')
            .then(res => res.json())
            .then(data => {
                setApartments(data)
                document.getElementById('spinner').style.display = 'none';
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            <p className="mb-0">{arrivalMonth} {arrivalDay}-{departureMonth} {departureDay}  {guests} guests</p>
            <h3 className="text-capitalize">Stay in {location}</h3>
            <div className="mt-3 sortBy">
                <button className="btn px-3 py-2">Cancellation flexibility</button>
                <button className="btn px-3 py-2 ml-1">Type of place</button>
                <button className="btn px-3 py-2 ml-1">Price</button>
                <button className="btn px-3 py-2 ml-1">Instant Book</button>
                <button className="btn px-3 py-2 ml-1">More Filters</button>
            </div>
            <img id="spinner" style={{ width: "100%" }} src={Spinner} alt="spinner" />
            {
                apartments &&
                apartments.map((apartment,index) => {
                    return (
                        <div className="row mt-4 apartment pb-4" key={index}>
                            <div className="col-md-5 apartment-thumbnail">
                                <Link to={`apartment/${apartment.id}`}>
                                    <img className="img-fluid" src={apartment.img} alt="" />
                                </Link>
                            </div>
                            <div className="col-md-7">
                                <Link className="text-decoration-none text-dark" to={`apartment/${apartment.id}`}>
                                    <h5>{apartment.title}</h5>
                                </Link>
                                <div>
                                    <span>{apartment.guests} guests</span>
                                    <span className="ml-3">{apartment.bedrooms} bedrooms</span>
                                    <span className="ml-3">{apartment.beds} beds</span>
                                    <span className="ml-3">{apartment.baths} baths</span>
                                </div>
                                <div>
                                    <div className="mt-4">
                                        {
                                            apartment.facilities.map((facility,index) => {
                                                return <p key={index}>{facility}</p>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="rating">
                                        <p><FontAwesomeIcon icon={faStar} /> {apartment.rating} ({apartment.ratingPerson})</p>
                                    </div>
                                    <div className="price">
                                        <p className="night">${apartment.perNightPrice}/night</p>
                                        <p className="total">${apartment.perNightPrice * diffDays} total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }



        </>
    );
};

export default Apartment;