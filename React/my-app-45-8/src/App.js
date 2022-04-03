import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <ExternalUser></ExternalUser>
    </div>
  );
}
function ExternalUser() {
  const [users, setUsers] = useState([]);
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h1>External User</h1>

      {
        users.map(user => <User name={user.name} email={user.email} phone={user.phone}></User>)
      }
    </div>
  )
}
function User(props) {
  return (
    <div style={{ background: 'gold', padding: '10px', margin: '15px', borderRadius: '20px' }}>
      <h1>Name: {props.name}</h1>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
export default App;
