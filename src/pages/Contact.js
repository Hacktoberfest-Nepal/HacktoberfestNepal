import React, { useEffect } from "react";
import ContactComp from "../components/ContactComponent";
import BreadCrumb from "../components/BreadCrumb";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact"
  }, []);
  return (
    <div>
      <BreadCrumb image="contact.png" title="Contact" description="Feel Free to Contact us" />
      <ContactComp />
    </div>
  );
};

export default Contact;
