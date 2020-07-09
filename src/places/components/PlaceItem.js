import React, {useState} from 'react';
import Button from '../../shared/FormElements/Button';
import Model from '../../shared/components/UIElements/Model';
import './PlaceItem.css';
import Map from '../../shared/components/UIElements/Map';
import Card from '../../shared/components/UIElements/Card';

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  function openMapHandle() {
    setShowMap(true);
  }
  function closeMapHandle() {
    setShowMap(false);
  }
  return (
    <React.Fragment>
      <Model
        show={showMap}
        onCancel={closeMapHandle}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__model-actions"
        footer={<Button onClick={closeMapHandle}>Close</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Model>

      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2> {props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button onClick={openMapHandle} inverse>
              View On Map
            </Button>
           
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};
export default PlaceItem;
