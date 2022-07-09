import React from 'react'
import '../App.css';

import { ButtonGroup, Button } from '@mui/material';


export const Header = () => { 
    return (


        <div className="App" >
            <ButtonGroup className="Comp" size="large" variant="contained" aria-label="outlined button group" >
                <a href="./pages/home"><Button>About me</Button></a>
                <Button>Videos</Button>
                <Button>Blog</Button>
            </ButtonGroup>
        </div>

    )
}