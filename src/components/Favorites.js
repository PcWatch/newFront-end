import { Component } from "react";
import { Card, Col, Button } from "react-bootstrap";
import IngredientForm from "./IngredientForm";

export default class Favorites extends Component {

  // componentDidMount(){
  //   this.props.getFavoritesFromDB();
  // }

  render() {
    this.props.getFavoritesFromDB();
    return(
      <>
        {this.props.favoritesData && 
          <Col className="card-column" xs={1} sm={1} md={1} lg={1}>
            {this.props.favoritesData.map( (recipeData) => <FavCard deleteFavoriteFromDB={this.props.deleteFavoriteFromDB} key={recipeData._id} recipeData={recipeData} />              
              )}
          </Col>
        }
        <div class="favoritesFooter"></div>
      </>
    )
  }
}

class FavCard extends Component {
  render(){
   
    return(
      <Card className="favoriteCard" key={this.props.recipeData._id} style={{ width: '69rem' }}>
        <Card.Title className='favoriteCardTitle'>{this.props.recipeData.title}</Card.Title>
          <div class="favoriteRecipe">
            <img class="favorite-image" alt="favoriteRecipe" src={this.props.recipeData.image}/>
            <div class="favIngredientTitle">Ingredients</div>
            <IngredientForm class="ingredientForm"recipeData={this.props.recipeData}/>
          </div>
            {/* {this.props.recipeData.ingredients.map(ingredient => 
              (
                <div>{ingredient}</div>
              ))} */}
            <div class="favRecipeTitle">Recipe</div>
            <div class="favRecipe">{this.props.recipeData.recipe}</div>
          <Button onClick={() => this.props.deleteFavoriteFromDB(this.props.recipeData.id)} className="favoriteDelete" variant="danger">Remove</Button>
      </Card>
      
      
    )
  }
}
