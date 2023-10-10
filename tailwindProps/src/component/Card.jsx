 

const Card = (props) => {
  console.log("props recieved ");
  console.log(props.newProp.age);
  console.log(props.newProp.name);
  console.log(props.newProp.age);
 
  
  // now accessing the props values 
  // console.log(props.obj.userName);

  return (
    <div>
      hey im the new Component
    </div>
  )
}

export default Card;
