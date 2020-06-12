import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import HomeRules from './HomeRules/HomeRules';
import TravelReason from './TravelReason/TravelReason';
import Payment from './Payment/Payment';
import './booking.scss'
import { date } from '../../functions';

const Booking = (props) => {
    const [homeRules, setHomeRules] = useState(true)
    const [travelReason, setTravelReason] = useState(false)
    const [payment, setPayment] = useState(false);

    const {id,title,img,rating,ratingPerson,perNightPrice,cleaningFee,serviceFee} = props.apartment;
    const {arrival,departure,guests} = props.formData;
    const stays = date.getDiffDays(departure,arrival);

    const [bookingInfo, setBookingInfo] = useState();

    const homeRulesHandler = () => {
        setHomeRules(false);
        setTravelReason(true)
    }
    const travelReasonHandler = (message) => {
        setBookingInfo(message);
        setTravelReason(false);
        setPayment(true);

    }
    const paymentHandler = (paymentInfo) => {
        const bookingData = { ...bookingInfo, ...props.formData, apartmentId: id, ...paymentInfo }
        setPayment(false);
        fetch("http://api-air-cnc.herokuapp.com/add-booking", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                document.getElementById('pay_id').innerText = bookingData.payment.id;
                document.getElementById('modal-btn').click();

            })

    }
    return (
        <>
            <div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-7">
                            <ul className="list-inline">
                                <li className={`list-inline-item h6 mr-4 mb-4 mt-3 ${!homeRules && 'text-secondary'}`}>1. Review House Rule <FontAwesomeIcon className="ml-3" icon={faAngleRight} /> </li>
                                <li className={`list-inline-item h6 mr-4 mb-4 mt-3 ${!travelReason && 'text-secondary'}`}>2. Who is Coming? <FontAwesomeIcon className="ml-3" icon={faAngleRight} /></li>
                                <li className={`list-inline-item h6 mr-4 mb-4 mt-3 ${!payment && 'text-secondary'}`}>3. Confirm and Pay </li>
                            </ul>
                            {
                                homeRules &&
                                <HomeRules stays={stays} arrival={arrival} departure={departure} homeRulesHandler={homeRulesHandler} />
                            }
                            {
                                travelReason &&
                                <TravelReason travelReasonHandler={travelReasonHandler} />
                            }
                            {
                                payment &&
                                <Payment paymentHandler={paymentHandler} />
                            }
                        </div>
                        <div className="col-md-5">
                            <div className="card border-0 shadow px-4 py-2">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-7">
                                            <h6>{title}</h6>
                                            <p className="mt-4"><span className="mr-2 rating"><FontAwesomeIcon icon={faStar} /></span> {rating} ({ratingPerson} reviews)</p>
                                        </div>
                                        <div className="col-5">
                                            <img style={{ height: "10vh", width: "100%" }} className="img-fluid rounded" src={img} alt="" />
                                        </div>
                                    </div>
                                    <p>Dates</p>
                                    <div>
                                        <p className="form-control d-flex justify-content-between px-3">
                                            <span>{arrival}</span>
                                            <span><FontAwesomeIcon icon={faArrowRight} /></span>
                                            <span>{departure}</span>
                                        </p>
                                    </div>
                                    <p>Guests</p>
                                    <div>
                                        <p className="form-control d-flex justify-content-between px-3">
                                        {guests} guests
                        </p>
                                    </div>
                                    <ul className="list-unstyled mt-4 px-4">
                                        <li className="d-flex justify-content-between py-2 b-bottom">
                                            <span>${perNightPrice} x {stays} nights </span>
                                            <span className="mr-4">${perNightPrice*stays}</span>
                                        </li>
                                        <li className="d-flex justify-content-between py-2 b-bottom">
                                            <span>Cleaning fee </span>
                                            <span className="mr-4">${cleaningFee}</span>
                                        </li>
                                        <li className="d-flex justify-content-between py-2 b-bottom">
                                            <span>Service fee </span>
                                            <span className="mr-4">${serviceFee}</span>
                                        </li>
                                        <li className="d-flex justify-content-between pt-2">
                                            <span>Total </span>
                                            <span className="mr-4">${(perNightPrice*stays)+cleaningFee+serviceFee}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a className="btn btn-primary d-none" id="modal-btn" data-toggle="modal" href="#thanksModal">Open Modal</a>
            <div className="modal fade" id="thanksModal" role="dialog" data-keyboard="false" data-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="thank-you-pop">
                                <img src="http://goactionstations.co.uk/wp-content/uploads/2017/03/Green-Round-Tick.png" alt="" />
                                <h1>Thank You!</h1>
                                <p>Your Booking Information successfully received. Our team contact soon.</p>
                                <h4 className="cupon-pop">Your Payment Id: <span id="pay_id"></span></h4>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <a href="/">
                                <button type="button" className="btn deep-linear-bg text-light">Close</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking;