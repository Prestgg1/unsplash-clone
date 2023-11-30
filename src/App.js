import Course from "./Course";
import searchItems from "./searchItems";
import "./style.css";
import { useState } from "react";
import ImagesList from "./components/imagesList";

function App() {
  const [image, setImage] = useState([]);
  async function handleclick(term){
    const result = await searchItems(term);
    setImage(result);
  }





  return (
    <div className="App flex justify-center items-center flex-col">
      <Course search={handleclick}/>
      <div className="flex w-3/4 flex-wrap gap-4">
      <ImagesList netice={image}/>
      </div>

    </div>
  );
}

export default App;
