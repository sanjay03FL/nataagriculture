import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const LocationMap = () => {
  const places = [
    {
      name: "Bangalore",
      latitude: 12.9716,
      longitude: 77.5946,
      color: "red",
    },
    {
      name: "Mysore",
      latitude: 12.2958,
      longitude: 76.6394,
      color: "blue",
    },
    {
      name: "Hampi",
      latitude: 15.335,
      longitude: 76.46,
      color: "green",
    },
    {
      name: "Coorg",
      latitude: 12.3375,
      longitude: 75.8067,
      color: "orange",
    },
    {
      name: "Ooty",
      latitude: 11.4064,
      longitude: 76.6932,
      color: "purple",
    },
    {
      name: "Goa",
      latitude: 15.2993,
      longitude: 74.124,
      color: "pink",
    },
    {
      name: "Mumbai",
      latitude: 19.076,
      longitude: 72.8777,
      color: "red",
    },
    {
      name: "Delhi",
      latitude: 28.6139,
      longitude: 77.209,
      color: "blue",
    },
    {
      name: "Bangalore",
      latitude: 12.9716,
      longitude: 77.5946,
      color: "green",
    },
    {
      name: "Chennai",
      latitude: 13.0827,
      longitude: 80.2707,
      color: "orange",
    },
    {
      name: "Kolkata",
      latitude: 22.5726,
      longitude: 88.3639,
      color: "purple",
    },
    {
      name: "Hyderabad",
      latitude: 17.385,
      longitude: 78.4867,
      color: "pink",
    },
  ];

  return (
    <div>
      <MapContainer
        center={[12.5937, 78.9629]}
        zoom={7}
        scrollWheelZoom={false}
        style={{ height: "80vh", outline: "none" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"  />
        {places.map((place, index) => (
          <Marker
            key={index}
            position={[place.latitude, place.longitude]}
            icon={L.divIcon({
              className: "custom-marker",
              html: `<svg xmlns="http://www.w3.org/2000/svg" height="2.25em" viewBox="0 0 384 512" style="fill: ${place.color};"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>`,
              iconSize: [30, 30],
            })}
          >
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocationMap;
