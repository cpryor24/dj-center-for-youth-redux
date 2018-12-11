import React from 'react';
import AddProgramForm from '../forms/AddProgramForm';
import Program from '../single/program';
import { connect } from 'react-redux';

const ProgramsList = (props) => {
  let listOfPrograms = props.programs.map(program => <Program key={program.id} program={program}/>)
  return (
    <div>
      <AddProgramForm />
      {listOfPrograms}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    programs: state.programs
  }
}

export default connect(mapStateToProps)(ProgramsList);
