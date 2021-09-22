import './App.css';
import { Route } from 'react-router-dom'
import Home from './components/Home.jsx';
import Nav from './components/Nav.jsx'
import FoodList from './components/FoodList.jsx'
import MealDetail from './components/MealDetail.jsx'

function App() {
  return (
    <div className="App">

      <div className="App-header">
        <h1>Macro-Manage.R</h1>
        <Nav/>
      </div>

      <div className='App-main'>
        <Route exact path='/' component={Home}/>
        <Route exact path='/meals' render={routerProps => <MealDetail/>}/>
        <Route exact path='/food' render={routerProps => <FoodList/>}/>
      </div>

      <div className='App-footer'>

      </div>

    </div>
  );
}

export default App;
