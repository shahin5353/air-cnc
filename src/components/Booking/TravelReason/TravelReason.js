import React from 'react';
import { useForm } from "react-hook-form";

const TravelReason = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        props.travelReasonHandler(data);
	};
    return (
        <div>
             <h5 className="mb-4 mt-3 font-weight-bold">Traveling for work?</h5>
             <div className="d-flex justify-content-between">
                 <div>
                     <p>Say hello to your host</p>
                     <p>Let Rowdra know a little about yourself and why you’re coming.</p>
                 </div>
                 <div>
                    <img className="host-img" src="https://imgur.com/Gyu1TXZ.png" alt=""/>
                     <p>Rowdra</p>
                 </div>
             </div>
             <form className="pr-5 mr-5 mt-3" onSubmit={handleSubmit(onSubmit)}>
             {errors.travelReason && <span className="text-danger">Please Explain your Travel Reason</span>}
                     <textarea className="form-control" name="travelReason" id="" rows="7" placeholder="Hello Rowdra! Can’t wait to spend 4 night is your home" ref={register({ required: true })}></textarea>
                     
                     <button type="submit" className="btn px-5 py-3 text-light mt-5 deep-linear-bg">Continue</button>
                 </form>
        </div>
    );
};

export default TravelReason;