import React from "react";
import Speaker from "../speakers/SingleSpeaker";

const SpeakerList = () => {
  return (
    <div className="container mb-5">
      <div className="speaker-list">
        <Speaker
          name="Ashish Yadav"
          image="ayadav.jpg"
          title="Full stack Developer at Whitehat Agency"
          topic="Importance of Open Source"
          time="11:30 am -11:40 am"
          description="Co-founder of Ask Buddie & a full Stack engineer with passion of writing open source meaningful projects. Currently, leading one of the most active community of Nepal as well as encouraging people to contribute on open source programs"
        />

        <Speaker
          name="Binod Jung Bogati"
          image="bjung.jpg"
          title="Data Scientist at Numeric Mind"
          topic="Getting started with Git and Github"
          time="12:00pm to 12:45pm"
          description="Binod is data science and open source enthusiast currently working in Numeric Mind. He is the only Github Campus Expert from Nepal. Currently, he is also co-founder of DataSansar and community leader of R User Group Nepal"
        />

        <Speaker
          name="Binit Ghimire"
          image="bghimire.jpg"
          title="AWS Application Engineer at Genese"
          topic="Getting started with CTF 101"
          time="12:45 pm -1:15pm"
          description="A Full-Stack Web Developer, Web/Network Penetration Testor and Community Administrator at Ask Buddie who loves particiapting in different CTF competitions, and solving challenges related with Web Exploitation, Cryptography, Digital Forencis, Networking and Intillegence Gathering. "
        />

        <Speaker
          name="Yankee Maharjan"
          image="ymaharjan.jpg"
          title="Software Engineer at LeapFrog"
          topic="Open Source Etiquettes"
          time="1:25pm to 2:00pm"
          description="Yankee is an Open Source enthusiast working at Leapfrog. He works with Cloud Native Technologies for management of Backend services and Machine Learning services. He has also done a magnificient effort in open source community. He is also one of the core members driving KTMJS and Golang Nepal."
        />

        <Speaker
          name="Sajeetharan Sinnathurai"
          image="ssinnathurai.jpg"
          title="Cloud Solution Architect at Microsoft"
          topic="Microsoft and Open Source"
          time="2:00 pm - 2:30 pm"
          description="9+ Years of experience in the ICT industry, Sajeetharan Sinnathurai is a Cloud Solution Architect currently working at Microsoft as Cloud Solution Architect. His skill in Web Application Architecture, Cloud and more has seen him become a Mirosoft MVP in Developer Technologies, Google Developer Expert in Web Technology."
        />

        <Speaker
          name="Saroj Dahal"
          image="sdahal.jpg"
          title="Freelancer"
          topic="RoadMap To Web Dev"
          time="2:35 pm - 3:05 pm"
          description="Saroj was a former Java Developer at Infinite Tech Solutions Pvt. Ltd with 8+ years of engagements in programming. He works with various web technologies, currently working as freelancer on web security and cloud technologies. He is also a popular YouTube Content Creator at Everyday Karma"
        />

        <Speaker
          name="Manish Bhattarai"
          title="Microsoft Learn Ambassador"
          image="mbhattarai.jpg"
          topic="Git using Gitraken"
          time="3:15pm - 3:30 pm"
          description="A technology nerd Mircosoft Learn Student Ambassador and GitKraken Ambassador who is an enthusisat programmer who loves to solve real-life problems with the help of programming having done many projects like Relief Materials Management System, Tax Paying App and Library Management System"
        />

        <Speaker
          name="Rashika Karki"
          title="Summer 2020 MLH Fellow"
          image="rashika.jpg"
          topic="Journey to Opensource"
          time="3:30pm - 4:00 pm"
          description="Rashika is a prefinal year undergraduate student at Kathmandu University and Summer 2020 MLH Fellow.  She is passionate about coding and building tech-driven solutions and her interest is highly concentrated in the Data Science and Machine Learning domain. She also enjoys spending her time engaging herself in various tech-communities and is actively involved in various tof them such as Nepali Women in Computing, Code for Asia and Microsoft Student Ambassador Program."
        />

        {/* <Speaker name="Rashika Karki" title=" Journey to MLH fellow" topic="Getting started with CTF 101" time="11:30 am -11:40 am" description=" A quick brown fox jumps over the lazy dog" /> */}
      </div>
    </div>
  );
};

export default SpeakerList;
