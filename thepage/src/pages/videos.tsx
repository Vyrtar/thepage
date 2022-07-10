import React from 'react';
import '../App.css';
import { Card } from 'react-bootstrap';




const VideoFramesList = [
    
        {
            url:"https://www.youtube.com/embed/VfMcCPPilaM",
            title: "This F*cking Guy.",
            text:"I met Will Kassouf at the King's. Dude is famous for talking mad trash and obviously i couldn't resist..."
        },
        {
            url:"https://www.youtube.com/embed/VfMcCPPilaM",
            title: "This F*cking Guy.",
            text:"video2"
        },
        {
            url:"https://www.youtube.com/embed/VfMcCPPilaM",
            title: "This F*cking Guy.",
            text:"I met Will Kassouf at the King's. Dude is famous for talking mad trash and obviously i couldn't resist..."
        },
        {
            url:"https://www.youtube.com/embed/VfMcCPPilaM",
            title: "This F*cking Guy.",
            text:"I met Will Kassouf at the King's. Dude is famous for talking mad trash and obviously i couldn't resist..."
        },
        {
            url:"https://www.youtube.com/embed/sMcVSJSPduo",
            title: "asd",
            text:"I met Will Kassouf at the King's. Dude is famous for talking mad trash and obviously i couldn't resist..."
        },

//         <iframe width="800" height="450" src="https://www.youtube.com/embed/VfMcCPPilaM" title="This F*cking Guy." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
//         <iframe width="800" height="450" src="https://www.youtube.com/embed/VfMcCPPilaM" title="This F*cking Guy." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
//         <iframe width="800" height="450" src="https://www.youtube.com/embed/VfMcCPPilaM" title="This F*cking Guy." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>,
//         <iframe width="800" height="450" src="https://www.youtube.com/embed/VfMcCPPilaM" title="This F*cking Guy." frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
]
    



function Videos() {
  return (
    <>         
        {
            VideoFramesList.map(video => 
                <Card className="VideoCard">
                    <iframe width="800" height="450" src={video.url} frameBorder="0" allowFullScreen></iframe>
                    <p>{video.text}</p>
                </Card>
        )}
    </>
  );
}

export default Videos;
