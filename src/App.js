import React from 'react';
import ReactDOM from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cocatiel" />
      <Pet name="Sudo" animal="Dog" breed="Wheaten Terrier" />
    </div>
  );
};

// const App = () => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', { id: 'my-brand' }, 'Adopt Me'),
//     React.createElement(Pet, {
//       name: 'Luna',
//       animal: 'Dog',
//       breed: 'Havanese',
//     }),
//     React.createElement(Pet, {
//       name: 'Pepper',
//       animal: 'Bird',
//       breed: 'Cocatiel',
//     }),
//     React.createElement(Pet, {
//       name: 'Sudo',
//       animal: 'Dog',
//       breed: 'Wheaten Terrier',
//     }),
//   ]);
// };

ReactDOM.render(<App />, document.getElementById('root'));