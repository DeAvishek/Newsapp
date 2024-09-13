import React, { Component } from 'react'
export default class Nav extends Component {
  
  render() {
   
    return (
      <div>
           <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">NewsGPT</a>
            <buthrefn className="navbar-hrefggler" type="buthrefn" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="hrefggle navigation">
              <span className="navbar-hrefggler-icon"></span>
            </buthrefn>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Business</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/entertainment">Entertainment</a>
                    </li>
                    {/* <li className="nav-item">
                      <a className="nav-link" href="/generalhealth">Generalhealth</a>
                    </li> */}
                    <li className="nav-item">
                      <a className="nav-link" href="/science">Science</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/sports">Sports</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/technology">Technology</a>
                    </li>
              </ul>
            </div>
           
          </div>
           {/* <div className="form-check form-switch mx-2">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={hrefggle}/>
              <label className="form-check-label" for="flexSwitchCheckDefault" style={{color:mode==='dark'?'white':'black'}}>{text}</label>
            </div> */}
         </nav>
      </div>
    )
  }
}
