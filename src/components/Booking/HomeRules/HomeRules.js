import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSmoking, faBan, faPaw } from '@fortawesome/free-solid-svg-icons';
import { date } from '../../../functions';

const HomeRules = (props) => {
    const arrival = props.arrival;
    const departure = props.departure;
    const arrivalMonth = date.getMonth(arrival);
    const arrivalDay = date.getDay(arrival);
    const arrivalDayName = date.getDayName(arrival);

    const departureMonth = date.getMonth(departure);
    const departureDay = date.getDay(departure);
    const departureDayName = date.getDayName(departure);

    return (
        <div>
            <h1>Review house rules</h1>
            <h5 className="mb-4 mt-3 font-weight-bold">{props.stays} nights in Dhaka</h5>
            <div className="row">
                <div className="col-6 d-flex">
                    <div className="mr-4 date py-1 px-3 rounded">
                        <p className="mb-0">{arrivalMonth}</p>
                        <p className="mb-0">{arrivalDay}</p>
                    </div>
                    <div>
                        <p className="mb-0">{arrivalDayName} check-in</p>
                        <p className="mb-0">After 12:00 PM</p>
                    </div>
                </div>
                <div className="col-6 d-flex">
                    <div className="mr-4 date py-1 px-3 rounded">
                        <p className="mb-0">{departureMonth}</p>
                        <p className="mb-0">{departureDay}</p>
                    </div>
                    <div>
                        <p className="mb-0">{departureDayName} checkout</p>
                        <p className="mb-0">11:00 PM</p>
                    </div>
                </div>
            </div>
            <p className="b-bottom py-4">Self check-in with building staff</p>
            <h5 className="font-weight-bold">Things to keep in mind</h5>
            <ul className="list-unstyled">
                        <li className="mt-5">
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faShoppingCart} />
                                <span className="ml-3">Suitable for children and infants</span>
                            </p>
                        </li>
                        <li className="mt-4">
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faPaw} />
                                <span className="ml-3">Pets allowed</span>
                            </p>
                        </li>
                        <li className="mt-4">
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faBan} />
                                <span className="ml-3">No parties or events</span>
                            </p>
                        </li>
                        <li className="mt-4">
                            <p className="mb-1">
                                <FontAwesomeIcon icon={faSmoking} />
                                <span className="ml-3">Smoking allowed</span>
                            </p>
                        </li>
                    </ul>
                <button onClick={props.homeRulesHandler} className="btn px-5 py-3 text-light mt-5 deep-linear-bg">Agree and continue</button>
        </div>
    );
};

export default HomeRules;