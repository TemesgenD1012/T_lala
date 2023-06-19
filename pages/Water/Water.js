import React from 'react';
import ImageSlider from './ImageSlider'
import people from '../Assets/people.png'
import Form from './Form'
import WaterFooter from './WaterFooter'
import './style.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

function Water() {
  useEffect(()=>{
    Aos.init({duration:1000})
  }, []);

  return (
    <div className='page_body'>

<body data-aos="fade-up" class="body">
  <div class='slider-container'>
  <ImageSlider className='top-slider'/>
  </div>
      
     
    <div>
      <div  class="container">
        <div className='blobimg'>
        <img src={people} alt='image of people' id='image'/>
        </div>
        <div data-aos="flip-right" className='formcontainer'>
        <form className='form'>
          <h2 className='formheader'>የውሃ ቅበላ ካልኩሌተር</h2>
          <p id='par'>እባክዎ ክብደትዎን በኪሎግራም እና ቁመት በሴንቲሜትር ያስገቡ</p>
         
         <Form/>
                   
        </form>
        </div>
      </div>


      <section>
      <div data-Aos="fade-left" className='info'>
        <h2>በቀን ውስጥ ምን ያህል ውሃ መጠጣት አለብዎት?</h2>
        <p>አጠቃላይ ምክሮች ለሴቶች 11.5 ኩባያ ወይም 91 አውንስ እና 15.5 ኩባያ ወይም 125 አውንስ ለወንዶች ይጠቁማሉ። ሆኖም፣ ልዩ ፍላጎቶች እንደ ክብደትዎ፣ የእንቅስቃሴዎ ደረጃ፣ አጠቃላይ ጤና እና እርስዎ በሚኖሩበት የአየር ንብረት ላይ በመመስረት ይለያያሉ። ንጹህ እና ንጹህ ውሃ በሚጠጡበት ጊዜ እርጥበት ለመቆየት ብቸኛው መንገድ አይደለም, አብዛኛውን ጊዜ ለሰውነትዎ ምርጥ ምርጫ ነው. ተጨማሪ የእርጥበት ምንጮች ከፍተኛ የውሃ ይዘት ያላቸውን ምግቦች (እንደ ሐብሐብ ወይም ስፒናች ያሉ) እና ሌሎች መጠጦች (ቡና እና ሶዳ ጨምሮ) ያካትታሉ።</p>
      </div>

      
      </section>

      
     
      <footer class="footer">
        <WaterFooter/>
       <p id="copy">&copy; 2023 DAFTech. All rights reserved</p>
      </footer>
     
      

      

      
  
    </div>
    </body>
   

    </div>
    
  )
}

export default Water