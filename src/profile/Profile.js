import React from 'react'
import PropTypes from "prop-types"

const Profile = (props) => {
    const styleName={color:"red",fontSize:"40px",margin:"10px 10px"}
    const stylePeofession={color:"blue",fontSize:"30px",margin:"10px 10px"}
    const styleBio = {color:"grey",fontSize:"20px",width:"",margin:"20px 20px",textAlign:'center'}
    const globalStyle={textAlign:'center'}
    return (
        <div style={globalStyle}>
            <div>
                {props.children}
            </div>
            <div className="name" style={styleName}>
                <span>Name:{props.fullName}</span>
                {props.handleName(props.fullName)}
            </div>
            <div className="profession" style={stylePeofession}>
                <span>Profession:{props.profession}</span>
            </div>
            <div className="bio" style={styleBio}>
                <span>Bio:{props.bio}</span>
            </div>

        </div>
    )
}
Profile.defaultProps = {
    fullName : 'Wassim',
    profession : 'Developer',
    bio:'Hello I am Wassim a Web Developer'
}
Profile.prototype = {
    fullName:PropTypes.string,
    profession:PropTypes.string,
    bio:PropTypes.string
}
export default Profile
