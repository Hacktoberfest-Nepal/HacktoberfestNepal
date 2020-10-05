import React from "react";

import { CgCodeClimate } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
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
    title: "Pull Requests",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsa accusantium laboriosam deserunt ipsum autem maxime eaque laborum maiores nam.",
  },
];

const CardHolderComponent = () => {
  return (
    <div className="pb-5 row container-fluid mx-auto my-5">
      {cardDatas.map((cardData, index) => {
        return <CardComponent key={index} data={cardData} />;
      })}
    </div>
  );
};

export default CardHolderComponent;
