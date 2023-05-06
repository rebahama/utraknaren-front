import React, { useState } from "react";
import { axiosReq } from "../api/axiosDefault";
import { Alert, Button, Form } from "react-bootstrap";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const CreateCalculate = () => {
  const currentUser = useCurrentUser();
  const[message,setMessage]=useState("")
  const [calculateNumber, setCalculateNumber] = useState({
    title: "",
    content: "",
    calculate: 1,
    
  });

  const { title, content, calculate } = calculateNumber;
  const [error, setError] = useState({});

  const handleCalculate = (event) => {
    setCalculateNumber({
      ...calculateNumber,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("owner", currentUser.profile_id);
    formData.append("calculate", calculate);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      setMessage("Created!")

      console.log(data);
    } catch (err) {
      if (err.response?.data !== 401) {
        setError(err.response?.data);
        console.log(err.response);
      }
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label> Title </Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={handleCalculate}
          />
        </Form.Group>
        {error?.title?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Control
          as="textarea"
          name="content"
          value={content}
          onChange={handleCalculate}
        ></Form.Control>

        {error?.content?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Label>Calculate</Form.Label>
        <Form.Control
          as="select"
          name="calculate"
          value={calculate}
          onChange={handleCalculate}
        >
          <option value={calculate}> 25 </option>
          <option value={2}> 50 </option>
        </Form.Control>

        {error?.calculate?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Button variant="primary" type="submit">
          Create 
        </Button>
        {message}
      </Form>
    </div>
  );
};
export default CreateCalculate;
