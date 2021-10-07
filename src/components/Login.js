import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container } from "react-bootstrap";
import Logo from "../images/TrioWord.png"

function Login() {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && 
    <Container className="loginContainer">
      <p class="greeting">Welcome</p>
      <p class="greeting">to</p>
      <img src={Logo} alt="logo-login" id="logoLogin" />
      <p class="greeting">You can search from over 6,000 recipes</p>
      <p class="greeting">We can also save your recipes, so you can always find them</p>
        <div id="loginDiv">
          <p class="loginGreeting">Please login to start searching recipes</p>
          <Button className="loginButton" onClick={loginWithRedirect}>Log in</Button>
        </div>
    </Container>
  );
}

export default Login;
