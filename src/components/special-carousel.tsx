// src/components/SpecialCarousel.tsx

import { Carousel } from 'antd';
import './special-carousel.css';

type SpecialItem = {
    id: number;
    name: string;
    image: string;
};

type Props = {
    items: SpecialItem[];
};

const SpecialCarousel = ({ items }: Props) => {
    return (
        <div className="special-carousel-wrapper">
            <h2 className="carousel-title">Today’s Special</h2>
            {/* <Carousel dots centerMode infinite slidesToShow={1} className="carousel"> */}
            <Carousel autoplay autoplaySpeed={2000} dots infinite centerMode slidesToShow={1} className="carousel">
            {items.map((item) => (
                <div key={item.id} className="carousel-card">
                    <img src={item.image} alt={item.name} className="carousel-img" />
                    <p className="carousel-label">{item.name}</p>
                </div>
            ))}
        </Carousel>
    </div >
  );
};

export default SpecialCarousel;
