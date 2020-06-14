import React,{Component} from 'react';
import Layout from "./Components/Layout/layout.js";
import BurgerBulider from "./Containers/BurgerBuilder/BurgerBuilder";

class App extends Component {
  render(){
  return (
    <div>
    <Layout>
    <BurgerBulider />
    </Layout>
      
    </div>
  );
}
}
export default App;
