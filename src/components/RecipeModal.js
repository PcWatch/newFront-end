import { Component } from "react";
import  { Modal, Button } from "react-bootstrap";

class RecipeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: false,
    };
  }
  handleAddClick = () => {
    this.props.saveFavoriteToDB(this.props.selectedRecipe.id)
    this.setState({isFavorited: true})
    this.props.handleModal();
  }
  
  render() {

    return (
      <>
        <Modal size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered className="recipe-modal" key={this.props.selectedRecipe.id} show={this.props.show} onHide={this.props.handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.selectedRecipe.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id="modal-recipe">
              <img id="modal-image" style={{ width: "20rem" }} variant="top"src={this.props.selectedRecipe.image} alt="hi"/>
              <div>
                <div id="modal-ingredients-title">Ingredients</div>
                <div id="modal-ingredients">{this.props.selectedRecipe.ingredients}</div>
              </div>
            </div>
            <div>
              <div>
                <div id="modal-directions-title">Directions</div>
                <div id="modal-directions">{this.props.selectedRecipe.recipe}</div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
                <Button onClick={()=>this.handleAddClick()}>Add to Favorites</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RecipeModal;

