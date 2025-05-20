import React from "react";

export default function Offers() {
  const offers = [
    { id: 1, title: "50% off on Electronics", desc: "Hurry up! Limited stock available." },
    { id: 2, title: "Buy 1 Get 1 Free", desc: "On select fashion brands." },
    { id: 3, title: "Up to 70% off", desc: "On clearance sale items." }
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Special Offers</h2>
      <div className="row">
        {offers.map((offer) => (
          <div key={offer.id} className="col-md-4">
            <div className="card text-center bg-info p-3 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{offer.title}</h5>
                <p className="card-text">{offer.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

