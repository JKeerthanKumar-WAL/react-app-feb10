import logo from './logo.svg';
import './App.css';
import Categories from './Categories';
import AllProducts from './AllProducts';
import EcommerceApp from './EcommerceApp';

function App() {
  return (
    <div className="App">
      <EcommerceApp
      id={2}
      ></EcommerceApp>
      <AllProducts></AllProducts>
      <Categories></Categories>
    </div>
  );
}
export default App;
