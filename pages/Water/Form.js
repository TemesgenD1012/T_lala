import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
 function Form() {
  const [height, setheight,] = useState('');
  const [weight, setWeight] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [bmi, setBmi] = useState('');

  const handleChange = (event) => {
    setWeight(event.target.value);
    
  };

  const Handlechange = (event)=>
{
  setheight(event.target.value);
};
  const calculateWaterIntake = () => {
    const parsedWeight = parseFloat(weight);
    if (!isNaN(parsedWeight)) {
      const calculatedIntake = parsedWeight * 0.033;
      setWaterIntake(calculatedIntake.toFixed(2));

      
    const parsedheight = parseFloat(height);

if(height!='' && !isNaN(height))
{
  let computed = Math.pow(parsedheight, 2);
      const bmi = weight / computed;
      setBmi(bmi.toFixed(2))
}



     
   } };

  return (
    
    <Box id='box' style={{padding:'15px'}}
     
   

      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
       
      }}
      noValidate
      autoComplete="off"
      pattern="[0-9]*"
    >
      <div id="fields">
      <TextField 
      onInput = {(e) =>{ 
        e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,3) 
    }}
      
      value={weight}
       onChange={handleChange}
        id="outlined-basic"  
        label="Weight in Kg" 
        variant="outlined"/>
      
      
      
      <TextField value={height} onChange={Handlechange}  id="filled-height" label="Height in cm" variant="outlined" />
      </div>
      
      
      <Button id="btn" variant="contained" type='button' onClick={calculateWaterIntake}>calculate</Button>
      {waterIntake && (
        <p id='resultpar'>
          የእርስዎ የሚመከረው ዕለታዊ የውሃ  <strong>{waterIntake} ሊትር</strong> ወይም <strong>{Math.round(waterIntake*4.227)}</strong> ኩባያዎች. እና የሰውነትዎ ብዛት መረጃ ጠቋሚ ነው። <strong>{bmi}</strong>.
        </p>
      )}


    </Box>


  );
}
export default Form