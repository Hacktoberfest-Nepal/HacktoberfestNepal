import React, { useEffect } from "react";
import ContactComp from "../components/ContactComponent";
import BreadCrumb from "../components/BreadCrumb";
import OrganizingTeam from "../components/contact/OrganizingTeam";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact"
  }, []);
  return (
    <div>
      <BreadCrumb image="contact.png" title="Contact" description="Feel Free to Contact us" />
      <ContactComp />
      <OrganizingTeam />
    </div>
  );
};

export default Contact;
