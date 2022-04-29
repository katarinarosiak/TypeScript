import React, { useState } from 'react';
import { IState as Props } from "../App";

interface IProps {
	guests: Props["guests"]
	setGuests: React.Dispatch<React.SetStateAction<Props["guests"]>>
}


const AddToList:React.FC<IProps> = ({ guests, setGuests }) => {
 
	const [input, setInput] = useState({
		name: "",
		age: "",
		image: "",
		note: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
		setInput({
			...input,
			[e.target.name]: e.target.value
		})
	};

	const handleClick = ():void => {
		if (
			!input.name || 
			!input.age || 
			!input.image
		) {
			return 
		}
		setGuests([
			...guests,
			{
				name : input.name,
				age: +input.age,
				url: input.image,
				note: input.note

			}
		])
		setInput({
			name: "",
			age: "",
			image: "",
			note: "",
		})
	}


	return (
		<div className="AddToList">
			<input 
				type="text"
				placeholder="Name"
				className="AddToList-input"
				value={input.name}
				onChange={handleChange}
				name="name"
			/> 
						<input 
				type="text"
				placeholder="Age"
				className="AddToList-input"
				value={input.age}
				onChange={handleChange}
				name="age"
			/> 
						<input 
				type="text"
				placeholder="Image Url"
				className="AddToList-input"
				value={input.image}
				onChange={handleChange}
				name="image"
			/> 
						<textarea 
				placeholder="Notes"
				className="AddToList-input"
				value={input.note}
				onChange={handleChange}
				name="note"
			/> 
			<button className="AddToList-btn"
				onClick={handleClick}
			>
				Add To List
			</button>
		</div>
	)
}

export default AddToList;
