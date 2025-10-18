import React from "react";
import events from "./upcoming-events.json";
import PageBoard from "./components/PageBoard";
import "./App.css"; 

function App() {
  return (
    <div className="app">
      <PageBoard events={events} title="24th Core Worlds Coalition Conference" />
    </div>
  );
}

export default App;