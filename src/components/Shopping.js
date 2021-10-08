import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Table  from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'


class Shopping extends Component {
  render() {
    return (
      <Table striped bordered hover className="shoppingListTable">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Red Pepper</td>
            <td>1</td>
            <td><Button className="itemRemove" variant="Danger">Remove</Button></td>
          </tr>
          <tr>
            <td>Cloves Garlic</td>
            <td>2</td>
            <td><Button className="itemRemove" variant="Danger">Remove</Button></td>
          </tr>
          <tr>
            <td>Chopped Onion</td>
            <td>1</td>
            <td><Button className="itemRemove" variant="Danger">Remove</Button></td>
          </tr>
          <tr>
            <td>Medium Potatoes</td>
            <td>1</td>
            <td><Button className="itemRemove" variant="Danger">Remove</Button></td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
export default withAuth0(Shopping);