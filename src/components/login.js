import React from "react"
import { Container, Img, Title, Input, Form } from "../assets/styles/loginStyling";
import TitleBox from "../assets/images/buttonLong.png"

export default function Login() {
    return (
        <Container>
            {/* <Img src={TitleBox} /> */}
            <Title>LOGIN</Title>
            <Form>
                <Input type="text" name="username" placeholder="Username" />
                <Input type="text" name="password" placeholder="Password" />
            </Form>
        </Container>
    )
}