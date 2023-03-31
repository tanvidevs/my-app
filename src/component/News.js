import React, { Component } from 'react';
import Newsitem from '../Newsitem';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps ={
        country:`us`,
        categories:[`general`, `technology`, `sports`],
    }
    
    static propTypes ={
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,

    }

    constructor() {
        super();
        console.log("Hello, I am the constructor from News component");
        this.state = {
          articles: [],
          loading: false,
          page:1,
          totalResults: 0 // add this line
        };
      }
    
      async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=204f2f39490043229205d1f2d4bf5c4f&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles });
      }

  async componentDidMount() {
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=204f2f39490043229205d1f2d4bf5c4f&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  handlePrevClick = async () => {
    console.log("Previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=204f2f39490043229205d1f2d4bf5c4f&page=${this.state.page - 1}&pageSize=10`;

    
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({ articles: parsedData.articles });
  
    // this.setState({
    //   page: this.state.page - 1,
    // });
    this.setState({page:this.state.page -1});
   this.updateNews()

  };
  
  handleNextClick = async () => {
    console.log("Next");
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=204f2f39490043229205d1f2d4bf5c4f&page=${this.state.page + 1}&pageSize=10`
    //   ;
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({ articles: parsedData.articles });
    //   this.setState({
    //     page: this.state.page + 1,
    //   });
    // }
    this.setState({page:this.state.page + 1});
    this.updateNews()

  };
  
  render() {
    
    return (
        
      <div className="container my-3">
        <h1 className='text-center'>NewsMonkey-Top Headlines</h1>
        <div className="row">
        {this.state.articles ? (
  this.state.articles.map((element) => {
    return (
      <div className="col-md-4" key={element.url}>
        <Newsitem
          title={element.title ? element.title : ""}
          description={element.description ? element.description : ""}
          urlToImage={element.urlToImage}
          url={element.url}
          author={element.author}
          date={element.publishedAt}
          source={element.source.name}
        />
      </div>
    );
  })
) : (
  <p className='text-center mt-5 mb-5 ' >Loading...</p>
  
  
)}

        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark"onClick={this.handlePrevClick}>&larr;Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>&rarr;Next</button>
        </div>
      </div>
    );
  }
}

export default News;
