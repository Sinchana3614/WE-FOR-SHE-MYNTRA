import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import "./promocode.css"

export const Promocode=()=>{


    return (
        <div id="promocodes" style={{border:"1px solid lightgrey"}}>
            
            <div style={{padding: "2%"}}>QUIZ AND GAMES</div>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <p><LocalOfferOutlinedIcon/></p>
            <p>PLAY GAME AND QUIZ TO GET OFFER OF 5% ABOVE ORDER Rs.999</p>
            <p><button id="myBtn" style={{paddingLeft: "10px"}}>PLAY</button></p>
            </div>

        </div>
        
    
    )
}