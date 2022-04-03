import logo from './logo.svg';
import './App.css';

function App() {
  const heros = ['Rashed', 'SalmanShah', 'Sagor', 'Satan', 'Shabnur']
  return (
    <div className="App">
      {
        heros.map(hero => <li>{hero}</li>)
      }
      <Person name="Rashed" girlfreind="unknown"></Person>
      <Person name="Sagor" girlfreind="Korimon"></Person>
      <Person name="Satan" girlfreind="Dangkar"></Person>
      <h2>New Component</h2>
      <Friend name="Mahejabin" natok="Boro Sele"></Friend>
      <Friend name="Opurbo" natok="bach 27"></Friend>
      <Friend name="Afran"></Friend>
    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>GirlFrind: {props.girlfreind}</p>
    </div>
  )

}

function Friend(props) {
  return (
    <div className="friend">
      <h3>{props.name}</h3>
      <p>{props.natok}</p>
    </div>
  )
}
export default App;
