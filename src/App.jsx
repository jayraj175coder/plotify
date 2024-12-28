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
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Interactive Data Visualization</h1>
        <p>
          Click on points in the scatter plot or lines in the line graph to see them highlighted in both charts.
        </p>
      </header>

      <main style={styles.main}>
        <div style={styles.plotContainer}>
          <h2 style={styles.chartTitle}>Scatter Plot</h2>
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
              title: "",
              clickmode: "event+select",
            }}
            onClick={(event) => {
              const id = scatterData[event.points[0].pointIndex]?.id;
              handleClick(id);
            }}
          />
        </div>

        <div style={styles.plotContainer}>
          <h2 style={styles.chartTitle}>Line Graph</h2>
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
              title: "",
              clickmode: "event+select",
            }}
            onClick={(event) => {
              const id = lineData[event.points[0].pointIndex]?.id;
              handleClick(id);
            }}
          />
        </div>
      </main>

      <footer style={styles.footer}>
        <p>Built with React and Plotly.js | © 2024 Interactive Visualization</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    color: "#333",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "20px 0",
  },
  main: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
    padding: "20px",
  },
  plotContainer: {
    width: "45%",
  },
  chartTitle: {
    marginBottom: "10px",
    color: "#4CAF50",
  },
  footer: {
    marginTop: "20px",
    padding: "10px 0",
    backgroundColor: "#f1f1f1",
  },
};

export default App;
