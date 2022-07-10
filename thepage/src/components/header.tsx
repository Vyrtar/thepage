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

                    .Link{
                        margin:1rem;
                        text-decoration:none;
                        color: black;
                        margin:1rem;
                    }
                    `}
                </style>

            
            <ButtonGroup className="mb-3">
                <Button variant="header"><Link className='Link' to='/Home'>Home</Link></Button>
                <Button variant="header"><Link className='Link' to='/Blogs'>Blogs</Link></Button>
                <Button variant="header"><Link className='Link' to='/Videos'>Videos</Link></Button>
            </ButtonGroup>
            </>
        </>
    )
} 