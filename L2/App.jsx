// App.js
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Header title="My React App" />
      <p>Welcome to the homepage!</p>
      <Footer tagline="Built with React" copyright="© 2026 Sanjeet" />
    </div>
  );
}

export default App;
