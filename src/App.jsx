import React,{Component,Fragment} from 'react'
import {Home} from './pages/Home'
import {Profile} from './pages/Profile'
import {Story} from './pages/Story'
import {Chat} from './pages/Chat'
import {ImageOpen} from './Components/ImageOpen/ImageOpen'
import {Navbar} from './Components/NavBar/Navbar'
import { GlobalStyle } from './style/GlobalStyle'

import {BrowserRouter,Switch,Route} from 'react-router-dom'

class App extends Component {
    render() {
        return (
           <Fragment>
           		<GlobalStyle/>
           		
           		<BrowserRouter>
              <Navbar/>
           			<Switch>
           				<Route exact path="/" component={Home}/>
           				<Route path="/user" component={Profile}/>
                  <Route path="/story" component={Story}/> 
                  <Route path="/chat" component={Chat}/>
           			</Switch>
           		</BrowserRouter>
           </Fragment>
        );
    }
}

export default App;
