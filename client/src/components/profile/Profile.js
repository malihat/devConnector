import React, {Fragment, useEffect} from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { getProfileById } from '../../actions/profile';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub'

const Profile = props => {
  useEffect(() => {
    props.getProfileById(props.match.params.id)
  }, []);
  
  return (  
     <Fragment>
      { props.profile.profile === null || props.profile.loading ? <Spinner/> :
        <Fragment> 
          <Link to="/profiles" className="btn btn-light"> Back to Profile </Link>
          { props.auth.isAuthenticated && props.auth.loading === false && 
            props.auth.user._id === props.profile.profile.user._id &&  
            (<Link to="/edit-profile" className="btn btn-dark"> Edit Profile </Link> 
          )}
          <div className="profile-grid my-1">
            <ProfileTop profile={props.profile.profile} />
            <ProfileAbout profile={props.profile.profile}  />
            <div className="profile-exp bg-white p-2">
              <h2 className="text-primary"> Experience </h2>
                {props.profile.profile.experience.length > 0 ? (<Fragment> 
                  {props.profile.profile.experience.map(experience => (
                    <ProfileExperience key={experience._id} experience={experience} />
                  ))}  </Fragment>) : 
                  (<h4> No experience credentials </h4> ) }
            </div> 

            <div className="profile-edu bg-white p-2">
              <h2 className="text-primary"> Education </h2>
                {props.profile.profile.education.length > 0 ? (<Fragment> 
                  {props.profile.profile.education.map(education => (
                    <ProfileEducation key={education._id} education={education} />
                  ))}  </Fragment>) : 
                  (<h4> No experience credentials </h4> ) }
            </div> 
            {props.profile.profile.githubusername && (
              <ProfileGithub username={props.profile.profile.githubusername} />
            )}

          </div>
        </Fragment> 
      }
    </Fragment>
  );
}

Profile.protoTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
})
 
export default connect(mapStateToProps, {getProfileById})(Profile);
