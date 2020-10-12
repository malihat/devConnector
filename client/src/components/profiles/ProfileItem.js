import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileItem = props => {
  return (   
    <div className="profile bg-light">  
      <img src={props.profile.user.avatar} alt="" className="round-img" />
      <div>
        <h2> {props.profile.user.name} </h2>
        <p> {props.profile.status} {props.profile.company && 
          <span> {props.profile.company} </span>} </p>
        <p className="my-1"> {props.profile.location && <span> {props.profile.company} </span> } </p>
        <Link to={`/profile/${props.profile.user._id}`}  className="btn btn-primary">
          View Profiles
        </Link>
      </div>
      <ul>
        {props.profile.skills.slice(0,4).map((skill, index) => (
          <li key={index} className="text-primary" >
            <i className="fas fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

ProfileItem.protoTypes = {
  profile: PropTypes.object.isRequired
}
 
export default ProfileItem;
