import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import style from "../style.module.css";

export default function Header() {
  const loginHand = () => {
    localStorage.removeItem("name");
    window.location.href = "/";
  };

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          {localStorage.getItem("name") ? (
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  className={(nav) =>
                    nav.isActive ? style.active : style.normal
                  }
                  to={"/mapusers"}
                >
                  All user
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                  className={(nav) =>
                    nav.isActive ? style.active : style.normal
                  }
                  to={"/sendImage"}
                >
                  send Image
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={(nav) =>
                    nav.isActive ? style.active : style.normal
                  }
                  to={"/profile"}
                >
                  my profile
                </NavLink>
              </Nav.Link>
              <Button
                style={{ marginLeft: "750px" }}
                onClick={() => loginHand()}
              >
                LogOut
              </Button>
            </Nav>
          ) : (
            <Nav>
              <Nav.Link>
                <NavLink
                  className={(nav) =>
                    nav.isActive ? style.active : style.normal
                  }
                  to={"/signup"}
                >
                  sign up
                </NavLink>
              </Nav.Link>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
}
