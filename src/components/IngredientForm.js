import { Component } from "react";
import { Button, Form, FormControl, } from "react-bootstrap";

export default class IngredientForm extends Component {
  
  render(){
    return(
      <div class="ingredientAddDiv" style={{display: "flex", flexFlow: "row wrap", justifyContent:"space-evenly"}}>
      {this.props.recipeData.ingredients.map(ingredient => ingredient === ' ' ? '' : 
        (
          <>
          <Form id="ingredientForm" className="ingredientForm" style={{display: "flex", margin: "10px"}}>
          <Button className="ingredientButton" variant="success">Add</Button>
          <FormControl  type="text" placeholder="0" className="quantityAdd" />
          <Form.Label className="ingredientLabel">{ingredient}</Form.Label>
          </Form>
          </>
        )
      )}
      </div>
    )
  }
}
