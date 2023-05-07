/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getDietTypes, addRecipe } from '../actions/index';

// Styles
import '../styles/AddRecipe.css';
import { InputText } from '../components/InputText';
import { SelectTag } from '../components/SelectTag';

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
	//const dietTypes = useSelector((state) => state.dietTypes);
	const dietTypes = [
		'ketogenic',
		'vegetarian',
		'vegan',
		'primal',
		'whole 30',
		'gluten free',
		'pescetarian',
		'dairy free',
		'ovo vegetarian',
		'paleolithic',
		'lacto vegetarian',
		'lacto ovo vegetarian',
		'low fodmap',
	];
	const [errors, setErrors] = useState({});

	const [input, setInput] = useState({
		name: '',
		summary: '',
		healthScore: '',
		steps: '',
		dietTypes: [],
	});

	useEffect(() => {
		//dispatch(getDietTypes());
		validate(input);
	}, [dispatch, input]);

	function handleChange(e, vaciar = false) {
		!vaciar && e.preventDefault();

		setInput((prevInput) => {
			//// de esta manera el componente muestra los cambios (componentdidupdate?) para poder ir validando
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

	function handleSubmit(e) {
		e.preventDefault();

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
			navigate(`/home`);
		}
	}

	return (
		<div className="new-recipe-view-container">
			<div className="image-container"></div>
			<div className="form-view-container">
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="form-general-container">
						<div className="form-general-content">
							<>
								<InputText name="name" label="Title" value={input.name} setValue={handleChange} />
								<span className="errors" style={{ opacity: errors.name ? 1 : 0 }}>
									{errors.name}
								</span>
							</>
							<>
								<InputText
									name="healthScore"
									label="Health Score"
									value={input.healthScore}
									setValue={handleChange}
								/>
								<span className="errors" style={{ opacity: errors.healthScore ? 1 : 0 }}>
									{errors.healthScore}
								</span>
							</>
						</div>
					</div>
					<div className="form-summary-container">
						<div className="form-summary-content">
							<>
								<h4>Summary:</h4>
								<textarea
									name="summary"
									type="text"
									rows="4"
									cols="40"
									value={input.summary}
									onChange={(e) => handleChange(e)}
								/>
								<span className="errors" style={{ opacity: errors.summary ? 1 : 0 }}>
									{errors.summary}
								</span>
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
							<span className="errors" style={{ opacity: errors.dietTypes ? 1 : 0 }}>
								{errors.dietTypes}
							</span>
						</div>
					</div>
					<div className="form-steps-container">
						<div className="form-steps-content">
							<textarea
								name="steps"
								type="text"
								rows="4"
								cols="40"
								value={input.steps}
								onChange={(e) => handleChange(e)}
							/>
							<span className="errors" style={{ opacity: errors.steps ? 1 : 0 }}>
								{errors.steps}
							</span>
						</div>
						<div className="navigation-btns">
							<Link to="/home" className="navigate-back-btn">
								Go back
							</Link>
							<div className="submit-form-btn">Submit Recipe</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
