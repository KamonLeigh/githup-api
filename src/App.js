import React, { Component } from 'react';
import axios from "axios";
import Language from './Component/Language';
import Results from './Component/Results';
import Loading from './Component/Loading';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
      this.state ={
        repos:[],
        choice:'all',
        loading:true
      }
      
      this.handleFetchData = this.handleFetchData.bind(this)
      this.handleChange = this.handleChange.bind(this)
  }

    componentDidMount(){
      this.handleFetchData(this.state.choice)
    }

    componentDidUpdate(prevProps, prevState ){
      if(prevState.choice !== this.state.choice){
        this.handleFetchData(this.state.choice)
      }
    }

  handleFetchData(lang = 'all'){
    this.setState({
      loading:true
    })
    
    axios.get(`https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`)
         .then(data => {
           console.log(data.data.items)
          this.setState({
              repos:data.data.items,
              loading:false
         })})
        .catch(err => console.warn(err))
  }

  handleChange(lang = 'all'){
    this.setState({
      choice:lang
    })
  }


  render() {
    return <div>
            <Language handleLangChange={this.handleChange} />
            {this.state.loading ? 
              <Loading /> : 
            <Results repos={this.state.repos} />}
          </div>;
  }
}

export default App;
