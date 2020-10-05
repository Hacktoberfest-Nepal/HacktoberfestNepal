import React from 'react'
import "../../assets/css/Speakers.css";


const SingleSpeaker = (props) => {
    return (
        <div className="row speaker ml-3" data-aos="fade-up" data-aos-duration="1500">

            <div className="col-lg-4">
                <img src={require(`../../assets/images/speakers/${props.image}`)} className="img-thumbnail" alt="" style={{ height: "250px", objectFit: "contain" }} />
                <h5 className="text-bold text-center mt-3">{props.name}</h5>
                <h6 className="text-muted text-center">{props.title}</h6>
            </div>

            <div class="col-lg-8">
                <h5>Topic : {props.topic}</h5>
                <h5>Time : {props.time}</h5><br />
                <h5>About {props.name} : </h5>
                <small class="text-muted">
                    {props.description}
                </small>
            </div>
        </div>
    )
}

export default SingleSpeaker;
