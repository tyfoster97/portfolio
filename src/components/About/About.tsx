import React from "react";
import { AccordionList, PageWrapper } from "../utils";
import ABOUT from "./data";

const About = () => {
  return (
    <PageWrapper>
      <AccordionList items={ABOUT}/>
    </PageWrapper>
  );
};

export default About;
