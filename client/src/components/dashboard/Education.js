import React, { Fragment } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
// import Moment from 'react-moment';
import moment from 'moment';
import { deleteEducation } from '../../actions/profile';

const Education = props => {
  const educations = props.education.map(edu => ( 
    <tr key={edu._id}>
      <td> {edu.school} </td>
      <td className="hide-sm"> {edu.degree} </td>
      <td>
        {/* <Moment format='YYYY-MM-DD'> {edu.from} </Moment>  - {
          edu.to === null ? (' Now') : (<Moment format='YYYY-MM-DD'> {edu.to} </Moment>)
        } */}
        { moment(edu.from).format('MM/DD/YYYY') } - { edu.to === null ? (' Now')  : 
          moment(edu.from).format('MM/DD/YYYY')  }

        {/* {edu.from} {' '} - {' '} { edu.to}  */}
      </td>
      <td>
        <button onClick={() => props.deleteEducation(edu._id)} className='btn btn-danger'> Delete </button>
      </td>
    </tr>
  ))
  return (  
    <Fragment>
      <h2 className="my-2"> Education Credentials </h2>
      <table className="table">
        <thead>
          <tr>
            <th> School </th>
            <th className="hide-sm"> Degree </th>
            <th className="hide-sm"> Years </th>
            <th />
          </tr>
        </thead>
        <tbody> {educations} </tbody>
      </table>
    </Fragment>
  );
}
 
Education.protoTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
}

export default connect(null, {deleteEducation})(Education);