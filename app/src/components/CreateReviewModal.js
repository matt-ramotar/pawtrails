import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default function CreateReviewModal() {
  return <h1>Review Modal</h1>;
}

// const enhance = connect(
//   (state, ownProps) => ({
//     person: ownProps.id ? state.people[ownProps.id] : undefined,
//   }),
//   { createPerson, updatePerson }
// );

// const PersonFormContainer = ({ id, person, createPerson, updatePerson, onClose, ...rest }) => {
//   const handleSubmit = useCallback(e => {
//     e.preventDefault();
//     const { name, email } = e.target;
//     const values = {
//       name: name.value,
//       email: email.value,
//     };

//     person ? updatePerson(id, values) : createPerson(values);
//     onClose();
//   }, []);

//   return (
//     <Dialog {...rest} onClose={onClose} aria-labelledby='person-dialog-slide-title'>
//       <form onSubmit={handleSubmit}>
//         <DialogTitle id='person-dialog-slide-title'>
//           {id ? 'Edit Person' : 'Create Person'}
//         </DialogTitle>
//         <DialogContent>
//           <TextField name='name' label='Name' defaultValue={person ? person.name : ''} />
//           <TextField name='email' label='Email' defaultValue={person ? person.email : ''} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={onClose}>Cancel</Button>
//           <Button type='submit' color='primary'>
//             Save Person
//           </Button>
//         </DialogActions>
//       </form>
//     </Dialog>
//   );
// };

// export default enhance(PersonFormContainer);
