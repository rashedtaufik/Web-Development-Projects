import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { name: 'laptop', price: 35000 },
    { name: 'computer pc', price: 25000 },
    { name: 'ladies watch', price: 5000 },
    { name: 'i-phone', price: 15000 },
  ]
  return (
    <div className="App">
      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
      {/* <Product name="Laptop" price="45000"></Product>
      <Product name="iPhone" price="145000"></Product> */}
    </div>
  );
}

function Product(props) {
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
