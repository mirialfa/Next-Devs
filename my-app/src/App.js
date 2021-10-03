import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Details from './components/details'
import {Provider} from 'react-redux'
import store from './components/redux/store'
import {Link,BrowserRouter as Router} from 'react-router-dom'
import Register from './components/register'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
          
       <Login></Login>
       </Provider>
      
      </header>
    </div>
  );
}

export default App;
