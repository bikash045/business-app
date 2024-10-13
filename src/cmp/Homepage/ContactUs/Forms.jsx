import { Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { Bounce, toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forms = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((old) => ({
            ...old,
            [name]: value
        }));
    };

    const submitFormData = async(e)=>{
        e.preventDefault();
        try {
            if(formData.name != "" & formData.email != ""){
                const response = await axios.post("https://auth-api-dd80d-default-rtdb.firebaseio.com/puserData.json", formData);
                setFormData(formData)
                if (response.status == 200) {
                    toast.success("Your data has been submitted successfully",
                        {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme:"colored",
                            transition: Bounce
                        }
                    );
                }
                else {
                    toast('Error, Please try again!');
                }
            }
            else{
                toast.error("Please Fill your details", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme:"colored",
                    transition: Bounce,
            })
        }
        } catch (error) {
            toast.error("Something went wrong" + error, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme:"colored",
                transition: Bounce,
            })
        }

    }

    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }}>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Enter First Name"
                                value={formData.name}
                                onChange={handleChange}
                                style={{ border: "2px solid #8F9399", background: "#f8f8fb" }}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }}>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Last Name"
                                style={{ border: "2px solid #8F9399", background: "#f8f8fb" }}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }}>Email</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={{ border: "2px solid #8F9399", background: "#f8f8fb" }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }}>Mobile No</Form.Label>
                    <Form.Control
                        type="number"
                        name="mobile"
                        placeholder="Enter Mobile No"
                        value={formData.mobile}
                        onChange={handleChange}
                        style={{ border: "2px solid #8F9399", background: "#f8f8fb" }}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label style={{ color: "#8F9399", fontWeight: "bold" }}>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        name="message"
                        rows={5}
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ border: "2px solid #8F9399", background: "#f8f8fb" }}
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className="w-100 border-0"
                    onClick={submitFormData}
                    style={{ background: "#4d5fe3" }}
                >
                    Submit
                </Button>
            </Form>
            <ToastContainer  />

        </>
    );
};

export default Forms;
