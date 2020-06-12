import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import './Home.scss';
import Spinner from '../../images/Logo-Preloaders.gif'
import { Link} from 'react-router-dom';
import BookingForm from '../BookingForm/BookingForm';

const Home = (props) => {
    const [experiences,setExperiences] = useState(null);
    const [homes,setHomes] = useState(null);
    useEffect(() => {
        fetch('https://api-air-cnc.herokuapp.com/experience')
            .then(res => res.json())
            .then(data => {
                setExperiences(data);
                document.getElementById('exp_spinner').style.display = 'none'; 
            })
            .catch(err => console.log(err))
    }, [])
    useEffect(()=>{
        fetch('https://api-air-cnc.herokuapp.com/homes')
            .then(res => res.json())
            .then(data => {
                setHomes(data);
                document.getElementById('home_spinner').style.display = 'none';
            })
            .catch(err => console.log(err))
    },[])
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 mt-4 px-5">
                        <BookingForm formData={props.formData}></BookingForm>
                    </div>
                    <div className="col-md-8 pr-5 mt-5 pt-5">
                            <div className="row">
                            <div className="secondary-title mb-2">
                                <h2>Experiences</h2>
                                <Link className="nav-link text-dark" to="/">
                                    See all
                                </Link>
                            </div>
                            <div className="row">
                            <img id="exp_spinner" style={{ width: "100%" }} src={Spinner} alt="spinner" />
                                {
                                    experiences &&
                                    experiences.map((experience,index) => {
                                        return (
                                            <div className="col-md-3" key={index}>
                                                <div className="service-card">
                                                    <div className="service-thumbnail">
                                                        <img src={experience.img} alt={experience.title} />
                                                    </div>
                                                    <div className="service-content">
                                                        <h5 className="place-title">{experience.place}</h5>
                                                        <h2 className="service-title">{experience.title}</h2>
                                                        <div className="service-meta">
                                                            <h5 className="price">$ {experience.price} per person</h5>
                                                            <div className="rating">
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <span>{experience.rating}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="secondary-title mb-2">
                                <h2>Homes</h2>
                                <Link className="nav-link text-dark" to="/">
                                    See all
                                </Link>
                            </div>
                            <div className="row">
                            <img id="home_spinner" style={{ width: "100%" }} src={Spinner} alt="spinner" />
                                {
                                    homes &&
                                    homes.map((home,index) => {
                                        return (
                                            <div className="col-md-4" key={index}>
                                                <div className="service-card">
                                                    <div className="home-thumbnail">
                                                        <img src={home.img} alt={home.title} />
                                                    </div>
                                                    <div className="service-content">
                                                        <h5 className="place-title">{home.place}</h5>
                                                        <h2 className="service-title">{home.title}</h2>
                                                        <div className="service-meta">
                                                            <h5 className="price">$ {home.price} per person</h5>
                                                            <div className="rating">
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <FontAwesomeIcon icon={faStar} />
                                                                <span>{home.rating}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Home;