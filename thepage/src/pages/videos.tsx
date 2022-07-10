import React from 'react';
import '../App.css';
import { Card, Row } from 'react-bootstrap';




const VideoFramesList = [

    {
        url: "https://www.youtube.com/embed/VfMcCPPilaM",
        title: "This F*cking Guy.",
    },
    {
        url: "https://www.youtube.com/embed/Ap92rhiT5OE",
        title: "Barcelona City Gambling",

    },
    {
        url: "https://www.youtube.com/embed/2eCHLZ1stew",
        title: "The Spanish Connection",
    },
    {
        url: "https://www.youtube.com/embed/DKrHDnAc1-8",
        title: "A Quarter Pounder Without Cheese.",
    },
    {
        url: "https://www.youtube.com/embed/9lyizJiC7u0",
        title: "Re Run",
    },
    {
        url: "https://www.youtube.com/embed/Jh4FIPdw8fw",
        title: "Another Record Broken",
    },
    {
        url: "https://www.youtube.com/embed/ruOjmmnBabc",
        title: "Raw Cut Medium Rare",
    },
    {
        url: "https://www.youtube.com/embed/gfuxgBuPko0",
        title: "Poker Roadtrip brings the Biggest Pot (so far)",
    },
    {
        url: "https://www.youtube.com/embed/ZEksmlYUWzg",
        title: "Grinding Salt",
    },
    {
        url: "https://www.youtube.com/embed/r1pOzHpWhJ8",
        title: "Grinding It Up There",
    },
    {
        url: "https://www.youtube.com/embed/IpwP_ZOqt58",
        title: "Instinct, Hard Work and Dumb Luck",
    },
    {
        url: "https://www.youtube.com/embed/sMcVSJSPduo",
        title: "First Video",
    },
]


function Videos() {
    return (
        <>
            <style type="text/css">
                {`

        .VideoCard {
            
            background-color: #ebebed;
            color: black;
            outline:black;
            border-radius:8px;
            padding:1rem;
            margin:1rem; 
            height:40vh;
            width:40vw;
            transition:height 1s;
            
            transition: all 1s ease-out;
            -webkit-transition: all 1s ease-out;
            -moz-transition: all 1s ease-out;
            -o-transition: all 1s ease-out;
           
        }

        .VideoCard:hover{
            background-color:#cdcccf;
            height: 60vh;
            transition:1s;  

           
        }

        .container{
            justify-content:center;
            display:flex;
            flex-wrap:wrap;
            width:100vw;
        }
        
        `}
            </style>
            
            <div className='container'>
                {
                    
                    VideoFramesList.map(video =>
                        <Card className="VideoCard">
                            <iframe width="100%" height="100%" src={video.url} frameBorder="0" allowFullScreen></iframe>
                            <hr />
                            {video.title}
                        </Card>
                    )
                   
                    }
            </div>
        </>
    );
}

export default Videos;
