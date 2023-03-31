import React, { Component } from 'react'

export class Newsitem extends Component {


  render() {
let {title, description,urlToImage , url,author,date, source}=this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
      
  <img src={urlToImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}

   
  </span></h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString() }</small></p>
    <a href={url} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>

  </div>
</div>
      </div>
    )
  }
}

export default Newsitem