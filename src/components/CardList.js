import React from 'react';
import Card from './Card';


function func(user,i){
     return <Card key={i} id={user.id} name={user.name} email={user.email}/>;
}


const CardList=({robots})=>{
    
    const cardComponent=robots.map(func);
        
    
    return(
        <div>
            {cardComponent}
        </div>
    );
} 
export default CardList;