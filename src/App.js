import React,{Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import Searchbox from './components/Search/Search';
import Admin from './components/Admin/Admin'
import AdminS from './components/AdminS'
import './App.css';
const particlesOptions = {
  particles: {
    number: {
      value: 31,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  style:{
           width: '100%',
           backgroundImage: `url(1.png)` 
        }
}

const initialState = {
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
    isBlocked:''
  },
  Search:"no"
}
class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }
  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    else if (route === 'admin') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }
  showSearch = () => {
    this.setState({search:'show'})
  }
  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
      isBlocked: data.isblocked
    }})
  }
  render(){
        const { isSignedIn,route, } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'

          ? <div>
              <Logo />
              <Rank
                name={this.state.user.name}
                showSearch={this.showSearch}
                entries={this.state.user.entries}
              />
              {this.state.search==='show'
              ?<Searchbox currentId={this.state.user.id} loadUser={this.loadUser} entries={this.state.user.entries} />
              :(this.state.user.isBlocked==='true'
                 ? <div className="f1 white">Your Account has been Blocked</div>
                 :<div></div>
                )
              }
            </div>
          : (
             route === 'signin'
             ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
             : (
              route==='admins'
              ?<AdminS onRouteChange={this.onRouteChange}/>
              :(
                route==='admin'
                ?<Admin/>
                :<Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
                )
              )
            )
        }
      </div>
      )
  }
}

export default App;
