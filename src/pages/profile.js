import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Profile() {
  const [value, setValue] = useState(0);
  const getUsers = async () => {
    try {
      const result = await axios({
        url: "https://learning-task4.herokuapp.com/users/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("name")}`,
        },
      });
      setValue(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Card style={{ width: "25rem", margin: "20px" }}>
        <Card.Img variant="top" src={value.photo} />
        <Card.Body>
          <Card.Title> Name: {value.username}</Card.Title>
          <Card.Text>
            Email : {value.email} <br/>
            Type : {value.role}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
