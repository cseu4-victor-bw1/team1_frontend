import React from "react"
import { Container, Img, Title, Input, Form, TitleBox } from "../assets/styles/loginStyling";
// import TitleBox from "../assets/images/buttonLong.png"

export default function Login() {
    return (
        <Container>
            {/* <Img src={TitleBox} /> */}
            <TitleBox>
                <Title>LOGIN</Title>
            </TitleBox>
            <Form>
                <Input type="text" name="username" placeholder="Username" />
                <Input type="text" name="password" placeholder="Password" />
                <ButtonBox>
                    <Input type="submit" />
                </ButtonBox>
            </Form>
        </Container>
    )
}