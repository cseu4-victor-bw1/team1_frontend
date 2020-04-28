import React, { useState } from "react"
import { Container, Title, Input, Form, TitleBox, Submit } from "../assets/styles/registerStyling"
import axios from "axios";

export default function Register() {

    const [form, setForm] = useState({
        username: "",
        password1: "",
        password2: ""
    })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("https://lambda-mud-test.herokuapp.com/api/registration/", form)
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
                <Title>REGISTER</Title>
            </TitleBox>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <Input type="text" name="password1" placeholder="Password" onChange={handleChange} />
                <Input type="text" name="password2" placeholder="Confirm your Password" onChange={handleChange} />
                <Submit type="submit" onSubmit={handleSubmit} value="SUBMIT" />
            </Form>
        </Container>
    )
}