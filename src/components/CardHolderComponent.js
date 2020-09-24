import React from "react";

import { CgCodeClimate } from "react-icons/cg";
import { MdDashboard, MdDescription } from "react-icons/md";
import { SiSwagger } from "react-icons/si";
import CardComponent from "./CardComponent";

const cardDatas = [
  {
    featureIcon: CgCodeClimate,
    title: "Participation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsa accusantium laboriosam deserunt ipsum autem maxime eaque laborum maiores nam.",
  },
  {
    featureIcon: MdDashboard,
    title: "Contribution",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsa accusantium laboriosam deserunt ipsum autem maxime eaque laborum maiores nam.",
  },
  {
    featureIcon: SiSwagger,
    title: "Contribution",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsa accusantium laboriosam deserunt ipsum autem maxime eaque laborum maiores nam.",
  },
];

const CardHolderComponent = () => {
  return (
    <div className="py-5 row container-fluid mx-auto">
      {cardDatas.map((cardData, index) => {
        return <CardComponent key={index} data={cardData} />;
      })}
      {/* <h1>CardHolderComponent</h1> */}
    </div>
  );
};

export default CardHolderComponent;
