import React, { Component } from 'react'

export class NewsComponent extends Component {

  render() {
    let {title,description,imgUrl,toUrl}=this.props        //destructuring 
    return (
      <div className='my-2'>
        <div className="card" style={{width: '18rem'}}>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={toUrl} className="btn btn-sn btn-dark">Read more</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsComponent
