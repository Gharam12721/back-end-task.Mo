import axios from "axios";
import { useState } from "react";

export default function SendImage() {
  const [image, setImage] = useState(null);
  const sendhand = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("photo", image, image.name);
      const res = await axios({
        url: "https://learning-task4.herokuapp.com/users/profile",
        method: "PATCH",
        data: form,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("name")}`,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <input
        type={"file"}
        placeholder="Enter your image"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <button onClick={(e) => sendhand(e)}>send</button>
    </div>
  );
}
