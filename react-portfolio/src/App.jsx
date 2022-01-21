import { About } from "./components/About/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";



const App = () => {
  return <div>
    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>;
};

export default App;
