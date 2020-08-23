import React from 'react';
import titrelol from '../../assets/titrelol.png';
import './style.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LastestNews = ({list} ) => {
  let settings = {
    className: "test",
    useCSS: false,
    // fade: true,
    swipe:false,
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  console.log({list})

  let renderSlides = () =>
    list.map(element => (
      <div className = "slide_container">
        <div className = "slider_first">
            <img className="slider_image"
                src={element.img}
                alt={element.title}
                />
                </div>
                <div className="slider_second"><a className="slider_link" href={element.title_link_link}>
                <h3>{element.title}</h3>  
                <h4>{element.game}</h4>
                <p>{element.title_link}</p>  
                </a></div>
        </div>
    ));

  return (
    <div className="LastestNews" >
      <h2 className="titre">Lastest News</h2>
      <Slider {...settings}>
      {renderSlides()}
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

{/* <div className="inner-div">
<img
        src="https://cdn1.dotesports.com/wp-content/uploads/2020/03/31154847/49645845107_a741a49ad9_k-768x539.jpg"
        alt="lollogo"
        />
        <h3>Santorin and FlyQuest are here to prove that they're a team fans can believe in.</h3>  
        <h4>League of Legends</h4>  
        <p>Santorin on qualifying for Worlds: “I know [FlyQuest] has had the same mindset as me—we both feel really underrated and want to prove that we’re here to compete and dominate</p>
</div>
<div className="inner-div">
<img
        src="https://cdn1.dotesports.com/wp-content/uploads/2020/08/17111115/baseyone_final__1_-scaled-1-768x453.jpg.webp"
        alt="lollogo"
        />
        <h3>Santorin and FlyQuest are here to prove that they're a team fans can believe in.</h3>  
        <h4>League of Legends</h4>  
        <p>Santorin on qualifying for Worlds: “I know [FlyQuest] has had the same mindset as me—we both feel really underrated and want to prove that we’re here to compete and dominate</p>
</div>
<div className="inner-div">
<img
        src="https://cdn1.dotesports.com/wp-content/uploads/2019/09/12162301/48700671303_04e233643f_k-768x512.jpg"
        alt="lollogo"
        />
        <h3>Santorin and FlyQuest are here to prove that they're a team fans can believe in.</h3>  
        <h4>League of Legends</h4>  
        <p>Santorin on qualifying for Worlds: “I know [FlyQuest] has had the same mindset as me—we both feel really underrated and want to prove that we’re here to compete and dominate</p>
</div>
<div className="inner-div">
<img
        src="https://cdn1.dotesports.com/wp-content/uploads/2020/07/06065408/Irelia_0-768x453.jpg"
        alt="lollogo"
        />
        <h3>Santorin and FlyQuest are here to prove that they're a team fans can believe in.</h3>  
        <h4>League of Legends</h4>  
        <p>Santorin on qualifying for Worlds: “I know [FlyQuest] has had the same mindset as me—we both feel really underrated and want to prove that we’re here to compete and dominate</p>
</div>
<div className="inner-div">
<img
        src="https://cdn1.dotesports.com/wp-content/uploads/2020/07/16080302/50099799552_6cb5a8f71d_k-768x512.jpg.webp"
        alt="lollogo"
        />
        <h3>Santorin and FlyQuest are here to prove that they're a team fans can believe in.</h3>  
        <h4>League of Legends</h4>  
        <p>Santorin on qualifying for Worlds: “I know [FlyQuest] has had the same mindset as me—we both feel really underrated and want to prove that we’re here to compete and dominate</p>
</div> */}
