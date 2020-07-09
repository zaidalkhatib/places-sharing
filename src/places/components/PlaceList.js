import React from 'react';
import './PlaceList.css';
import PlaceItem from './PlaceItem';
import Card from '../../shared/components/UIElements/Card';

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list-center">
        <Card>
          <h1>No places found, Add one?</h1>
          <button>Share A Place!</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map((m) => {
        return (
          <PlaceItem
            key={m.id}
            id={m.id}
            image={m.image}
            title={m.title}
            description={m.description}
            image={m.image}
            address={m.address}
            createrId={m.id}
            coordinates={m.location}
          />
        );
      })}
    </ul>
  );
};

export default PlaceList;
