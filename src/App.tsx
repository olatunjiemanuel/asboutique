import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TextComponent from "./UI/TextComponent/index";
import FormComponent from "./UI/FormComponent/index";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  return (
    <div className="mainCtnr">
      <Header />
      <div>
        <h1>AS Bouquets</h1>
        <p>
          Flowers & Handmade Goods Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Velit numquam laboriosam adipisci illum amet vero
          porro culpa officiis nesciunt blanditiis?
        </p>
      </div>
      <div>
        <h3>Body</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
          recusandae quam ab amet, dolorum cumque expedita exercitationem nihil
          saepe repellendus dolores doloribus adipisci minus? Eius est quibusdam
          expedita rerum maxime modi, repellendus quaerat voluptatem molestias
          aperiam obcaecati maiores pariatur dolorem, sunt unde earum voluptatum
          quia ducimus ipsa eveniet accusamus! Ut?
        </p>
      </div>
      <div>
        <TextComponent />
      </div>
      <div>
        <h3>Let's Get in Touch !</h3>

        <p>footer</p>
        <div>
          <FormComponent
            name={name}
            email={email}
            inquiry={inquiry}
            onChangeName={(e) => setName(e.target.value)}
            onChangeEmail={(e) => setEmail(e.target.value)}
            onChangeInquiry={(e) => setInquiry(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
