import React from 'react';
import {connect} from 'react-redux';
import {setTextSearch} from '../actions/search';
import axios from 'axios';
import getResponseByQuery from '../data/youtube';

 
const mapStateToProps = (state) => {
    return { 
        search: state.search,
        video : state.video 
    }
};


const mapDispatchToProps = (dispatch) => {
    return({
        updateSearchBox: (text) => {dispatch(setTextSearch(text))}
    })
}

class SearchBox extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      }
    }


    handleChange = (e) => {
        let {name,value} = e.target;
        this.props.updateSearchBox(value);
    }

    handleBlur = (e) =>  {
        let {name,value} = e.target;
        const endpoint = getResponseByQuery(value);
        axios.get(endpoint)
      .then(res => {
        let {data: {items} } = res;
        console.log(items);
      })

    }


  
    render = () => (
        <input name="searchBox" onBlur={this.handleBlur} onChange={this.handleChange} value={this.props.search.text} />
    )
  }


  export default connect(mapStateToProps,mapDispatchToProps)(SearchBox);