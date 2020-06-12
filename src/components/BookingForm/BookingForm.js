import React,{ useState }  from "react";
import { useForm } from "react-hook-form";
import "./BookingForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';

const BookingForm = (props) => {
	const today = new Date();
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = String(today.getMonth() + 1).padStart(2, '0');
	const yyyy = today.getFullYear();
	const todayDate = yyyy + '-' + mm + '-' + dd;
	const tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));
	const DD = String(tomorrow.getDate()).padStart(2, '0');
	const MM = String(tomorrow.getMonth() + 1).padStart(2, '0');
	const YYYY = tomorrow.getFullYear();
	const tomorrowDate = YYYY + '-' + MM + '-' + DD;

	const [formData, setFormData] = useState({
		location: "dhaka division",
		arrival: todayDate,
		departure: tomorrowDate,
		guests : 0,
		adults: 0,
		child: 0,
		babies: 0,
	});

	const { location, arrival, departure, adults, child, babies } = formData;
	const { register, handleSubmit, errors } = useForm();

	let history = useHistory();  
	const onSubmit = data => {
		props.formData(data);
		history.push('/choose-apartment');

	};

	return (
		<div className="booking-form-block">
			<h4>Where do your want to go</h4>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="input-item">
					<label htmlFor="location">location</label>
					<select className="form-control text-capitalize" name="location" disabled  ref={register({ required: true })}>
					{errors.location && "Location required"}
						<option defaultValue={location}>{location}</option>
					</select>
					<span className="text-secondary">For Now, Service only available in Dhaka Division</span>
				</div>
				<div className="form-input-group date-picker">
					<div className="input-item">
						<label htmlFor="arrival">arrival</label>
						<div className="date-input">
							<input
								type="date"
								name="arrival"
								defaultValue={arrival}
								ref={register({ required: true })}
							/>
							{errors.arrival && "Arrival Date is required"}
						</div>
					</div>
					<div className="input-item">
						<label htmlFor="departure">departure</label>
						<div className="date-input">
							<input
								type="date"
								name="departure"
								defaultValue={departure}
								ref={register({ required: true })}
							/>
							{errors.arrival && "Departure Date is required"}
						</div>
					</div>
				</div>
				<div className="input-item">
					<div className="guest-heading">
						<span>Guests</span>
						<input
						className="d-none"
							name="guests"
							type="number"
							value={adults+child+babies}
							ref={register({ required: true, min: 1 })}
							readOnly="readonly"
						/>
						<p className="text-danger">
						{errors.guests && "Guests is required"}
						</p>
						<input
							name="adults"
							type="hidden"
							value={adults > 0 ? adults : 0}
							ref={register({ required: true })}
							readOnly="readonly"
						/>
						<input
							name="child"
							type="hidden"
							value={child > 0 ? child : 0}
							ref={register({ required: true })}
							readOnly="readonly"
						/>
						<input
							name="babies"
							type="hidden"
							value={babies > 0 ? babies : 0}
							ref={register({ required: true })}
							readOnly="readonly"
						/>
						<h6>{`${adults > 0 ? adults + "Adults ," : ""} ${
							child > 0 ? child + "child," : ""
						} ${babies > 0 ? babies + "babies" : ""}`}</h6>
					</div>
					<div className="guest-option">
						<h6>Adults</h6>
						<div className="btn-action">
							<span
								onClick={() =>
									adults>0 &&
									setFormData({ ...formData, adults: adults - 1 })
								}>
								&#9472;
							</span>
							<span>{adults && adults}</span>
							<span
								onClick={() =>
									setFormData({ ...formData, adults: adults + 1 })
								}>
								+
							</span>
						</div>
					</div>
					<div className="guest-option">
						<h6>
							Child <p>Ae 2-12</p>
						</h6>

						<div className="btn-action">
							<span
								onClick={() => 
									adults>0 &&
									setFormData({ ...formData, child: child - 1 })}>
								&#9472;
							</span>
							<span>{child && child.toString()}</span>
							<span
								onClick={() => setFormData({ ...formData, child: child + 1 })}>
								+
							</span>
						</div>
					</div>
					<div className="guest-option">
						<h6>
							Babies <p>Younger than 2</p>
						</h6>

						<div className="btn-action">
							<span
								onClick={() =>
									adults>0 &&
									setFormData({ ...formData, babies: babies - 1 })
								}>
								&#9472;
							</span>
							<span>{babies && babies}</span>
							<span
								onClick={() =>
									setFormData({ ...formData, babies: babies + 1 })
								}>
								+
							</span>
						</div>
					</div>
				</div>
				<button type="submit" className="btn btn-block linear-bg py-2">
					<FontAwesomeIcon  icon={faSearch} />
					<span className="px-2">Search</span>
				</button>
			</form>
		</div>
	);
};

export default BookingForm;