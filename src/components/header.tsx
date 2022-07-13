import React from 'react'
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <Link className="m-1" to='/Home'><Button variant="header">Home</Button></Link>
                <Link className="m-1" to='/Blogs'><Button variant="header">Blogs</Button></Link>
                <Link className="m-1" to='/Fotos'><Button variant="header">Fotos</Button></Link>
                <Link className="m-1" to='/Videos'><Button variant="header">Videos</Button></Link>
            </ButtonGroup>
            </>
        </>
    )
} 