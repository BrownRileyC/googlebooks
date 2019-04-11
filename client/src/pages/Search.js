import React, { Component } from "react";
import BookCard from '../components/BookCard';
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    results: [],
    search: ""
  };

  saveBook = (event, index) => {
    event.preventDefault();

    const result = this.state.results[index];
    const newBook = {
      title: result.volumeInfo.title,
      authors: result.volumeInfo.authors,
      description:result.volumeInfo.description,
      image: result.volumeInfo.imageLinks.thumbnail,
      link: result.volumeInfo.infoLink
    };
    console.log(newBook)
    API.saveBook(newBook).catch(err => console.log(err));
  }
  
  // Books can either be saved to database or they can be looked at more closely (going to their google books page)

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.search) {
      console.log(this.state.search);
      API.search(this.state.search
      )
        .then(res => {
          this.setState({ results: res.data.items })
          console.log(this.state.results)
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <Jumbotron>
              <h1>What was that Book again?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.search}
                onChange={this.handleInputChange}
                name="search"
                placeholder="Enter your search here"
              />
              <FormBtn
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="12">
            {this.state.results.length ? (
              <Container>
                <Jumbotron>
                  <h1>Here's what we Found</h1>
                </Jumbotron>
                <List>
                  {this.state.results.map((result, index) => (
                    <ListItem key={index}>
                      <BookCard state='unsaved' id={index} thumbnail={result.volumeInfo.imageLinks.thumbnail} 
                      title={result.volumeInfo.title}
                      authors={result.volumeInfo.authors}
                      description=
                    {result.volumeInfo.description} view={result.volumeInfo.infoLink} alterBook={this.saveBook}/>
                    </ListItem>
                  ))}
                </List>
              </Container>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
