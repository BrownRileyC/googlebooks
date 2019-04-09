import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    results: [],
    search: ""
  };

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, search: ""})
  //     )
  //     .catch(err => console.log(err));
  // };

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
      API.search(this.state.search
      )
        .then(res => this.setState({results: res}))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
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
          <Col size="md-6 sm-12">
            {this.state.results.length ? (
              <Container>
                <Jumbotron>
                  <h1>Here's what we Found</h1>
                </Jumbotron>
                <List>
                  {this.state.results.map(result => (
                    <ListItem key={result._id}>
                      <Link to={"/books/" + result._id}>
                        <strong>
                          {result.title} by {result.author}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteBook(result._id)} />
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
