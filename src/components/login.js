import React, { useState } from "react"
import { Container, Title, Input, Form, TitleBox, Submit, Error, Loading } from "../assets/styles/loginStyling";
// import TitleBox from "../assets/images/buttonLong.png"
import axios from "axios";

export default function Login(props) {

    const [form, setForm] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState(null)

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        window.document.getElementById("submit").style.display = "none"
        window.document.getElementById("loading").style.display = "block"
        axios.post("https://lambda-mud-test.herokuapp.com/api/login", form)
            .then(data => {
                props.setToken(data.token)
                axios.get("https://lambda-mud-test.herokuapp.com/api/adv/init")
                    .then(data => {
                        props.setUser(data.data)
                        window.history.location.push("/dashboard")
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
                <Title>LOGIN</Title>
            </TitleBox>
            <Form onSubmit={handleSubmit}>
                <Input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <Input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <Error id="error">{error == "Network Error" ? "Sorry something went wrong there" : error}</Error>
                <Submit type="submit" onSubmit={handleSubmit} value="SUBMIT" id="submit" />
                <Loading className="loading" id="loading"></Loading>
            </Form>
        </Container>
    )
}