import React from 'react'
import Team from "../contact/TeamCard";

const OrganizingTeam = () => {



    return (
        <div>

            <h3 className=" mt-4 text-center">Organizing Team</h3>

            <div className="container p-4 d-flex flex-wrap justify-content-center">

                <Team image="aju.jpg" name="Aju Tamang" />
                <Team image="mahesh.jpg" name="Mahesh C. Regmi" />
                <Team image="manish.jpg" name="Manish Bhattarai" />
                <Team image="subal.jpg" name="Subal Ghimire" />
                <Team image="kunal.jpg" name="Kunal Sah" />
                <Team image="anjal.jpg" name="Ajal Bam" />
                <Team image="saroj.jpg" name="Saroj Dahal" />
                <Team image="pujan.jpg" name="Pujan Thapa" />



            </div>
        </div >
    )
}

export default OrganizingTeam
