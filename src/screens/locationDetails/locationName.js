import React from "react";
import { Button } from "reactstrap";
import styles from "./styles.module.css";

const LocationName = () => {
  const nameJson = [
    {
      id: 1,
      name: "Agriculture Details",
      subName: "agricultureDetails",
      color: "#008080",
      data: [
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
          color: "red",
        },
        {
          name: "Hyderabad",
          latitude: 17.385,
          longitude: 78.4867,
          color: "yellow",
        },
        {
          name: "Mysore",
          latitude: 12.2958,
          longitude: 76.6394,
          color: "blue",
        },
      ],
    },
    {
      id: 2,
      name: "Horticulture Details",
      subName: "horticultureDetails",
      color: "#0000FF",

      data: [
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
          color: "red",
        },
        {
          name: "Hyderabad",
          latitude: 17.385,
          longitude: 78.4867,
          color: "yellow",
        },
        {
          name: "Mysore",
          latitude: 12.2958,
          longitude: 76.6394,
          color: "blue",
        },
      ],
    },
    {
      id: 3,
      name: "Floriculture Details",
      subName: "floricultureDetails",
      color: "#4B0082",

      data: [
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
          color: "red",
        },
        {
          name: "Hyderabad",
          latitude: 17.385,
          longitude: 78.4867,
          color: "yellow",
        },
        {
          name: "Mysore",
          latitude: 12.2958,
          longitude: 76.6394,
          color: "blue",
        },
      ],
    },
    {
      id: 4,
      name: "Sericulture Details",
      subName: "sericultureDetails",
      color: "#800000",

      data: [
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
          color: "red",
        },
        {
          name: "Hyderabad",
          latitude: 17.385,
          longitude: 78.4867,
          color: "yellow",
        },
        {
          name: "Mysore",
          latitude: 12.2958,
          longitude: 76.6394,
          color: "blue",
        },
      ],
    },
    {
      id: 5,
      name: "Livestock Details",
      subName: "livestockDetails",
      color: "#800080",

      data: [
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
          color: "red",
        },
        {
          name: "Hyderabad",
          latitude: 17.385,
          longitude: 78.4867,
          color: "yellow",
        },
        {
          name: "Mysore",
          latitude: 12.2958,
          longitude: 76.6394,
          color: "blue",
        },
      ],
    },
    {
      id: 6,
      name: "Fisheries Details",
      subName: "fisheriesDetails",
      color: "#FFA500",

      data: [
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
          color: "red",
        },
        {
          name: "Hyderabad",
          latitude: 17.385,
          longitude: 78.4867,
          color: "yellow",
        },
        {
          name: "Mysore",
          latitude: 12.2958,
          longitude: 76.6394,
          color: "blue",
        },
      ],
    },

    {
      id: 7,
      name: "Fiber Details",
      subName: "fiberDetails",
      color: "#A52A2A",
      data: [
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
          color: "red",
        },
        {
          name: "Hyderabad",
          latitude: 17.385,
          longitude: 78.4867,
          color: "yellow",
        },
        {
          name: "Mysore",
          latitude: 12.2958,
          longitude: 76.6394,
          color: "blue",
        },
      ],
    },
    {
      id: 8,
      name: "Service Providers Details",
      subName: "serviceProvidesDetails",
      color: "#808080",
      data: [
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
          color: "red",
        },
        {
          name: "Hyderabad",
          latitude: 17.385,
          longitude: 78.4867,
          color: "yellow",
        },
        {
          name: "Mysore",
          latitude: 12.2958,
          longitude: 76.6394,
          color: "blue",
        },
      ],
    },
    {
      id: 9,
      name: "Farmers Details",
      subName: "farmersDetails",
      color: "#FF0000",

      data: [
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
          color: "red",
        },
        {
          name: "Hyderabad",
          latitude: 17.385,
          longitude: 78.4867,
          color: "yellow",
        },
        {
          name: "Mysore",
          latitude: 12.2958,
          longitude: 76.6394,
          color: "blue",
        },
      ],
    },
  ];

  return (
    <div className={styles.mainContainerLeft}>
      {nameJson?.map((elements, index) => {
        return (
          <Button
            className={`customBtn${index + 1}`}
            key={index}
            style={{
              margin: "0 1rem",
              backgroundColor: elements.color,
              padding: "0.7rem 0.5rem",
              borderRadius: "8px",
            }}
          >
            {elements.name}
          </Button>
        );
      })}
    </div>
  );
};

export default LocationName;
