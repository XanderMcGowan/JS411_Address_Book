import React, { useState, useEffect } from 'react';
import LogicalNot from './LogicalNot';
 
import "./App.css"

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        'https://randomuser.me/api?results=25'
      );
      const data = await response.json();
      setUsers(data);
    };
    getUsers();
  }, []);

    


  console.log(users);

  return (
   <div>
      {users ? (
        users.results.map((user) => (
          <div class="main" key={user.id.value}>
             <img src={user.picture.thumbnail} />
            <h2>User: {user.name.first} {user.name.last}</h2>
            <div className="App mt-5">
      <LogicalNot />
    </div>
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;