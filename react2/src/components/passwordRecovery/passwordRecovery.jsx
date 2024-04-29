import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export function PasswordRecovery() {

    const [ email , setEmail] = useState("")
    const sendMail = async (e) => {
        e.preventDefault();
    
        try {
            const res = await fetch("http://localhost:5001/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
    
            if (!res.ok) {
                throw new Error('Failed to send email');
            }
    
            // Handle the response data here if needed
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error('Error sending email:', error.message);
        }
    }
    

 
    console.log(email)
    return (
        <div className=''>
            <div className='container mt-4'>
                <div className='d-flex justify-content-center'>
                    <h3>Enter your Registered Email</h3>
                    
                </div>
            
                    <div className='d-flex justify-content-center'>
                        <Form onSubmit={sendMail}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name='email' placeholder="Enter email"
                                onChange={(e)=>setEmail(e.target.value)} />
                                <Form.Text className="text-muted">
                                </Form.Text>
                            </Form.Group>

                          
                            <Button variant="success" type="submit" >
                                Submit
                            </Button>
                        </Form>
                    </div>

            </div>
        </div>
    );
}
