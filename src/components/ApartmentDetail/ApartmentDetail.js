import React, { useState, useEffect } from 'react';
import './ApartmentDetail.scss';
import Spinner from '../../images/Logo-Preloaders.gif';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCheckSquare, faWineBottle, faUser, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { date } from '../../functions';

const ApartmentDetail = (props) => {
    const { arrival, departure, guests } = props.formData;
    const { id } = useParams();
    const stays = date.getDiffDays(departure,arrival);
    const [apartment, setApartment] = useState(null);
    useEffect(()=>{
        fetch(`https://api-air-cnc.herokuapp.com/apartment/${id}`)
        .then(res => res.json())
        .then(data => {
            setApartment(data)
            document.getElementById('spinner').style.display = 'none';
        })
        .catch(err => console.log(err))
    },[id])
    return (
        <div>
             <div className="d-flex justify-content-center">
             <img id="spinner" style={{width:"70vh"}} src={Spinner} alt="spinner" />
            </div>
            {
                apartment &&
                <>
                <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 px-0">
                        <img style={{ height: "60vh", width: "100%" }} src="https://i.imgur.com/AFESTS8.png" alt="" />
                    </div>
                    <div className="col-md-6 px-0">
                        <img style={{ height: "60vh", width: "100%" }} src={apartment.img} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row">
                <div className="col-md-7">
                    <div className="d-flex flex-row justify-content-between">
                        <div>
                            <h3>{apartment.title}</h3>
                        </div>
                        <div>
                            <h6 className="ml-3">shahin</h6>
                        </div>
                    </div>
                    <p className="mb-0 mt-2">Dhaka, Bangladesh</p>
                    <p>{apartment.guests} guests   {apartment.bedrooms} bedrooms   {apartment.beds} beds   {apartment.baths} baths</p>
                    <p className="b-bottom"></p>
                    <ul className="list-unstyled home-highlighter">
                        <li className="mt-5">
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faHome} />
                                <span className="ml-3">Entire home</span>
                            </p>
                            <p className="ml-4 pl-2">You’ll have the condominium to yourself.</p>
                        </li>
                        <li className="mt-4">
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faCheckSquare} />
                                <span className="ml-3">Self check-in</span>
                            </p>
                            <p className="ml-4 pl-2">You can check in with the doorman.</p>
                        </li>
                        <li className="mt-4">
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faWineBottle} />
                                <span className="ml-3">Sparkling clean</span>
                            </p>
                            <p className="ml-4 pl-2">10 recent guests said this place was sparkling clean.
                            </p>
                        </li>
                        <li className="mt-4">
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faUser} />
                                <span className="ml-3">Rowdra is a Superhost</span>
                            </p>
                            <p className="ml-4 pl-2">Superhosts are experienced, highly rated hosts who
                            are committed to providing great stays for guests.
                            </p>
                        </li>
                    </ul>
                    <div>
                        <p>It’s newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free.
                        You’ll love my place for its lovely and bright looks comfortable stay. <br />
                        Bangladesh is a beauty with its six seasons and green. The people are hospitable and worm.It’s newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free. <br/>
                        You’ll love my place for its lovely and bright looks comfortable stay. <br />
                        Bangladesh is a beauty with its six seasons and green. The people are hospitable and worm.</p>
                    </div>
                    <div className="mb-5 pb-5 review mt-4">
                    <h4>Reviews</h4>
                    <p><span className="mr-2 rating"><FontAwesomeIcon icon={faStar} /></span> {apartment.rating} ({apartment.ratingPerson} reviews)</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="card border-0 shadow p-4">
                       <div className="card-body">
                       <h4>${apartment.perNightPrice}/ night</h4>
                        <p><span className="mr-2 rating"><FontAwesomeIcon icon={faStar} /></span> {apartment.rating} ({apartment.ratingPerson} reviews)</p>
                        <p>Dates</p>
                        <div>
                        <p className="form-control d-flex justify-content-between px-3">
                            <span>{arrival}</span> 
                            <span><FontAwesomeIcon icon={faArrowRight}/></span> 
                            <span>{departure}</span>
                        </p>
                        </div>
                        <p>Guests</p>
                        <div>
                        <select className="form-control d-flex justify-content-between px-3">
                            <option>{guests} guests</option>
                            
                        </select>
                        </div>
                        <ul className="list-unstyled mt-4 px-4">
                            <li className="d-flex justify-content-between py-2 b-bottom">
                                <span>${apartment.perNightPrice} x {stays} nights </span>
                                <span className="mr-4">${apartment.perNightPrice*stays}</span>
                            </li>
                            <li className="d-flex justify-content-between py-2 b-bottom">
                                <span>Cleaning fee </span>
                                <span className="mr-4">${apartment.cleaningFee}</span>
                            </li>
                            <li className="d-flex justify-content-between py-2 b-bottom">
                                <span>Service fee </span>
                                <span className="mr-4">${apartment.serviceFee}</span>
                            </li>
                            <li className="d-flex justify-content-between py-2">
                                <span>Total </span>
                                <span className="mr-4">${(apartment.perNightPrice*stays)+apartment.cleaningFee+apartment.serviceFee}</span>
                            </li>
                        </ul>
                        <Link onClick={()=>props.apartment(apartment)} to="/booking">
                            <button  className="btn btn-block text-light linear-bg">
                                Reserve
                            </button>
                            
                        </Link>
                        <div className="text-center text-secondary" style={{fontSize:"13px"}}>
                        <span >You won't be charged</span>
                        </div>
                       </div>
                    </div>
                </div>
                </div>
            </div>
                </>
            }
        </div>
    );
};

export default ApartmentDetail;