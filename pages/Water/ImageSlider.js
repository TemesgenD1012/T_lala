import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import { Parallax, Pagination, Navigation,Autoplay } from "swiper";

function ImageSlider(){
  
  return (
    <div className="slider-container">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        autoplay={{
          delay:10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation,Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          
          data-swiper-parallax="-23%"
        ></div>

<SwiperSlide>
          <div className="first-container">
          <div className="sub1" data-swiper-parallax="-300">
          እርጥበትን የመጠበቅ አስፈላጊነት
          </div>
          <hr className="line" data-swiper-parallax="-500"></hr>
          <div className="text" data-swiper-parallax="-100">
          <p>በእርጥበት መቆየት ለአጠቃላይ ጤንነታችን እና ደህንነታችን እጅግ በጣም አስፈላጊ ነው። በቂ ውሃ ማጠጣት ሰውነታችን በትክክል እንዲሠራ እና ትክክለኛውን የፈሳሽ ሚዛን እንዲጠብቅ ያደርጋል. በየቀኑ በቂ መጠን ያለው ውሃ በመጠጣት፣ የሰውነት ሙቀትን መቆጣጠር፣ የምግብ መፈጨትን እና የተመጣጠነ ምግብን ለመምጥ እና ቆሻሻን ለማስወገድ የመሳሰሉ አስፈላጊ የሰውነት ተግባራትን ይደግፋሉ። ትክክለኛ የውሃ ማጠጣት የሀይላችንን ደረጃ ከፍ ያደርገዋል፣የግንዛቤ ስራን ያሻሽላል እና የተሻለ የአካል ብቃት እንቅስቃሴን ያበረታታል። እንዲሁም ለቆዳ ጤናማ አስተዋጽኦ ያደርጋል፣ የምግብ መፈጨትን ጤንነት ይደግፋል፣ የኩላሊት ስራን ይጠብቃል እና ክብደትን ለመቆጣጠር ይረዳል። ለሀይድሮሽን ቅድሚያ በመስጠት አጠቃላይ ጤናን ማዳበር እና የሰውነታችን ስርአቶች ትክክለኛ ስራን ማረጋገጥ እንችላለን።</p>          </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="second-container" data-swiper-parallax="-300">
            <div className="sub2" data-swiper-parallax="-300">
            የሃይድሬሽን ኃይል
          </div>
          <hr className="line" data-swiper-parallax="-500"></hr>
          <div className="text" data-swiper-parallax="-100">
            <p>
            ውሃ በተለያዩ አስፈላጊ ተግባራት ውስጥ ወሳኝ ሚና በመጫወት የሰውነታችን መሰረታዊ የግንባታ ቁሳቁስ ነው። እርጥበት በመቆየት ሰውነታችን በተቃና ሁኔታ መስራቱን እናረጋግጣለን። ከዚህም በላይ በቂ የውኃ ፍጆታ የኃይል ደረጃዎችን, የእውቀት (ኮግኒቲቭ) ተግባርን እና የአካል ብቃት እንቅስቃሴን ያሻሽላል, ይህም በቀን ውስጥ የበለጠ ንቁ, ትኩረት እና ችሎታ እንዲሰማን ያስችለናል. በተጨማሪም ውሃ የቆዳ ህዋሶችን ለማራባት እና ለመመገብ ስለሚረዳው የበለፀገ ቀለም እንዲፈጠር ስለሚያደርግ ትክክለኛ እርጥበትን መጠበቅ ጤናማ ቆዳን ያበረታታል። እንዲሁም ጤናማ ሜታቦሊዝምን ይደግፋል ፣ ክብደትን ለመቆጣጠር እና ቀልጣፋ የካሎሪ ማቃጠልን ያበረታታል።            </p>
          </div>
          </div>
          
        </SwiperSlide>

        <SwiperSlide>
          <div className="third-container" data-swiper-parallax="-300">
           <div className="sub3" data-swiper-parallax="-300">
           ለአእምሮ ደህንነት እርጥበት
          </div>
          <hr className="line" data-swiper-parallax="-500"></hr>
          <div className="text" data-swiper-parallax="-100">
            <p>
            ትክክለኛ የእርጥበት ደረጃዎችን መጠበቅ በእውቀት (ኮግኒቲቭ) ተግባር, ስሜት እና አጠቃላይ የአእምሮ ደህንነት ላይ ከፍተኛ አዎንታዊ ተጽእኖ ይኖረዋል. ብዙ ጥናቶች በሃይሪቴሽን ሁኔታ እና በግንዛቤ አፈፃፀም መካከል ያለውን ትስስር በተከታታይ አሳይተዋል። ሰውነታችን በቂ ውሃ ሲያጣ፣ እንደ ትኩረት፣ ትውስታ እና ችግር የመፍታት ችሎታዎች ያሉ የግንዛቤ ችሎታዎች በእጅጉ ሊዳከሙ ይችላሉ። ድርቀት ወደ አንጎል የደም ፍሰትን ይገድባል, የኦክስጂን አቅርቦትን ይቀንሳል እና ጥሩውን ስራውን ያደናቅፋል. በቂ እርጥበትን በማረጋገጥ፣ የእውቀት ችሎታዎችን ማሳደግ፣ የተሻሻለ የአዕምሮ ንፅህና እና የተሻለ ትኩረት እና ትኩረትን ማስቀጠል እንችላለን።            </p>
          </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="fourth-container" data-swiper-parallax="-300">
            <div className="sub4" data-swiper-parallax="-300">
            አስፈላጊው ኤሊሲር
          </div>
          <hr className="line" data-swiper-parallax="-500"></hr>
          <div className="text" data-swiper-parallax="-100">
            <p>
            ውሃ በተለያዩ አስፈላጊ ተግባራት ውስጥ ወሳኝ ሚና በመጫወት የሰውነታችን መሰረታዊ የግንባታ ቁሳቁስ ነው። እርጥበት በመቆየት ሰውነታችን በተቃና ሁኔታ መስራቱን እናረጋግጣለን። ከዚህም በላይ በቂ የውኃ ፍጆታ የኃይል ደረጃዎችን, የእውቀት (ኮግኒቲቭ) ተግባርን እና የአካል ብቃት እንቅስቃሴን ያሻሽላል, ይህም በቀን ውስጥ የበለጠ ንቁ, ትኩረት እና ችሎታ እንዲሰማን ያስችለናል. በተጨማሪም ውሃ የቆዳ ህዋሶችን ለማራባት እና ለመመገብ ስለሚረዳው የበለፀገ ቀለም እንዲፈጠር ስለሚያደርግ ትክክለኛ እርጥበትን መጠበቅ ጤናማ ቆዳን ያበረታታል። እንዲሁም ጤናማ ሜታቦሊዝምን ይደግፋል ፣ ክብደትን ለመቆጣጠር እና ቀልጣፋ የካሎሪ ማቃጠልን ያበረታታል። በተጨማሪም በደንብ እርጥበት መቆየቱ የሰውነት ሙቀት መጠንን በመቆጣጠር፣ መገጣጠሚያዎችን በማቀባትና በመላ አካሉ ውስጥ ያሉ ንጥረ ነገሮችን እና ኦክስጅንን ለማጓጓዝ ይረዳል።            </p>
          </div>
          </div>
          
        </SwiperSlide>

        <SwiperSlide>
          <div className="fivth-container" data-swiper-parallax="-300">
            <div className="sub5" data-swiper-parallax="-300">
            ለከፍተኛ አፈጻጸም እርጥበት          </div>
          <hr className="line" data-swiper-parallax="-500"></hr>
          <div className="text" data-swiper-parallax="-100">
            <p>
            የአካል ብቃት እንቅስቃሴን በማመቻቸት እና ከስልጠና በኋላ ማገገምን በማመቻቸት የውሃ ማጠጣት ወሳኝ ሚና ይጫወታል። በአካላዊ እንቅስቃሴ ወቅት ትክክለኛውን የሰውነት ሙቀት ለመጠበቅ በቂ እርጥበት አስፈላጊ ነው. ስፖርት በምንሠራበት ጊዜ ሰውነታችን ሙቀትን ያመነጫል, እና ላብ ማቀዝቀዝ ዋናው ዘዴ ነው. ነገር ግን ከድርቀት ከተዳከምን በተቀላጠፈ ሁኔታ የማላብ ችሎታችን ይስተጓጎላል፣ ይህም ከፍተኛ የሙቀት መጠን መጨመር፣ ድካም እና የአካል ብቃት እንቅስቃሴን ይቀንሳል። የሰውነት ድርቀት የጡንቻን ተግባር ሊጎዳ ይችላል፣ ይህም ወደ ጥንካሬ፣ ጽናትና ቅንጅት ይቀንሳል። በተጨማሪም በአካል ብቃት እንቅስቃሴ ወቅት የጡንቻ መኮማተር እና የመቁሰል እድልን ይጨምራል።            </p>
          </div>
          </div>
          
        </SwiperSlide>



      </Swiper>
    </div>
  );
}

export default ImageSlider




