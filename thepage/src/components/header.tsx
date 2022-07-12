import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';

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

                    .Link{
                        margin:1rem;
                        text-decoration:none;
                        color: black;
                        margin:1rem;
                    }
                    `}
                </style>

            
            <ButtonGroup className="mb-3">
                <Button href="/thepage/Home" variant="header">Home</Button>
                <Button href="/thepage/Blogs" variant="header">Blogs</Button>
                <Button href="/thepage/Videos" variant="header">Videos</Button>
            </ButtonGroup>
            </>
        </>
    )
} 