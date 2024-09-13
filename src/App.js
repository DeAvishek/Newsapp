import './App.css';
import React, { Component } from 'react'
import Nav from './components/Nav';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  // state={mode:'light',
  //        text:'Enable darkmode'
  //       }

  //  handletoggle=(eve )=>
  // {
  //    if(this.state.mode==='light')
  //    {
  //     this.setState({mode:'dark',text:'Enable lightmode'});
  //     document.body.style.backgroundColor="#3d0f54";
  //    }
  //    else{
  //     this.setState({mode:'light',text:'Enable darkmode'});
  //     document.body.style.backgroundColor="white";
  //    }
  // }
  render() {
    return (
      <>
      
         <Nav/>
         <Router>
              <Routes>
                  <Route exact path="/" element={<News key="business" pageSize={6} catagory="business"/>}/>
                  <Route exact path="/entertainment" element={<News key="entertainment"pageSize={6} catagory="entertainment"/>} />
                  {/* <Route exact path="/generalhealth" element={<News key="generalhealth" pageSize={6}  catagory="generalhealth"/>} /> */}
                  <Route exact path="/science" element={<News key="science"pageSize={6}  catagory="science"/>} />
                  <Route exact path="/sports" element={<News key="sports"pageSize={6}  catagory="sports"/>} />
                  <Route exact path="/technology" element={<News key="technology" pageSize={6}  catagory="technology"/>}/>
                  </Routes>
        </Router>
        
      </>
    )
  }
}

