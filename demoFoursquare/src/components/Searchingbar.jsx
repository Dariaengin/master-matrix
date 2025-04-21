
import React, { useState } from 'react';

const Searchingbar = ({ onSearch }) => {
  const [userInput, setUserInput] = useState(''); // manage the state of the user input in the search bar.
  // The setUserInput function is used to update the userInput state variable.
  // The onSearch prop is a function that will be called when the user submits the search form.
  // It is passed as a prop to the Searchingbar component from its parent component.
  // The onSearch function is expected to handle the search logic, such as filtering or fetching data based on the user's input.
  // The Searchingbar component is a functional component that renders a search input field and a submit button.
  // It allows the user to enter a search query and submit it.
  // The component uses the useState hook to manage the user input state.
  // The component also defines two functions: handleChange and handleSubmit.
  // The handleChange function is called whenever the user types in the input field.
  // It updates the userInput state variable with the current value of the input field.
  // The handleSubmit function is called when the user submits the form.
  // It prevents the default form submission behavior, calls the onSearch function with the user input,
  // and resets the user input state to an empty string.
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {//handles the form submission
   
 
    e.preventDefault(); // It prevents the default form submission behavior, 
    onSearch(userInput);//calls the onSearch function with the user input,and resets the user input state.
    setUserInput('');   
  };// It is called when the form is submitted.

  return (
    <div>
      <form onSubmit={handleSubmit} className='searchingbar'>
        <input
          type='text'
          name='user-search'
          value={userInput}
          onChange={handleChange}
          placeholder='input your search request...'
          required
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default Searchingbar;
