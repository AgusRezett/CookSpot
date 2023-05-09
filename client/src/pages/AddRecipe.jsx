/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DisconnectedIcon from '../assets/svgs/disconnected.svg';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getDietTypes, addRecipe } from '../actions/index';

// Styles
import '../styles/AddRecipe.css';
import { InputText } from '../components/InputText';
import { SelectTag } from '../components/SelectTag';
import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

function validate(input) {
	const errors = {};
	if (!input.name) errors.name = 'Please complete with a recipe name';
	if (!input.summary) errors.summary = 'Please add some comments about your recipe';
	if (input.healthScore < 1 || input.healthScore > 100)
		errors.healthScore = 'The score must be a number between 1 and 100';
	if (!input.steps.length) errors.steps = 'Please detail the steps for your recipe';
	if (!input.dietTypes.length) errors.dietTypes = 'You must select at least one diet type';
	return errors;
}

export default function AddRecipe() {
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const dietTypes = useSelector((state) => state.dietTypes);

	const [errors, setErrors] = useState({});

	const [input, setInput] = useState({
		name: '',
		summary: '',
		healthScore: '',
		steps: '',
		dietTypes: [],
	});

	/**
	 * This function handles changes in input fields and updates the state accordingly while also
	 * validating the input and setting errors.
	 */
	function handleChange(e, vaciar = false) {
		!vaciar && e.preventDefault();

		setInput((prevInput) => {
			const newInput = e.target
				? {
						...prevInput,

						[e.target.name]: e.target.value,
				  }
				: {
						...prevInput,
						[e.name]: '',
				  };

			const validations = validate(newInput);
			setErrors(validations);
			return newInput;
		});
	}

	/**
	 * The function handles the selection and deselection of checkboxes for dietary types and updates the
	 * input and errors state accordingly.
	 */
	function handleCheckBox(diet) {
		let newArray = input.dietTypes;
		let find = newArray.indexOf(diet);

		if (find >= 0) {
			newArray.splice(find, 1);
		} else {
			newArray.push(diet);
		}

		setInput({
			...input,
			dietTypes: newArray,
		});
		const validations = validate(input);
		setErrors(validations);
	}

	/**
	 * This function handles the submission of a recipe form and displays an alert message if there are
	 * errors or if the form is incomplete.
	 */
	function handleSubmit() {
		if (Object.values(errors).length > 0) {
			alert('Please complete the information required');
		} else if (
			input.name === '' &&
			input.summary === '' &&
			input.healthScore === '' &&
			input.steps === '' &&
			!input.dietTypes.length
		) {
			alert('Please complete the form');
		} else {
			dispatch(addRecipe(input));
			alert('New recipe added successfully!');
			setInput({
				name: '',
				summary: '',
				healthScore: '',
				steps: [],
				dietTypes: [],
			});
			navigate(`/recipes`);
		}
	}

	useEffect(() => {
		dispatch(getDietTypes());
		setErrors(validate(input));
	}, [dispatch, input]);

	const InputStatusMessage = ({ error }) => {
		return (
			<>
				<span className={`errors ${error ? '' : 'complete'}`}>
					{error ? (
						<>
							<FaRegTimesCircle size={14} /> <p>{error}</p>
						</>
					) : (
						<>
							<FaRegCheckCircle size={14} />
							<p>All done!</p>
						</>
					)}
				</span>
			</>
		);
	};

	return (
		<div className="new-recipe-view-container">
			<div className="image-container"></div>
			{dietTypes.length === 0 && (
				<div className="dark-layout">
					<div className="modal-status-container">
						<img src={DisconnectedIcon} alt="disconnected-icon" />
						<h4>Could't retrieve the diets tags. Try later.</h4>
					</div>
				</div>
			)}

			<div className="form-view-container">
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="common-inputs-container">
						<div className="form-general-container">
							<div className="form-general-content">
								<>
									<InputText name="name" label="Title" value={input.name} setValue={handleChange} />
									<InputStatusMessage error={errors.name} />
								</>
								<>
									<InputText
										name="healthScore"
										label="Health Score"
										value={input.healthScore}
										setValue={handleChange}
										type="number"
									/>
									<InputStatusMessage error={errors.healthScore} />
								</>
							</div>
						</div>
						<div className="form-summary-container">
							<div className="form-summary-content">
								<>
									<textarea
										placeholder="Write the recipe summary here..."
										style={{ padding: '4px 8px' }}
										name="summary"
										type="text"
										rows="4"
										cols="40"
										value={input.summary}
										onChange={(e) => handleChange(e)}
									/>
									<InputStatusMessage error={errors.summary} />
								</>
							</div>
						</div>
						<div className="form-diets-container">
							<div className="form-diets-content">
								<div className="diets-container">
									{dietTypes.map((diet) => {
										return (
											<SelectTag
												key={diet}
												diet={diet}
												handleChange={handleCheckBox}
												selected={input.dietTypes.includes(diet)}
											/>
										);
									})}
								</div>
								<InputStatusMessage error={errors.dietTypes} />
							</div>
						</div>
					</div>
					<div className="form-steps-container">
						<div className="form-steps-content">
							<textarea
								name="steps"
								type="text"
								placeholder="Write the recipe instructions here..."
								value={input.steps}
								onChange={(e) => handleChange(e)}
								className="steps-input"
							/>
							<InputStatusMessage error={errors.steps} />
						</div>
						<div className="navigation-btns">
							<Link to="/home" className="navigate-back-btn">
								Go back
							</Link>
							<div onClick={handleSubmit} className="submit-form-btn">
								Submit Recipe
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
