import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";


class Shopping extends Component {
  render() {
    return (
      <>
      <h1>shopping</h1>
      </>
    );
  }
}
export default withAuth0(Shopping);