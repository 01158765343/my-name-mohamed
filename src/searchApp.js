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
    const {  searchDate ,books} = this.props

    let AllBookTosearsh =[];
    let verifiedBooks =[];
    if(searchDate.length > 0){
        searchDate.map((book) => { 
         books.forEach((bookOnShelf)=>{
           if (book.id == bookOnShelf.id){
            verifiedBooks.push(book)
             let c={...book}
            let aa=bookOnShelf.shelf
            c.shelf=aa
            AllBookTosearsh.push(c)
            //  console.log(c)
            }
         })
        })
      } 
      

      if (verifiedBooks.length > 0){
        let asa =searchDate.filter((c)=>{
            return verifiedBooks.indexOf(c) < 0
        })
        
        console.log("faf",asa)
        asa.map((c)=>{
          let x={...c}
          x.shelf="none"
          AllBookTosearsh.push(x)
        })
        console.log("allbook",AllBookTosearsh)
      }
      
      console.log("eldeeb",verifiedBooks)
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
            {      AllBookTosearsh.map((book)=>( 
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