import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function UsersMap() {
  const [values, setValue] = useState([]);
  const getUsers = async () => {
    try {
      const result = await axios({
        url: "https://learning-task4.herokuapp.com/users?allowPagination=false",
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
      {values.map((el) => {
        return (
          <Card style={{ width: "25rem", margin: "20px" }} key={el.id}>
            <Card.Body>
              <Card.Title> {el.username}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
