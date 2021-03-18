import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";

function App() {
  return (
    <div>
      <Header />
      <Image
        src="https://media.giphy.com/media/pa37AAGzKXoek/giphy.gif"
        alt="Carlton from Fresh Prince in Bel Air is dancing"
      />
    </div>
  );
}

export default App;
