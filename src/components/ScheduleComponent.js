import React from "react";
import "../assets/css/ScheduleComponent.css";
import hacktoberLogo from "../assets/images/hacktoberLogo.jpg";
import gitGithub from "../assets/images/gitGithub.png";
import openSource from "../assets/images/openSource.png";
import publicSpeaker from "../assets/images/publicSpeaker.png";
import gameLogo from "../assets/images/gameLogo.jpg";
import workshop from "../assets/images/workshop.png";

const scheduleDetails = [
  {
    id: 0,
    title: "Welcome",
    timeSchedule: "11:00",
    featureImage: hacktoberLogo,
  },
  {
    id: 1,
    title: "Introduction to Open Source and Hacktoberfest",
    timeSchedule: "11:15",
    featureImage: hacktoberLogo,
  },
  {
    id: 3,
    title: "Demonstration of Nepali Opensource projects",
    timeSchedule: "11:45",
    featureImage: openSource,
  },
  {
    id: 4,
    title: "Workshop on Git and Github",
    timeSchedule: "12:15",
    featureImage: gitGithub,
  },
  {
    id: 5,
    title: "Guest Speakers Talk",
    timeSchedule: "01:00",
    featureImage: publicSpeaker,
  },
  {
    id: 6,
    title: "Icebreaker game",
    timeSchedule: "03:15",
    featureImage: gameLogo,
  },
  {
    id: 7,
    title: "Demo and Workshop",
    timeSchedule: "03:30",
    featureImage: workshop,
  },
  {
    id: 8,
    title: "Wrap Up",
    timeSchedule: "04:45",
    featureImage: hacktoberLogo,
  },
];

const ScheduleItem = ({ detail }) => {
  return (
    <div className="schedule-item-wrapper p-4 my-3 shadow rounded">
      <div className="row">
        <div className="col-3 align-self-center">
          <h3 className="font-weight-bold text-center styled-text-pink">
            {detail.timeSchedule}
          </h3>
        </div>
        <div className="col-6 align-self-center">
          <h3>{detail.title}</h3>
        </div>
        <div className="col-3 align-self-center">
          <img
            className="rounded-circle feature-image"
            src={detail.featureImage}
            alt="HacktoberLogo"
          />
        </div>
      </div>
    </div>
  );
};

const ScheduleComponent = () => {
  return (
    <div className="container">
      <h1 className="schedule-component-header text-masked text-uppercase">
        Schedule
      </h1>
      <div className="row">
        <div className="col-2">
          <div className="bar w-100"></div>
        </div>
        <div className="col-10 col-md-6">
          <h3 className="text-capitalize font-weight-bold">
            topic discussion and Timeline
          </h3>

          <p className="schedule-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            est commodi temporibus accusamus maxime aliquid ipsam quam earum
            cumque soluta!
          </p>
        </div>
      </div>
      <div className="schedule-content">
        <div>
          <div className="row">
            <div className="col-12 col-md-6 text-center timeline-header">
              <h2 className="font-weight-bold">Event Day</h2>
              <p className="event-timestamp styled-text-pink font-weight-bold">
                October 10, 2020, [11:00AM - 5:00PM]
              </p>
            </div>
          </div>
          {scheduleDetails.map(detail => (
            <ScheduleItem key={detail.id} detail={detail} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleComponent;
