import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import { Home , Contact , About,Phonebook} from './components'
import './assets/styles/styles.css'
// import { firebaseConfig } from './firebaseConfig'
import 'firebase/auth';
// import { Provider } from 'react-redux';
//import { store } from './redux/store'
debugger;
const temp_props = "Brandon's Phonebook"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//  </React.StrictMode>
// );


ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
    <Provider store={store}> */}
    <Router>
      <Switch>


        <Route exact path="/">
          <Home title={temp_props}/>
        </Route>
        <Route path='/phonebook'>
          <Phonebook></Phonebook>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>


      </Switch>
    </Router>
    {/* </Provider>
    </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')

);