import React from 'react';
import './style.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LastestNews = ({ list }) => {
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

  let renderSlides = () =>
    list.map((element) => (
      <div className="slide_container" key={element.uid}>
        <div className="slider_first">
          <img className="slider_image" src={element.img} alt={element.title} />
        </div>
        <div className="slider_second">
          <a className="slider_link" href={element.title_link_link}>
            <h3>{element.title}</h3>
            <h4>{element.game}</h4>
            <p>{element.title_link}</p>
          </a>
        </div>
      </div>
    ));

  return (
    <div className="LastestNews">
      <h2 className="titre">Lastest News</h2>
      <Slider {...settings}>{renderSlides()}</Slider>
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
