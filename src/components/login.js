import React, { useState } from "react"
import { Container, Title, Input, Form, TitleBox, Submit } from "../assets/styles/loginStyling";
// import TitleBox from "../assets/images/buttonLong.png"
import axios from "axios";

export default function Login() {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("https://lambda-mud-test.herokuapp.com/api/login", form)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <Container>
            <TitleBox>
                <Title>LOGIN</Title>
            </TitleBox>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <Input type="text" name="password" placeholder="Password" onChange={handleChange} />
                <Submit type="submit" onSubmit={handleSubmit} value="SUBMIT" />
            </Form>
        </Container>
    )
}