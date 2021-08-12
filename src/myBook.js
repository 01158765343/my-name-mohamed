import React from 'react'
import './App.css'
import {Link} from 'react-router-dom'
class MyBook extends React.Component {
  state = {

  }
  authors=(x)=>{
    if(x.authors){
     return x.authors.join()
    }else {
      return ""
    }
  }

  render() {
    
    return (
      <div className="app">
         
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {
                            this.props.date.map((book)=>(
                                book.shelf === "currentlyReading" && (<li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value= {book.shelf} onChange={(e)=>this.props.onupdeat(e.target.value , book)}>
                                            <option value="move" >Move to...</option>
                                            <option value="currentlyReading" disabled>Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none" >None</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{this.authors(book)}</div>
                                    </div>
                        
                                </li>)
                            ))
                        }
                      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                            this.props.date.map((book)=>(
                                book.shelf === "wantToRead" && (<li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value= {book.shelf} onChange={(e)=>this.props.onupdeat(e.target.value , book)} >
                                            <option value="move" >Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead" disabled >Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none" >None</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{this.authors(book)}</div>
                                    </div>
                        
                                </li>)
                            ))
                        }
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                            this.props.date.map((book)=>(
                                book.shelf === "read" && (<li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                            <select value= {book.shelf} onChange={(e)=>this.props.onupdeat(e.target.value , book)}>
                                            <option value="move" >Move to...</option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read" disabled>Read</option>
                                            <option value="none" >None</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{this.authors(book)}</div>
                                    </div>
                        
                                </li>)
                            ))
                        }
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" ><button></button></Link>
            </div>
          </div>
        
        
      </div>
    )
  }
}

export default MyBook