import { Component } from "react";
import { Card, Row, Container } from 'react-bootstrap'


class Recipecard extends Component {
  modalEvent = (id) => {
   this.props.handleOpen(id);
  }

  render() {
    return (
      <Container className="recipeCardContiner">
        <Row xs={1} sm={2} md={3} lg={4}>
          {this.props.recipe.map( (recipeData) =>
          <Card className="recipe-card" key={recipeData.id} onClick={() => this.modalEvent(recipeData.id)} style={{ width: '25rem' }}>
            <Card.Img className="recipe-card-image" variant="top" src={recipeData.image} />
            <Card.Body>
              <Card.Title>{recipeData.name}</Card.Title>          
            </Card.Body>
          </Card>
          )}
        </Row>
      </Container>
    );
  }
  
}
export default Recipecard;
