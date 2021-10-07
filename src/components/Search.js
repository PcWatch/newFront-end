import React from "react";
import { FormControl, Button, Form } from "react-bootstrap";
import '../App.css'

class Search extends React.Component {
  searchEvent = (event) => {
    event.preventDefault();
    this.props.getSearchQuery(event.target.value)
  }
  render() {
    return (
      <>
        <Form onSubmit={this.props.getRecipes} className="searchForm">
          <FormControl onChange={this.searchEvent} type="text" placeholder="Enter an ingredient" className="primarySearch" />
          <Button onClick={this.props.getRecipes} className="searchButton" variant="success">Search Now!</Button>
        </Form>
      </>
    );
  }
}
export default Search;