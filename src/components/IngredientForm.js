import { Component } from "react";
import { Button, Form, FormControl, } from "react-bootstrap";

export default class IngredientForm extends Component {
  clickEvent = (event) => {
    event.preventDefault();
    this.props.getSearchQuery(event.target.value)
  }
  render(){
    return(
      <div class="ingredientAddDiv" style={{border: "2px solid red", display: "flex", flexFlow: "row wrap", justifyContent:"space-evenly"}}>
      {this.props.recipeData.ingredients.map(ingredient => ingredient === ' ' ? '' : 
        (
          <>
          <Form className="ingredientForm" style={{display: "flex", margin: "10px"}}>
          <Button onClick={()=>this.clickEvent()} className="ingredientButton" variant="success">Add</Button>
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
