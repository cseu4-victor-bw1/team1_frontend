import React, { useState } from "react"
import { Container, Title, Input, Form, TitleBox, Submit } from "../assets/styles/registerStyling"
import { Error, Loading } from "../assets/styles/loginStyling"
import axios from "axios";


export default function Register(props) {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    })

    const [error, setError] = useState(null)

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        window.document.getElementById("submit").style.display = "none"
        window.document.getElementById("loading").style.display = "block"
        axios.post("https://archimedesbackend.herokuapp.com/registration/", form)
            .then(data => {
                props.setToken(`Token ${data.token}`)
                window.history.location.push("/dashboard")
                const intialise = async => props.axiosWithAuth("get", "https://archimedesbackend.herokuapp.com/api/adv/initialize/")
                    .then(data => {
                        props.setUser(data.data)
                        props.setTitle(data.data.title)
                        props.setText(data.data.description)

                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                setError(err.message)
                window.document.getElementById("loading").style.display = "none"
                window.document.getElementById("error").style.display = "block"
                window.document.getElementById("submit").style.display = "block"
            })
    }

    return (
        <Container>
            <TitleBox>
                <Title>REGISTER</Title>
            </TitleBox>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <Input type="email" name="email" placeholder="Email" onChange={handleChange} />
                <Input type="password" name="password1" placeholder="Password" onChange={handleChange} />
                <Input type="password" name="password2" placeholder="Confirm your Password" onChange={handleChange} />
                <Error id="error">{error == "Network Error" ? "Sorry something went wrong there" : error}</Error>
                <Submit type="submit" onSubmit={handleSubmit} value="SUBMIT" id="submit" />
                <Loading className="loading" id="loading"></Loading>
            </Form>
        </Container>
    )
}