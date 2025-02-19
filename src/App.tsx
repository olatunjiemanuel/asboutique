import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import FormComponent from "./UI/FormComponent/index";
import WhyShopWithUs from "./components/WhyShopWithUs";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");
  return (
    <div className="mainCtnr">
      <Header />
      <div>
        <div>
          <WhyShopWithUs />
        </div>
        <div className="contactUsCntnr">
          <p className="getInTouchStyles">Let's Get in Touch!</p>
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
