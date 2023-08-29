import React from 'react';

function CardComponent() {
  return (
    <div className="card-container d-flex justify-content-center">
      <div className="card" style={{ maxWidth: '200px' }}>
        <img
          src="https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/a933e5958e4a354cfb8d22665bd244fd.png"
          alt="Truck"
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text text-center">2000+</p>
        </div>
      </div>
      {/* Repeat the card structure for the other two cards */}
      <div className="card" style={{ maxWidth: '200px' }}>
        <img
          src="https://media.istockphoto.com/id/1041299888/vector/winning-gesture-emoticon.jpg?s=612x612&w=0&k=20&c=bCQEr1efJvY6Kmmmzzox-S0Qteg4QzwAbZ4tCTvcnGs="         
          alt="Emoticon"
          className="card-img-top"
        />
        <div className="card-body">
          <p className="card-text text-center font-weight-bold">10 lac+ Happy people</p>
        </div>
      </div>
      <div className="card" style={{ maxWidth: '200px' }}>
        {/* Card content */}
      </div>
    </div>
  );
}

export default CardComponent;




