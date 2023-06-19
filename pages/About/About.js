import React from "react";
import "./aboutstyle.css";

import R from "./R.gif";
import emotion from "./emotions.gif";
import foodpain from "./foodpain.gif";
import dafict from "./dafict.png";

function About() {
  return (
    <div className="page_body">
      <div className="contener">
        <div>
          <h1> ስለ እኛ </h1>
          <p>የበለጠ ለማንበብ ምስሉን ይንኩ። </p>
        </div>
        <div className="cards">
          <div className="frstabout chiled">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src={dafict} alt="Paris" />
                  ስለ ዳፍ ቴክ
                </div>
                <div className="flip-box-back">
                  <h2>ስለ ዳፍ ቴክf</h2>
                  <p>
                    ሰፋ ያለ የሶፍትዌር ልማት አገልግሎቶች፣ የሚከተሉትን ጨምሮ፡-
                    <li>የድር ልማት</li>
                    <li>የሞባይል ልማት</li>
                    <li>የኢንተርፕራይዝ መተግበሪያ ልማት</li>
                    <li>የአይቲ ማማከር</li>
                    <li>የአይቲ ድጋፍ</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="secondabout chiled">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src={emotion} alt="Paris" /> ስለ ዕድሜ
                </div>
                <div className="flip-box-back">
                  <h2>ስለ ዕድሜ</h2>
                  <p>
                    ወጣት ጎልማሳ (20-39 ዓመታት): ወጣት አዋቂዎች ሥራቸውን እና ግንኙነታቸውን መመስረት
                    ይጀምራሉ. እነሱ የበለጠ እራሳቸውን ችለው እና እራሳቸውን የቻሉ ሊሆኑ ይችላሉ.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="therdabout chiled">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src={foodpain} alt="Paris" />
                  ከደም ዓይነት ጋር ምግብ
                </div>
                <div className="flip-box-back">
                  <h2>የደም ዓይነት ስላለው ምግብ</h2>
                  <p>
                    ጥቅጥቅ ያሉ ስጋዎች፡- የበሬ ሥጋ፣ በግ፣ ጎሽ፣ ሥጋ ሥጋ፣ እና ሌሎች ደቃቅ ሥጋዎች የደም
                    ዓይነት O ላለባቸው ሰዎች ጥሩ የፕሮቲን ምንጭ ናቸው።
                    <li>
                      እንቁላሎች፡- እንቁላል የደም አይነት O ባለባቸው አንዳንድ ሰዎች ላይ እብጠት እንዲፈጠር
                      ምክንያት ሊሆን ይችላል።
                    </li>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="forthabout chiled">
            <div className="flip-box">
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <img src={R} alt="Paris" /> ስለ ውሃ
                </div>
                <div className="flip-box-back">
                  <h2>ስለ ውሃ</h2>
                  <p>
                    ብሔራዊ የሳይንስ፣ ኢንጂነሪንግ እና ህክምና አካዳሚዎች በቂ ዕለታዊ የፈሳሽ ቅበላ መሆኑን
                    ወስነዋል፡-
                    <li>ለወንዶች በቀን ወደ 15.5 ኩባያ (3.7 ሊትር) ፈሳሽ።</li>
                    <li>ለሴቶች በቀን ወደ 11.5 ኩባያ (2.7 ሊትር) ፈሳሽ።</li>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
