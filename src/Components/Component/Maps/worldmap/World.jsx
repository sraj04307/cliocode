import React, { useEffect } from "react";
import "jsvectormap/dist/jsvectormap.css";
import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/maps/world.js";
import "./World.css";

const WorldMap = () => {
  useEffect(() => {
    // Define coordinates for selected countries
    const countryCoordinates = {
      Australia: [-25.2744, 133.7751],
      Philippines: [12.8797, 121.7740],
      India: [20.5937, 78.9629],
      Dubai: [25.276987, 55.296249],
      Africa: [1.6500, 10.2676], // Center point of Africa
      UK: [55.3781, -3.4360],
      USA: [37.0902, -95.7129],
      Canada: [56.1304, -106.3468],
    };

    // Function to create a curved path between two points
    // const createCurvedPath = (fromCoords, toCoords) => {
    //   const [fromLat, fromLng] = fromCoords;
    //   const [toLat, toLng] = toCoords;
    //   const midLat = (fromLat + toLat) / 2;
    //   const midLng = (fromLng + toLng) / 2;
    //   const controlPointLat = midLat + 5; // Adjust this value to control curve height
    //   const controlPointLng = midLng + 5; // Adjust this value to control curve width

    //   return `M ${fromLng} ${fromLat} Q ${controlPointLng} ${controlPointLat} ${toLng} ${toLat}`;
    // };

    // Generate lines from Africa to every other country and specific lines with curve
    // const lines = [];
    // const countryNames = Object.keys(countryCoordinates);

    // for (let i = 0; i < countryNames.length; i++) {
    //   if (countryNames[i] !== "Africa") {
    //     lines.push({
    //       from: "Africa",
    //       to: countryNames[i],
    //       style: {
    //         stroke: "#002c89",
    //         strokeWidth: 1.5,
    //         strokeDasharray: '6 2 6',
    //         fill: 'none',
    //         path: createCurvedPath(countryCoordinates["Africa"], countryCoordinates[countryNames[i]])
    //       },
    //     });
    //   }
    // }

    // Add specific curved lines between countries
    // lines.push(
    //   {
    //     from: "USA",
    //     to: "Canada",
    //     style: {
    //       stroke: "#002c89",
    //       strokeWidth: 1.5,
    //       strokeDasharray: '6 2 6',
    //       fill: 'none',
    //       path: createCurvedPath(countryCoordinates["USA"], countryCoordinates["Canada"])
    //     },
    //   },
    //   {
    //     from: "UK",
    //     to: "Canada",
    //     style: {
    //       stroke: "#002c89",
    //       strokeWidth: 1.5,
    //       strokeDasharray: '6 2 6',
    //       fill: 'none',
    //       path: createCurvedPath(countryCoordinates["UK"], countryCoordinates["Canada"])
    //     },
    //   },
    //   {
    //     from: "UK",
    //     to: "Dubai",
    //     style: {
    //       stroke: "#002c89",
    //       strokeWidth: 1.5,
    //       strokeDasharray: '6 2 6',
    //       fill: 'none',
    //       path: createCurvedPath(countryCoordinates["UK"], countryCoordinates["Dubai"])
    //     },
    //   },
    //   {
    //     from: "Dubai",
    //     to: "India",
    //     style: {
    //       stroke: "#002c89",
    //       strokeWidth: 1.5,
    //       strokeDasharray: '6 2 6',
    //       fill: 'none',
    //       path: createCurvedPath(countryCoordinates["Dubai"], countryCoordinates["India"])
    //     },
    //   },
    //   {
    //     from: "India",
    //     to: "Philippines",
    //     style: {
    //       stroke: "#002c89",
    //       strokeWidth: 1.5,
    //       strokeDasharray: '6 2 6',
    //       fill: 'none',
    //       path: createCurvedPath(countryCoordinates["India"], countryCoordinates["Philippines"])
    //     },
    //   },
    //   {
    //     from: "Philippines",
    //     to: "Australia",
    //     style: {
    //       stroke: "#002c89",
    //       strokeWidth: 1.5,
    //       strokeDasharray: '6 2 6',
    //       fill: 'none',
    //       path: createCurvedPath(countryCoordinates["Philippines"], countryCoordinates["Australia"])
    //     },
    //   }
    // );

    // Initialize the map
    const map = new jsVectorMap({
      selector: "#map",
      map: "world",
      markers: Object.entries(countryCoordinates).map(([name, coords]) => ({
        name,
        coords,
        style: {
          initial: {
            fill: "#002c89",
            text: name,
            textStyle: {
              fontSize: '12px',
              fontWeight: 'bold',
              fill: '#000000',
            },
          },
        },
      })),
      // lines,
      // lineStyle: {
      //   stroke: "#002c89",
      //   strokeWidth: 1.5,
      //   fill: '#002c89',
      //   fillOpacity: 1,
      //   strokeDasharray: '6 2 6',
      //   animation: true,
      // },
    });

    return () => {
      map.destroy();
    };
  }, []);

  return (
    <section className="section-padding world-section">
      <div className="container">
        <div>
          <h2>Our Footprints</h2>
          <div id="map"></div>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
