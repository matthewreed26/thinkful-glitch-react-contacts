import React from 'react';

// The Contact component goes here.  It should be the default export.
export default function Contact(props){
  let image = <img src={props.photo} alt={'Photo of '+props.name}></img>;
  return(
    <div>{image} {props.name} @ {props.address}</div>
  );
};