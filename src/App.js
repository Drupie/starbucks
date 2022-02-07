import Card from './components/Card'; 
import Header from './components/Header';
import Nav from './components/Nav';
import ReactDOM from 'react-dom';
import Container from './components/Container';
import './css/index.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
const container = document.getElementById("root");
function App(){
    
    const style_container={
        width:"100%",
        display:"flex",
        justifyContent:"space-around",
        marginTop:"10px",
        flexWrap: "wrap"
    }
    return (
        
        <BrowserRouter>
<Header
        title="STARBUCKS" 
        image="http://assets.stickpng.com/images/58428cc1a6515b1e0ad75ab1.png"  
/>
<Nav 
        item1="Home"
        item2="Services"
        item3="About"
        item4="Contact"

/>

<div style={style_container}>
<Card
    image="https://www.craftedforhome.com/img/product_lineup_coldbrew2.png"
    title="COLD BREW"
    description="Cold brewing is a method of brewing that combines ground coffee "
    text="The resulting Cold Brew coffee concentrate is used to make "
    nameItem="View More"
/>
<Card
    image="http://images.summitmedia-digital.com/spotph/images/2018/03/20/starbuckstop640.jpg"
    title="FILIPINOS"
    description="Cold brewing is a method of brewing that combines ground coffee "
    text="The resulting Cold Brew coffee concentrate is used to make "
    nameItem="View More"
/>
<Card
    image="https://media.glamour.com/photos/6181addb13314e1a6f50a77e/master/w_2560%2Cc_limit/Screen%2520Shot%25202021-11-02%2520at%25205.29.43%2520PM.png"
    title="HOLLIDAY DRINKS"
    description="Cold brewing is a method of brewing that combines ground coffee "
    text="The resulting Cold Brew coffee concentrate is used to make "
    nameItem="View More"
/>
<Card
    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sbx20191105-starbucks-holiday-2019-1601586856.jpg"
    title="HOLLIDAY DRINKS"
    description="Cold brewing is a method of brewing that combines ground coffee "
    text="The resulting Cold Brew coffee concentrate is used to make "
    nameItem="View More"
/>
<Card
    image="https://www.optionstheedge.com/sites/default/files/field/featured-image/2019/starbucks_at_home.jpg"
    title="HOLLIDAY DRINKS"
    description="Cold brewing is a method of brewing that combines ground coffee "
    text="The resulting Cold Brew coffee concentrate is used to make "
    nameItem="View More"
/>
<Card
    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vanilla-sweet-cream-cold-brew-3-1-1614908146.jpg?crop=0.876xw:0.658xh;0.124xw,0.342xh&resize=1200:*"
    title="HOLLIDAY DRINKS"
    description="Cold brewing is a method of brewing that combines ground coffee "
    text="The resulting Cold Brew coffee concentrate is used to make "
    nameItem="View More"
/>
<Card
    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vanilla-sweet-cream-cold-brew-3-1-1614908146.jpg?crop=0.876xw:0.658xh;0.124xw,0.342xh&resize=1200:*"
    title="HOLLIDAY DRINKS"
    description="Cold brewing is a method of brewing that combines ground coffee "
    text="The resulting Cold Brew coffee concentrate is used to make "
    nameItem="View More"
/>
<Card
    image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vanilla-sweet-cream-cold-brew-3-1-1614908146.jpg?crop=0.876xw:0.658xh;0.124xw,0.342xh&resize=1200:*"
    title="HOLLIDAY DRINKS"
    description="Cold brewing is a method of brewing that combines ground coffee "
    text="The resulting Cold Brew coffee concentrate is used to make "
    nameItem="View More"
/>
<Card
    image="https://media.glamour.com/photos/6181addb13314e1a6f50a77e/master/w_2560%2Cc_limit/Screen%2520Shot%25202021-11-02%2520at%25205.29.43%2520PM.png"
    title="HOLLIDAY DRINKS"
    description="Cold brewing is a method of brewing that combines ground coffee "
    text="The resulting Cold Brew coffee concentrate is used to make "
    nameItem="View More"
/>
</div>


        </BrowserRouter> 
    )
}
export default App;