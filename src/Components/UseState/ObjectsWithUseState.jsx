import React, { useState } from 'react';

export default function ObjectsWithUseState() {
   // Initialize state
   const [user, setUser] = useState({ name: 'John', age: 30 });
   const [newName, setNewName] = useState('');

   // Function to handle name change
   const changeName = () => {
     if (newName.trim() !== '') {
       setUser(prevUser => ({ ...prevUser, name: newName }));
       setNewName('');
     }
   };
 
   // Function to handle age increment
   const incrementAge = () => {
     setUser(prevUser => ({ ...prevUser, age: prevUser.age + 1 }));
   };

   // Function to handle age decrement
   const decrementAge = () => {
     setUser(prevUser => ({ ...prevUser, age: prevUser.age - 1 }));
   };
 
   return (
     <div>
        <h1>Objects With UseState Examples</h1>
       <p>{user.name} is {user.age} years old</p>
       <input
         type="text"
         placeholder="Enter new name"
         value={newName}
         onChange={(e) => setNewName(e.target.value)}
       />
       <button onClick={changeName}>Change Name</button>
       <button onClick={incrementAge}>Increment Age</button>
       <button onClick={decrementAge}>Decrement Age</button>
     </div>
   );
}
