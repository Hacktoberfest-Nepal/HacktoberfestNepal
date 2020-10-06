import React from 'react'

const TeamCard = (props) => {


    const imgStyle = {
        borderRadius: "50%",
        height: "250px",
        width: "250px",
        boxFit: "contain"
    }

    return (
        <div className="ml-3 mt-3">

            <img src={require(`../../assets/images/team/${props.image}`)} style={imgStyle} />
            <br />
            <center><p className="mt-3">{props.name}</p></center>
        </div>
    )
}

export default TeamCard
