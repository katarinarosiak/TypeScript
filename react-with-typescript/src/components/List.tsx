import React from 'react'
import { IState as IProps } from "../App"


const List: React.FC<IProps> = ({ guests }) =>  {

	const renderList = (): JSX.Element[] => {
		return guests.map((guest) => {
			return (
				<li className="List">
				<div className="List-header">
					<img className="List-img" src={guest.url} alt="johny-depp"/>
					<h2>{guest.name}</h2>
				</div>
				<p>{guest.age} years old</p>
				<p className="List-note">{guest.note}</p>
			</li>
			)
		})
	}
	


	return (
		<ul>
			{renderList()}
		</ul>
	)
}

export default List;