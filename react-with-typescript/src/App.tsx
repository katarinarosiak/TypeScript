import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
	guests: {
		name: string 
		age: number 
		url: string 
		note?: string
	}[]
}


function App() {

	const [guests, setGuests] = useState<IState["guests"]>([
		{
			name: 'Johny',
			age: 14,
			url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Johnny_Depp-2757_%28cropped%29.jpg/1024px-Johnny_Depp-2757_%28cropped%29.jpg',
			note: 'cool guys'
		}
	]); 


  return (
    <div className="App">
			<h1>People Invited To Our Party </h1>
			<List guests={guests}/>
			<AddToList guests={guests} setGuests={setGuests}/>
    </div>
  );
}

export default App;
