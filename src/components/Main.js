import { Component } from "react";
// import { withAuth0 } from "@auth0/auth0-react";
import Recipecard from "./RecipeCard";
import RecipeModal from "./RecipeModal";
import Search from "./Search";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: false,
      isChecked: false,
    };
  }
  componentDidMount(){
    this.props.getFavoritesFromDB();
    this.favorited();
  }
  componentDidUpdate = () => {
    if(this.state.isChecked === false){
      this.props.favoritesData.map((favorite) => {
        console.log(favorite.id, this.props.fullRecipe.id);
        // console.log(this.props.fullRecipe);
      if(favorite.id === this.props.fullRecipe.id){
        return this.setState({
          isFavorited: true
        })
      }
      this.setState({
        isChecked: true
      })
    });
    }
  }
  favorited = () => {
      this.props.favoritesData.map((favorite) => {
          console.log(favorite);
          return console.log(this.props.fullRecipe);
        // if(favorite.id === this.props.selectedRecipe.id){
        //   return this.setState({
        //     isFavorited: true
        //   })
        // }
      });
  }
  render() {
    return (
      <>
        <Search searchQuery={this.props.searchQuery} getSearchQuery={this.props.getSearchQuery} getRecipes={this.props.getRecipes}/>
        <Recipecard handleModal={this.props.handleModal} recipe={this.props.recipe} getRecipeId={this.props.getRecipeId} getfullRecipes={this.props.getfullRecipes} handleOpen={this.props.openModel} />
        <RecipeModal show={this.props.show} handleModal={this.props.handleModal} saveFavoriteToDB={this.props.saveFavoriteToDB} selectedRecipe={this.props.fullRecipe} deleteFavoriteFromDB={this.props.deleteFavoriteFromDB} getFavoritesFromDB={this.props.getFavoritesFromDB}
        favoritesData={this.props.favoritesData} isFavorited={this.state.isFavorited}/>
      </>
    );
  }
}
export default Main;
