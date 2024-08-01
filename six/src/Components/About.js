import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <center>
                        <img src="https://t4.ftcdn.net/jpg/05/06/80/77/360_F_506807709_dVXx2UkBR0EHTAuBl1jFBi9mQs43NK8a.jpg" style={{marginTop:"60px"}}/>
                    </center>
                </div>
                <div>
                <center style={{marginTop:"150px"}}>
                <h4 style={{color:"blue"}}>What’s a film synopsis?</h4>
                    {/* <h3 style={{ textAlign: "center" ,marginTop:"60px",color:"blue"}}>What’s a film synopsis?</h3> */}
                    <h5 style={{ textAlign: "center", marginTop:"30px"}}>
                    <p> A film synopsis is typically a one-page document that summarizes your film. </p>
                    <p>It contains the film's title, genre, logline (a one-sentence summary), and a five-paragraph explanation of the film's storyline,</p>
                    <p> major plot points, and key characters.</p>
                    </h5>
                    </center>
                </div>
                <div>
                    <center style={{marginTop:"50px"}}>
                    <h4 style={{color:"blue"}}>Who You Need On Your Production Team</h4>
                    <h3 style={{color:"green" ,marginTop:"30px"}}>Screenwriter</h3>
                    <h5>The screenwriter writes the script for your film, crafting the entire story: characters, dialogue, <br></br>settings, and everything in between. Once shooting begins, there will inevitably be<br></br> moments that don’t occur exactly as it was meant to according to the script. That’s natural.<br></br> But still, every film needs a place to start, and the script is that place. <br></br>Unlike the rest of your film production team, if the screenwriter doesn’t also hold other main roles in film production, 
                        <br></br>he or she might not be very involved once shooting begins.</h5>
                    </center>

                </div>

                <div>
                    <center style={{marginTop:"50px"}}>
                    <h3 style={{color:"green" ,marginTop:"30px"}}>Director</h3>
                    <h5>Of course, in every film production team there is the director.  <br></br>settings, and everything in between. Once shooting begins, there will inevitably be<br></br> moments that don’t occur exactly as it was meant to according to the script. That’s natural.<br></br> But still, every film needs a place to start, and the script is that place. <br></br>Unlike the rest of your film production team, if the screenwriter doesn’t also hold other main roles in film production, 
                        <br></br>he or she might not be very involved once shooting begins.</h5>
                    </center>

                </div>
                <div>
                    <center style={{marginTop:"100px"}}>
                    <h3 style={{color:"green" ,marginTop:"70px"}}>Actors</h3>
                    <h5>Finding the right actors to bring your characters to life is a crucial element to making a great film.<br></br>
The director will often work with the actors on your film production team to make sure that<br></br> they are bringing the necessary emotions to their performances in a scene.<br></br>
There are many ways to find actors. If you don’t know any actors, Backstage.com is a popular <br></br>talent databasethat you can get for six months free.</h5>
                    </center>

                </div>
                <div>
                    <center>
                    <h3>Movie Reviews</h3>
                    <img src="https://www.bibguru.com/blog/img/write-review-movie-1400x700.png" style={{width:"600px" , height:"400px"}}/>
                    </center>
                </div>
        
        
            </Slider>
        </div>
    );
}


export default About;



// // import React from 'react';
// // import { Carousel } from 'react-bootstrap';

// // const about = () => {
// //     return (
// //         <Carousel>
// //             <Carousel.Item>
// //                 <img
// //                     classNameName="d-block w-100"
// //                     src="https://t4.ftcdn.net/jpg/05/06/80/77/360_F_506807709_dVXx2UkBR0EHTAuBl1jFBi9mQs43NK8a.jpg"
// //                     alt="First slide"
// //                 />
// //                 <Carousel.Caption>
// //                     <h3>First slide label</h3>
// //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// //                 </Carousel.Caption>
// //             </Carousel.Item>
// //             <Carousel.Item>
// //                 <img
// //                     classNameName="d-block w-100"
// //                     src="https://t4.ftcdn.net/jpg/05/06/80/77/360_F_506807709_dVXx2UkBR0EHTAuBl1jFBi9mQs43NK8a.jpg"
// //                     alt="Second slide"
// //                 />
// //                 <Carousel.Caption>
// //                     <h3>Second slide label</h3>
// //                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
// //                 </Carousel.Caption>
// //             </Carousel.Item>
// //         </Carousel>
// //     );
// // }

// // export default about;


// import React from "react";

// const About = () => {
//     return (

//         <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <img src="https://imageio.forbes.com/specials-images/imageserve/6109550f1aa8564670194ad4/Close-up-smiling-businesswoman-holding-computer-tablet--looking-to-side/960x0.jpg?format=jpg&width=960" className="d-block w-100" alt="..." />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="https://imageio.forbes.com/specials-images/imageserve/6109550f1aa8564670194ad4/Close-up-smiling-businesswoman-holding-computer-tablet--looking-to-side/960x0.jpg?format=jpg&width=960" className="d-block w-100" alt="..." />
//                 </div>
//                 <div className="carousel-item">
//                     <img src="https://imageio.forbes.com/specials-images/imageserve/6109550f1aa8564670194ad4/Close-up-smiling-businesswoman-holding-computer-tablet--looking-to-side/960x0.jpg?format=jpg&width=960" className="d-block w-100" alt="..." />
//                 </div>
//             </div>
//             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//             </button>
//             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//             </button>
//         </div>
//     )
// };
// export default About;
