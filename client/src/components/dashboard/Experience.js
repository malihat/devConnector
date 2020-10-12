import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
// import Moment from 'react-moment';
import moment from 'moment';
import { deleteExperience } from '../../actions/profile';

const Experience = props => {
  const experiences = props.experience.map(exp => ( 
    <tr key={exp._id}>
      <td> {exp.company} </td>
      <td className="hide-sm"> {exp.title} </td>
      <td>
        {/* <Moment format='YYYY/DD/MM'> {exp.from} </Moment>  - {
          exp.to === null ? (' Now') : (<Moment format='YYYY/DD/MM'> {exp.to} </Moment>)
        } */}
        { moment(exp.from).format('MM/DD/YYYY') } - { exp.to === null ? (' Now')  : 
          moment(exp.from).format('MM/DD/YYYY')  }
      </td>
      <td>
        <button onClick={() => props.deleteExperience(exp._id)} className='btn btn-danger'> Delete </button>
      </td>
    </tr>
  ))
  return (  
    <Fragment>
      <h2 className="my-2"> Experience Credentials </h2>
      <table className="table">
        <thead>
          <tr>
            <th> Company</th>
            <th className="hide-sm"> Title </th>
            <th className="hide-sm"> Years </th>
            <th />
          </tr>
        </thead>
        <tbody> {experiences} </tbody>
      </table>
    </Fragment>
  );
}
 
Experience.protoTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
}

export default connect(null, {deleteExperience})(Experience);