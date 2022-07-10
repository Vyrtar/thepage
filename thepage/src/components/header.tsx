import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";



export const Header = () => {
    return (
        <>
            <>
                <style type="text/css">
                    {`

                    .btn-header {
                        background-color: #ebebed;
                        color: black;
                        outline:black;
                        border-radius:10px;
                    }

                    .btn-header:hover{
                        background-color: #cdcccf;
                    }
                    `}
                </style>

            
            <ButtonGroup className="mb-3">
                <Button href='/home' variant="header">Home</Button>
                <Button href='/Blogs' variant="header">Blogs</Button>
                <Button href='/Videos' variant="header">Videos</Button>
            </ButtonGroup>
            </>
        </>
    )
} 