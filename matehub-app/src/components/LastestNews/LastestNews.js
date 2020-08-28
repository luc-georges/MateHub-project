import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//LastestNews = ()
const LastestNews = () => {
  let settings = {
    className: 'test',
    useCSS: false,
    // fade: true,
    swipe: false,
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


    

  return (
    <div className="LastestNews">
      <h2 className="titre">Lastest News</h2>
      <Slider {...settings}>
      <div className="slide_container">
  <div className="slider_first">
    <img className="slider_image" src={"https://cdn1.dotesports.com/wp-content/uploads/2019/09/25021744/2-3-768x432.jpg"} alt={"Only one more month to go."} />
  </div>
  <div className="slider_second">
    <a className="slider_link" href={"https://dotesports.com/league-of-legends/news/league-of-legends-worlds-2020-dates-revealed-for-each-stage-during-tencent-esports-conference"}>
      <h3>{"Only one more month to go."}</h3>
      <h4>{"League of Legends"}</h4>
      <p>{"League of Legends Worlds 2020 dates revealed for each stage during Tencent Esports Conference"}</p>
    </a>
  </div>
  
</div>
<div className="slide_container" >
  <div className="slider_first">
    <img className="slider_image" src={"https://cdn1.dotesports.com/wp-content/uploads/2020/08/23140643/49632059962_ac65f1dc5e_k-768x512.jpg.webp"} alt={"league of legends news"} />
  </div>
  <div className="slider_second">
    <a className="slider_link" href={"https://dotesports.com/league-of-legends/news/fnatic-take-down-rogue-in-lec-summer-split-playoffs-secure-spot-at-worlds-2020"}>
      <h3>{"Fnatic take down Rogue in LEC Summer Split playoffs, secure spot at Worlds 2020"}</h3>
      <h4>{"League of Legends"}</h4>
      <p>{"Rogue may have gotten more than they bargained for when they chose Fnatic for their first match of playoffs."}</p>
    </a>
  </div>
  
</div>
        </Slider>
    </div>
  );
};

export default LastestNews;

// export default function App() {
//

//   return (
//     <div className="App">
//       <Slider
//         dots={false}
//         slidesToShow={2}
//         slidesToScroll={2}
//         autoplay={true}
//         autoplaySpeed={3000}
//       >
//         {renderSlides()}
//       </Slider>
//     </div>
//   );
// }
