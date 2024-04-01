import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [cover, setCover] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCover(e.target.files[0]);
    }
  };

  const postImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", cover);

      const response = await axios.post(
        "http://localhost:5000/api/v1/upload",
        formData
      );
      console.log(response, "response");
    } catch (error) {
      console.error("Error uploading cover image:", error);
    }
  };

  return (
    <div className="App d-flex justify-content-center align-items-center position-fixed w-100 h-100">
      <div className="d-flex justify-content-end ">
        <input
          multiple={true}
          accept="image/*"
          className="form-control"
          id="formFileLg"
          type="file"
          onChange={handleFileChange}
        />
      </div>

      <button type="button" className="btn btn-primary btn-sm" onClick={postImage}>
        post
      </button>
    </div>
  );
}

export default App;
