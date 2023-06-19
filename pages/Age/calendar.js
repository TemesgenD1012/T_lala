import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Aos from 'aos';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { scroller } from 'react-scroll';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
// import dayjs from 'dayjs';

import './agestyle.css'
import { Style } from '@mui/icons-material';
// import { getValue } from '@testing-library/user-event/dist/utils';


function FrontPage() {

  useEffect(()=>{
    Aos.init({duration:1000})
  }, []);

    const [birthDate, setBirthDate] = useState('');
    const [seconds, setSeconds] = useState('');
    const [minutes, setMinutes] = useState('');
    const [days, setDays] = useState('');
    const [day, setDay] = useState('');
    const [months, setMonths] = useState('');
    const [years, setYears] =useState('');
    const [personality, setPersonality] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');
    const [isDivVisible, setIsDivVisible] = useState(false);


    const handleShowDiv = () => {
      setIsDivVisible(true);
    };
    
    const handleChange = (event) => {
      setBirthDate(event);
      
    };

  
    const calculateTime = () => {
      const birthDateTime = new Date(birthDate).getTime();
      const currentTime = new Date().getTime();
      const timeDiff = currentTime - birthDateTime;
      

  
      if (isNaN(timeDiff)) {
        setSeconds('');
        setMinutes('');
        setDays('');
        setMonths('');
        setYears('');
        setPersonality('');
        setDay('');
        return;
      }
  
      const seconds = Math.floor(timeDiff / 1000);
      const minutes = Math.floor(seconds / 60);
      const days = Math.floor(minutes / 60 / 24);
      const months = Math.floor(days / 30.436875);
      const years = Math.floor(months/12);
      
      setSeconds(seconds);
      setMinutes(minutes);
      setDays(days);
      setMonths(months);
      setYears(years);
      setDay(day);

      handleShowDiv();
      predictPersonality(birthDate);
      scrollToOutput();
      
    };
 
    const predictPersonality = () => {
        if (birthDate === '') {
          setPersonality('');
          return;
        }

        const day = new Date(birthDate).getDay();

        switch(day){
          case 0:
            setDay('Sunday');
             break;
          case 1:
            setDay('Monday');
            break;
          case 2:
            setDay('Tuesday');
            break;
          case 3:
            setDay('Wednesday');
             break;
          case 4:
            setDay('Thursday');
             break;
          case 5:
            setDay('Friday');
             break;
          case 6:
            setDay('Saturday');
             break;                            
        }
    
        const birthMonth = new Date(birthDate).getMonth();
    
        switch (birthMonth) {
          case 0:
            setPersonality('People born in January are often seen as ambitious, disciplined, and determined individuals. They possess a strong sense of purpose and are known for their practicality and reliability. With a natural inclination towards leadership, they have the ability to inspire and motivate others. January-born individuals tend to be independent and self-motivated, constantly striving for personal and professional growth. Their determination and perseverance enable them to overcome challenges and achieve their goals. While they may appear serious and focused, they also have a fun-loving side and enjoy celebrating life\'s achievements with their loved ones.');
            setBackgroundColor('#f8efed');
            break;
          case 1:
            setPersonality('Those born in February are often considered imaginative, compassionate, and open-minded individuals. They have a remarkable ability to empathize with others, demonstrating a deep understanding of emotions and offering support when needed. Creativity flows through their veins, allowing them to approach life with an artistic perspective. February-born individuals are driven by a sense of justice and often advocate for humanitarian causes. Their compassionate nature leads them to make a positive impact on the world around them. They cherish their relationships and value deep connections, making them loyal and devoted friends.');
            setBackgroundColor('#e1d9ed');
            break;
          case 2:
            setPersonality('March-born individuals are often described as intuitive, adaptable, and artistic souls. They possess a keen perception that allows them to understand subtle nuances in their environment and the emotions of those around them. With an innate curiosity, they continuously explore the world, finding inspiration in every corner. Creativity flows freely through their veins, expressing itself through various artistic mediums. March-born individuals have a natural adaptability, enabling them to thrive in different situations. Their emotional depth and sensitivity allow them to form profound connections with others, making them compassionate and understanding friends.');
            setBackgroundColor('#f3eae8');
            break;
          case 3:
            setPersonality('People born in April are often characterized as dynamic, confident, and courageous individuals. They possess a bold and assertive nature that pushes them to take risks and chase their dreams. With an unwavering self-belief, they approach challenges head-on, often emerging victorious. April-born individuals have a competitive spirit and thrive in environments that allow them to showcase their skills. They exhibit strong leadership qualities and excel in motivating and inspiring others. While their determination and drive might make them seem single-minded, they also value authenticity and appreciate genuine connections with others.');
            setBackgroundColor('#f8efc7');
            break;
          case 4:
            setPersonality('Those born in May are often seen as reliable, practical, and patient individuals. They have a grounded and stable nature, making them dependable friends and partners. May-born individuals possess a strong work ethic, approaching tasks with diligence and commitment. They excel in situations that require practicality and logical thinking, often finding innovative solutions to complex problems. Their patience and resilience enable them to weather challenges with grace. May-born individuals value loyalty and maintain deep connections with their loved ones, providing unwavering support and encouragement.');
            setBackgroundColor('#145a8f');
            break;
          case 5:
            setPersonality('June-born individuals are often described as sociable, curious, and adaptable souls. They possess excellent communication skills and a natural ability to connect with people from all walks of life. Their curious nature fuels a desire to explore and understand the world around them. June-born individuals have an innate versatility that allows them to adapt seamlessly to various situations. They are excellent listeners and provide a comforting presence for those in need. Their sociability and adaptability make them the life of the party, spreading joy wherever they go.');
            setBackgroundColor('#efc768');
            break;
          case 6:
            setPersonality('People born in July are often characterized as nurturing, sensitive, and intuitive individuals. They have a remarkable ability to understand the emotions of others, offering comfort and support when needed. July-born individuals possess a deep emotional depth, which is often reflected in their creative pursuits. They prioritize the well-being of their loved ones, and their nurturing nature makes them incredible caregivers and friends. July-born individuals have a strong sense of loyalty.');
            setBackgroundColor('#5e5a8a');
            break;
          case 7:
            setPersonality('Those born in August are often seen as confident, charismatic, and ambitious individuals. They possess a magnetic personality that draws others towards them. With their natural charm and self-assurance, they excel in social situations and often become the center of attention. August-born individuals have ambitious goals and are driven to achieve success in their endeavors. They possess strong leadership qualities and are not afraid to take charge. Their determination, combined with their charismatic nature, allows them to inspire and motivate others to reach their full potential.');
            setBackgroundColor('#0a8fa3');
            break;
          case 8:
            setPersonality('September-born individuals are often described as analytical, practical, and detail-oriented. They possess a logical and methodical approach to life, paying attention to the smallest details. They have a thirst for knowledge and constantly seek to expand their understanding of the world. September-born individuals excel in problem-solving and critical thinking, using their analytical skills to find efficient solutions. They are often known for their reliability and ability to organize and plan effectively. Their attention to detail and practical mindset make them valuable assets in both personal and professional settings.');
            setBackgroundColor('#087abc');
            break;
          case 9:
            setPersonality('People born in October are often characterized as diplomatic, balanced, and romantic individuals. They possess a harmonious nature and strive to maintain peace and fairness in their relationships and interactions. October-born individuals have a strong sense of justice and often act as mediators in conflicts. They value equality and fairness, treating others with respect and kindness. Romantic by nature, they appreciate love and beauty in all forms. Their balanced approach to life and their ability to see different perspectives make them excellent peacemakers and trusted confidants.');
            setBackgroundColor('#0a8fa3');
            break;
          case 10:
            setPersonality('Those born in November are often seen as passionate, determined, and mysterious individuals. They possess an intense nature and are deeply passionate about their beliefs and goals. November-born individuals exhibit a remarkable level of determination and resilience, often overcoming obstacles with sheer willpower. They have a magnetic aura that captivates others, and their mysterious demeanor adds an air of intrigue to their personality. They value authenticity and are not afraid to express their opinions. Their unwavering dedication and strength of character make them powerful forces in any endeavor they undertake.');
            setBackgroundColor('#a74c69');
            break;
          case 11:
            setPersonality(' December-born individuals are often described as optimistic, generous, and adventurous souls. They possess a cheerful and optimistic outlook on life, spreading positivity wherever they go. December-born individuals are known for their generous nature, always willing to lend a helping hand to those in need. They have a thirst for adventure and love to explore new territories, whether physically or intellectually. Their free-spirited nature and sense of wonder make them great companions on thrilling journeys. They find joy in embracing new experiences and embracing the beauty of the world.');
            setBackgroundColor('#8c8377');
            break;
          default:
            setPersonality('');
            break;
        }
      };
      const scrollToOutput = () => {
        scroller.scrollTo('output', {
          duration: 500, 
          smooth: 'easeInOutQuart', 
          offset: -50, // Set an optional offset to adjust the scroll position (if needed)
        });
      };
      

  return (
    
    <div className='age_wrapper page_body'>
        {/* Input field for age */}
        

<div className='calendar-cont'>

<div className='image'>

</div>
    
<div className='cal-parent' data-Aos="slide-down" >
  <p className='title'>Please choose your birthdate</p>

<LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer
        components={[ 'StaticDatePicker' ]}
      >
          <StaticDatePicker className="cal"
          
          value={birthDate}
          onChange={ handleChange}
         slotProps={{
          actionBar: {
          actions: []
        }
      }}
      /> 
      </DemoContainer>
    </LocalizationProvider>
    

    <Stack spacing={2} direction="row">
      
      <Button variant="contained"  onClick={calculateTime} id='button'>Predict Personality</Button>
    </Stack>
</div>
    
    
   
</div>

      {/* Display calculated time */}

      {isDivVisible && (
      <div style={{ backgroundColor }} className='output'>
      {/* <div>
      <p>Your results</p>
      </div> */}
      <div className='second'>
        {seconds &&  <p ><h1>Seconds-lived:</h1> {seconds} Seconds</p>}
      </div>
      
      <div className='minute'>
        {minutes && <p><h1>Minutes-lived: </h1>{minutes} Minutes</p>}
      </div>
      
      <div className='day'>
        {days && <p ><h1>Days-lived: </h1>{days} Days</p>}
      </div>
      
      <div className='month'>
        {months && <p ><h1>Months-lived: </h1>{months} Months</p>}
      </div>
      
      <div className='year'>
        {years && <p ><h1>Age: </h1>{years}</p>} 
      </div>
      
      <div className='day'>
        {day && <p ><h1>You were born on: </h1>{day}</p>}
      </div>
      
     
      {/* Display predicted personality */}
      <div className='personality'>
      {personality &&
        (<p> <span>Predicted Personality:</span> {personality}</p>)}
      </div>

    </div>
    )}
   <footer className='footera'>
      <p>&copy; 2023 DAFTech. All rights reserved</p>
   </footer>
      
    </div>
   
  )
}

export default FrontPage