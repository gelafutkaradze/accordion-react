import React from "react";
import img from "./img.svg";
import { Accordion } from "./accordion";

const informations = [
  { title: "How many team members can i invite?", description: "9683" },
  { title: "What is the maximum file upload size?", description: "35878-GB" },
  { title: "How do i reset my password", description: "I don,t know" },
  { title: "Can i cancel my subscription?", description: "Yes" },
  {
    title: "Do you provide additional supports?",
    description: "yes of course",
  },
];

export const App = () => {
  return (
    <>
      <div className="container">
        <div className="child-container">
          <div className="left-parent">
            <img className="img" src={img} alt="Description of the image" />
          </div>
          <div className="right-child">
            <h1 className="faq" style={{ paddingBottom: "30px" }}>
              FAQ
            </h1>
            {informations.map((info) => (
              <Accordion
                key={info.title}
                description={info.description}
                title={info.title}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
