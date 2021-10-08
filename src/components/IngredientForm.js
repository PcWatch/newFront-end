import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import FormControl from "react-bootstrap/FormControl";

export default class IngredientForm extends Component {
  render(){
    return(
      <div class="ingredientAddDiv">
      {this.props.recipeData.ingredients.map(ingredient => 
        (
          <>
          <Form className="ingredientForm">
          <Form.Label className="ingredientLabel">{ingredient}</Form.Label>
          <FormControl  type="text" placeholder="0" className="quantityAdd" />
          <Button className="ingredientButton" variant="success">Add</Button>
          </Form>
          </>
        ))}
        </div>
    )
  }
}
