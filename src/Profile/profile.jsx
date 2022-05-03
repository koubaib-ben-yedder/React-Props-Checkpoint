import React from 'react'
import PropTypes from "prop-types";
const Profile = (props) => {


    console.log(props)
   
    const {FullName="", bio="", profession="",childreen="", handleName}=props

    Profile.prototype={
        FullName:PropTypes.string,
        bio:PropTypes.string,
        profession:PropTypes.string,
        childreen:PropTypes.string
    }

  return (
    <div>
        
        <div> {FullName}</div>
        <div>{bio}</div>
        <div>{profession}</div>
        { handleName(props)}
        <img style={{backgroundImage:"url(../image/"+childreen+".jpg)"}}/>
    </div>
  )
}

export default Profile