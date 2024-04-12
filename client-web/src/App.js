import "./App.css";
import axios from "axios";
import { useState , useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch ,useSelector} from "react-redux";
import { createProduct, fetchProducts } from "./store/products";

import Card from 'react-bootstrap/Card';
function App() {
  const [cover, setCover] = useState(null);

  const [product, setProduct] = useState({
    coverUrl: "",
    title: "",
    description: "",
    price: 0,
  });
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.products.products.items)
  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCover(e.target.files[0]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "price" ? Number(value) : value;

    setProduct((event) => ({
      ...event,
      [name]: updatedValue,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("file", cover);

      const response = await axios.post(
        "http://localhost:5000/api/v1/upload",
        formData
      );

      const productWithCover = { ...product, coverUrl: response.data.path };
      console.log(productWithCover, "product with cover url");

      dispatch(createProduct(productWithCover));
    } catch (err) {
      console.log(err);
    }
  };

  // const postImage = async () => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("file", cover);

  //     const response = await axios.post(
  //       "http://localhost:5000/api/v1/upload",
  //       formData
  //     );

  //     console.log("Response:", response); // Log the entire response object
  //     if (response.status === 201 && response.data && response.data.path) {
  //       console.log("Image path:", response.data.path); // Log the image path
  //       const imageUrl = response.data.path;
  //       setImage(imageUrl);
  //       console.log("Image state after update:", imageUrl); // Log the image state after update
  //     } else {
  //       console.error(
  //         "Invalid response format or missing image path:",
  //         response
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error uploading/processing image:", error);
  //   }
  // };

  return (
    <div className="App d-flex flex- justify-content-center align-items-center position-fixed w-100 h-100">
      <div style={{ display: "block", width: 700, padding: 30 }}>
        <h4>React-Bootstrap Form Component</h4>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Enter your product cover:</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter your product cover"
              name="coverUrl"
              value={product.coverUrl}
              onChange={handleFileChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your product title:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your product title"
              name="title"
              value={product.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your product desc:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your your product desc"
              name="description"
              value={product.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Enter your product price:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your product price"
              name="price"
              onChange={handleChange}
              value={product.price}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Click here to submit form
          </Button>
        </Form>
      </div>
      {products && 
      
      products.map((product,i) =>(
        <Card style={{ width: '18rem' }} key={i} >
        <Card.Img variant="top" src={product.coverUrl?product.coverUrl:''} />
        
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
           {product.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      ))}
     
    </div>
  );
}

export default App;
