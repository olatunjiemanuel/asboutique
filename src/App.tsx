import React, { useState } from "react";
import "./App.css";
import Header from "../components/Header";
import FormComponent from "./UI/FormComponent/index";
import WhyShopWithUs from "../components/WhyShopWithUs";
import emailjs from "@emailjs/browser";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sending email");
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID as string,
      process.env.REACT_APP_TEMPLATE_ID as string,
      e.target as HTMLFormElement,
      process.env.REACT_APP_PUBLIC_KEY
    );
  };

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
            onSubmit={sendEmail}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
