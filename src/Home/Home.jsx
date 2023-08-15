import './Home.css';
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';

const Home = ({ NewNoteOpen }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    const slides = [
        {
            name: 'Creativity',
            image: 'https://cdn-icons-png.flaticon.com/128/2857/2857527.png'
        },
        {
            name: 'Motivation',
            image: 'https://cdn-icons-png.flaticon.com/512/8226/8226086.png'
        },
        {
            name: 'Inspiration',
            image: 'https://cdn-icons-png.flaticon.com/512/1454/1454948.png'
        }, {
            name: 'Success',
            image: 'https://cdn-icons-png.flaticon.com/512/819/819544.png'
        }, {
            name: 'Skills',
            image: 'https://cdn-icons-png.flaticon.com/512/3095/3095221.png'
        }, {
            name: 'Desighn',
            image: 'https://cdn-icons-png.flaticon.com/512/2421/2421260.png'
        }
    ];




    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };



    return (
        <div className="HomeContainer">
            <div className="HomeContainerMainTextCont">
                <p>  Use your the best feelings   &darr;</p>


            </div>
            <div className="HomeSliderContainer">
                <div className="HomeSliderNavBtn" onClick={handlePrevSlide} >
                    <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" />


                </div>
                <div className="HomeSlideCardContainer">

                    <div className="HomeSlideCard" data-aos='fade-down'>
                        <p className='HomeSlideCardText'>{slides[currentSlide].name}</p>
                        <img className='HomeSliderCardImage' src={slides[currentSlide].image} alt="" />

                    </div>

                </div>
                <div className="HomeSliderNavBtn NavBtnSecond" onClick={handleNextSlide}>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32213.png" alt="" />


                </div>





            </div>
            <div className="HomeLigaContainer">
                <p>01</p>


                <div className="HomeLigaCard" >
                    <img src="https://cdn1.iconfinder.com/data/icons/education-vol-1-32/32/14-512.png" alt="" />
                    <span>Start</span>

                </div>
                <p>02</p>
                <div className="HomeLigaCard" >
                    <img src="https://cdn1.iconfinder.com/data/icons/education-vol-1-32/32/14-512.png" alt="" />
                    <span>Creativity</span>


                </div>
                <p>03</p>

                <div className="HomeLigaCard" >
                    <img src="https://cdn1.iconfinder.com/data/icons/education-vol-1-32/32/14-512.png" alt="" />
                    <span>Success</span>

                </div>



            </div>
            <footer className="HomeFooter">
                <p className='HomeFooterText'>Just use your creation <span> &rarr;</span></p>
                <button className='HomeFooterBtn' onClick={NewNoteOpen}>Go</button>

            </footer>


        </div>

    );
};

export default Home;
