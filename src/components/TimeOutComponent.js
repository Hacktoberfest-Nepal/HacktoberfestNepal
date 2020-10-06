import React, { useState, useEffect } from "react";
import "../assets/css/TimeOutComponent.css";

const EVENT_DATE = "Oct 10, 2020 10:00:00";

const TimeOutComponent = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isExpired, setIsExpired] = useState(false);

  const updateTime = () => {
    const countDownDate = new Date(EVENT_DATE).getTime();
    const dateTimeTimeout = setInterval(() => {
      var now = new Date().getTime();

      var duration = countDownDate - now;

      var days = Math.floor(duration / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((duration % (1000 * 60)) / 1000);

      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      if (duration < 0) {
        setIsExpired(true);
        clearInterval(dateTimeTimeout);
      }
    });
  };
  useEffect(() => {
    updateTime();

    // console.log("timeout");
  }, []);
  return (

    <div className="container-fluid timeout-outer-wrapper m-0 p-0" >
      <div className="timeout-wrapper d-block d-lg-flex align-items-center justify-content-space-between" style={{ marginTop: "-120px", marginLeft: "40%" }}>
        <div className="timeout-content pl-5 p-lg-auto  col-12 col-lg-4">
          <h1 className="font-weight-normal event-title">
            Event Starts
              <br />
            <span className="font-weight-light">on</span>
          </h1>
        </div>
        <div className="timeout-date-time-wrapper pl-5 p-lg-auto col-12 col-lg-8 pl-4">
          {!isExpired ? (
            <p>
              <span
                className="display-4 font-weight-bold date-time mr-3"
                id="days">
                {days}
              </span>
                Days{" "}
              <span
                className="display-4 font-weight-bold date-time mr-3"
                id="hours">
                {hours}
              </span>
                Hours{" "}
              <span
                className="display-4 font-weight-bold date-time mr-3"
                id="minutes">
                {minutes}
              </span>
                Minutes{" "}
              <span className="display-4 font-weight-bold date-time mr-3">
                {seconds}
              </span>
                Seconds
            </p>
          ) : (
              <p>Event Finished!!</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default TimeOutComponent;
