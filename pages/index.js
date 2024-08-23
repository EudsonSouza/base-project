import React from "react";

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },

  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚧 Under Construction 🚧</h1>
    </div>
  );
};

export default Home;
