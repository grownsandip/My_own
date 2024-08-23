import React from 'react'
import {
    Html,
    Body,
    Head,
    Container,
    Heading,
    Hr,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from '@react-email/tailwind';

type contactFormProps={
    message:string,
    senderEmail:string,
}
const ContactFormEmail = ({message,senderEmail}:contactFormProps) => {
  return (
    <Html>
        <Head/>
        <Preview>New message from Portfolio site</Preview>
        <Tailwind>
            <Body className='bg-gray-100'>
                <Container>
                    <Section className='bg-white border boder-black/10 my-10 py-10 px-4 rounded-md'>
                    <Heading className='leading-tight'>Your message from the contact form is here</Heading>
                    <Text>{message}</Text>
                    <Hr/>
                    <Text>The sender's email is {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}

export default ContactFormEmail