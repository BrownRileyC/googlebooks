import React, { Component } from "react";
import BookCard from '../components/BookCard';
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";


class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = (event, index) => {
    event.preventDefault();

    API.deleteBook(index).then(res => {
      API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
    }).catch(err => console.log(err))
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Hey, These are the saved books!
              </h1>
            </Jumbotron>
            <List>
                  {this.state.books.map((result, index) => (
                    <ListItem key={index}>
                      <BookCard state='saved' id={result._id} thumbnail={result.image} 
                      title={result.title}
                      authors={result.authors}
                      description=
                    {result.description} view={result.link} alterBook={this.deleteBook}/>
                    </ListItem>
                  ))}
                </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
