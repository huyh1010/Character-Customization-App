import React, { useState } from "react";
import "./App.css";
import Avatar from "./components/Avatar";
import PartLists from "./components/PartLists";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function App() {
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(0);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(3);
  const [eyebrows, setEyeBrows] = useState(0);
  const [hat, setHat] = useState(0);
  const [glasses, setGlasses] = useState(4);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);

  const handleRandomize = () => {
    setBody(Math.floor(Math.random() * total.body));
    setEyes(Math.floor(Math.random() * total.eyes));
    setHair(Math.floor(Math.random() * total.hair));
    setMouth(Math.floor(Math.random() * total.mouth));
    setEyeBrows(Math.floor(Math.random() * total.eyebrows));
    setHat(Math.floor(Math.random() * total.hat));
    setGlasses(Math.floor(Math.random() * total.glasses));
    setClothing1(Math.floor(Math.random() * total.clothing1));
    setClothing2(Math.floor(Math.random() * total.clothing2));
    setClothing3(Math.floor(Math.random() * total.clothing3));
  };

  return (
    <div>
      <div id="title-container">
        <div id="title-1">The</div>
        <div id="title-2">Character</div>
        <div id="title-3">creator</div>
      </div>
      <div id="main-content">
        <div id="character-display-container">
          <Avatar
            body={body}
            eyes={eyes}
            hair={hair}
            mouth={mouth}
            eyebrows={eyebrows}
            hat={hat}
            glasses={glasses}
            clothing1={clothing1}
            clothing2={clothing2}
            clothing3={clothing3}
            handleRandomize={handleRandomize}
          />
        </div>
        <div id="parts-container">
          <div className="parts-display-section">
            <h2 className="parts-title">Body</h2>
            <PartLists total={total.body} title="body" handleClick={setBody} />
          </div>
          <div className="parts-display-section">
            <h2 className="parts-title">Eyes</h2>
            <PartLists total={total.eyes} title="eyes" handleClick={setEyes} />
          </div>
          <div className="parts-display-section">
            <h2 className="parts-title">Hair</h2>
            <PartLists total={total.hair} title="hair" handleClick={setHair} />
          </div>
          <div className="parts-display-section">
            <h2 className="parts-title">Mouth</h2>
            <PartLists
              total={total.mouth}
              title="mouths"
              handleClick={setMouth}
            />
          </div>
          <div className="parts-display-section">
            <h2 className="parts-title">Eyebrows</h2>
            <PartLists
              total={total.eyebrows}
              title="eyebrows"
              handleClick={setEyeBrows}
            />
          </div>
          <div className="parts-display-section">
            <h2 className="parts-title">Hat</h2>
            <PartLists
              total={total.hat}
              title="accessories/hats"
              handleClick={setHat}
            />
          </div>
          <div className="parts-display-section">
            <h2 className="parts-title">Glasses</h2>
            <PartLists
              total={total.glasses}
              title="accessories/glasses"
              handleClick={setGlasses}
            />
          </div>
          <div className="parts-display-section">
            <h2 className="parts-title">Clothing 1</h2>
            <PartLists
              total={total.clothing1}
              title="clothes/layer_1"
              handleClick={setClothing1}
            />
          </div>
          <div className="parts-display-section">
            <h2 className="parts-title">Clothing 2</h2>
            <PartLists
              total={total.clothing2}
              title="clothes/layer_2"
              handleClick={setClothing2}
            />
          </div>
          <div className="parts-display-section">
            <h2 className="parts-title">Clothing 3</h2>
            <PartLists
              total={total.clothing3}
              title="clothes/layer_3"
              handleClick={setClothing3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
