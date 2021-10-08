import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import ListGroup  from "react-bootstrap/ListGroup";


class Shopping extends Component {
  render() {
    return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    );
  }
}
export default withAuth0(Shopping);