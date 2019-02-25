// import React, { Component } from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";
// import "./index.css";
// // import Student1 from "../../images/Student/1.JPG";
// import Student2 from "../../images/Student/2.JPG";
// import Craft3 from "../../images/Craft/3.JPG";
// import GeneralPhoto3 from "../../images/General/3.JPG";
// // import Student3 from "../../images/Student/3.JPG";
// // import Craft1 from "../../images/Craft/1.JPG";
// // import Craft2 from "../../images/Craft/2.JPG";
// // import GeneralPhoto1 from "../../images/General/1.JPG";
// // import GeneralPhoto2 from "../../images/General/2.JPG";
// import HomeMainText from "./homeMainText";
// class slideshowImage extends Component {
//   render() {
//     var isShow = 0;
//     var settings = {
//       dots: true,
//       infinite: true,
//       speed: 2000,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 4000,
//       arrows: false,
//       customPaging: i => (
//         <div
//           style={{
//             width: "20px",
//             height: "20px",
//             color: "green",
//             border: "1px green solid",
//             borderRadius: "50%",
//             fontSize: "12px",
//             backgroundColor: i === isShow && "#FFCF56"
//           }}
//         />
//       ),
//       beforeChange: (i, index) => {
//         isShow = index;
//       }
//     };
//     return (
//       <div className="slideshow-image">
//         <Slider {...settings}>
//           <Link to="/" className="slideshow-image-box">
//             {/* <h1 className="slideshow-image-text">Students</h1> */}
//             <div className="slideshow-image-text1">
//               <HomeMainText />
//             </div>
//             <img
//               src={GeneralPhoto3}
//               alt={"Students"}
//               height="100%"
//               className="slideshow-image-image"
//             />
//           </Link>
//           <Link to="/" className="slideshow-image-box">
//             {/* <h1 className="slideshow-image-text">Students</h1> */}
//             <img
//               src={Craft3}
//               alt={"Students"}
//               height="100%"
//               className="slideshow-image-image"
//             />
//           </Link>
//           <Link to="/students" className="slideshow-image-box">
//             {/* <h1 className="slideshow-image-text">Students</h1> */}
//             <img
//               src={Student2}
//               alt={"Students"}
//               height="100%"
//               className="slideshow-image-image"
//             />
//           </Link>
//         </Slider>
//       </div>
//     );
//   }
// }

// export default slideshowImage;
