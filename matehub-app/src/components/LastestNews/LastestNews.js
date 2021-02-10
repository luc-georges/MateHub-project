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
    prevArrow: false,
    arrows: false,
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


    

  return (

    <div className="LastestNews">
    <h2 className="titre homeTitle">Lastest News</h2>
      <Slider {...settings}>
      <div className="slide_container">
  <div className="slider_first">
    <img className="slider_image" src={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltca7670b2b538e2dd/5f0e49329be1ce01c562aa79/SB-Web-Microsite-Header_1600x556_03.jpg"} alt={"Only one more month to go."} />
  </div>
  <div className="slider_second">
    <a className="slider_link" href={"https://na.leagueoflegends.com/en-us/event/spirit-blossom/?utm_medium=news&utm_source=lolweb&utm_campaign=sblossom20&utm_content=crafting_alt"}>
      <h3>{"Spirit blossom comming."}</h3>
      <h4>{"League of Legends"}</h4>
      <p>{"A breeze dances across the forest floor. Bells beckon with a lilting note, each sound an invitation… and a promise. And there! Can you hear it? A whisper through the trees. Laughter like petals surrounds you. Old traditions make way for ancient magics, and in their wake the spirit realm begins to bloom. Welcome to the Spirit Blossom Festival."}</p>
    </a>
  </div>
  
</div>
<div className="slide_container" >
  <div className="slider_first">
    <img className="slider_image" src={"https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt4a6adba4e5a319eb/5f3b3b6512fb5b71fd0a1c50/Patch_10_16b_Notes_Article.jpg"} alt={"league of legends news"} />
  </div>
  <div className="slider_second">
    <a className="slider_link" href={"https://dotesports.com/league-of-legends/news/fnatic-take-down-rogue-in-lec-summer-split-playoffs-secure-spot-at-worlds-2020"}>
      <h3>{"PATCH 10.17"}</h3>
      <h4>{"League of Legends"}</h4>
      <p>{"We’re back from the break, we’re blistering in this heat, and we’re bringing a brief B-side patch!"}</p>
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
