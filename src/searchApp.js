import React from "react"
import {Link} from "react-router-dom"
import PropTypes from 'prop-types'


class SearchApp extends React.Component {
  static propTypes={
    searchData: PropTypes.array,
    onupdeat:PropTypes.func.isRequired,
    updateQuery:PropTypes.func.isRequired,
  
  }
  img=(x)=>{
    if(x.imageLinks){
     return x.imageLinks.thumbnail
    }else {
      return ""
    }
  }
  authors=(x)=>{
    if(x.authors){
     return x.authors.join()
    }else {
      return ""
    }
  }
  render (){
    const {  searchDate } = this.props
    
    // const searchDatea= query === "" ? searchDate 
    // :searchDate.filter((c) => (
    //   c.title.toLowerCase().includes(query.toLowerCase())
    // ))
      return (
          <div>
            <div className="search-books">
              <div className="search-books-bar">
                  <Link className="close-search" to="/" >Close</Link>
                  <div className="search-books-input-wrapper">     
                    <input type="text" placeholder="Search by title or author" onChange={(e)=>this.props.updateQuery(e.target.value)} />
                  </div>
              </div>
            <div className="search-books-results">
          </div>
            <ol className="books-grid">
            {      searchDate.map((book)=>( 
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.img(book)})` }}></div>
                          <div className="book-shelf-changer">
                            <select onChange={(e)=>this.props.onupdeat(e.target.value , book)} >
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none" >None</option>
                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-title">{this.authors(book)}</div>
                      </div>
                    </li> 
                  ))
              }
            </ol>
          </div>
        </div>
      )
  }
}

export default SearchApp