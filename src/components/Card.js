import React,{Component} from "react"

function Card (props){
    const card_styles={
        
        background:`${props.background}`,
        width:"200px",
        height:"400px"
         };

    const figure_styles={
        width:"100%",
        height:"320px",
        display:"flex",
        justifyContent:"center",
        marginBottom:"10px"
    }
    const image_styles={
        width:"100%",
        height:"100%",
        display:"block"
    }
    const description_style={
        width:"100%",
        height:"200px",
        
    }

    //modify color
const titleBg='#a5b1c2';
    const title_description={
        background:`${titleBg}`,

    }
    const subtitleBg='#778ca3';
    const subtitle_description={
        background:`${subtitleBg}` ,
        marginTop:"10px",
        marginBottom:"10px"
    }
        
    const abstractBg='#d1d8e0';
    const abstract={
        background:`${abstractBg}`,
        width:"100%",
    }

    const btnBg="#20bf6b";
    const btnColor='#fafafa';
    const btn_styles={
        background:`${btnBg}`,
        width:"200px",
        display:"block",
        color:`${btnColor}`,
        textAlign:"center",
        padding:"10px",
        marginTop:"10px", 
        borderRadius:"10px",
        textDecoration:"none"
    }
    return(
    
         <div className="card"  style={card_styles}>
         <figure style={figure_styles}>
             <img src={props.image} style={figure_styles}/>
         </figure>
         <div className="description">
        <h1 style={title_description} >{props.title}</h1>
        <h2 style={subtitle_description}>{props.description}</h2>

         </div>
         <div className="abstract" style={ abstract}>
        <p>{props.text}</p>
         </div>
         <div >
             <a href="" style={btn_styles}>{props.nameItem}</a>
         </div>
     </div>
   
    )
}
export default Card;
///`${props.bg}`