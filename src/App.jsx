import React, { useState } from "react";
import Plot from "react-plotly.js";

const App = () => {
  const scatterData = [
    { id: 1, x: 1, y: 2 },
    { id: 2, x: 2, y: 3 },
    { id: 3, x: 3, y: 4 },
    { id: 4, x: 4, y: 5 },
  ];

  const lineData = [
    { id: 1, x: 1, y: 2 },
    { id: 2, x: 2, y: 3 },
    { id: 3, x: 3, y: 4 },
    { id: 4, x: 4, y: 5 },
  ];

  const [highlightId, setHighlightId] = useState(null);

  const handleClick = (id) => {
    setHighlightId(id === highlightId ? null : id);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", margin: "20px" }}>
      {/* Scatter Plot */}
      <Plot
        data={[
          {
            x: scatterData.map((d) => d.x),
            y: scatterData.map((d) => d.y),
            mode: "markers",
            type: "scatter",
            marker: {
              color: scatterData.map((d) =>
                d.id === highlightId ? "red" : "blue"
              ),
              size: 10,
            },
          },
        ]}
        layout={{
          title: "Scatter Plot",
          clickmode: "event+select",
        }}
        onClick={(event) => {
          const id = scatterData[event.points[0].pointIndex]?.id;
          handleClick(id);
        }}
      />

      {/* Line Graph */}
      <Plot
        data={[
          {
            x: lineData.map((d) => d.x),
            y: lineData.map((d) => d.y),
            mode: "lines+markers",
            type: "scatter",
            marker: {
              color: lineData.map((d) =>
                d.id === highlightId ? "red" : "green"
              ),
              size: 8,
            },
            line: {
              color: "green",
            },
          },
        ]}
        layout={{
          title: "Line Graph",
          clickmode: "event+select",
        }}
        onClick={(event) => {
          const id = lineData[event.points[0].pointIndex]?.id;
          handleClick(id);
        }}
      />
    </div>
  );
};

export default App;
