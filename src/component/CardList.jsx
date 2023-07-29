import React from 'react';
import Card from './Card';

const CardsList = ({anime}) => {
    console.log(anime);
    return (
        <div className="card-group">
          {
              anime.map((item, index) => <Card key={index} info={item}/>)
          }
        </div>
    );
}

export default CardsList;