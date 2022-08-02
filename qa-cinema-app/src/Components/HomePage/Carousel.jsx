import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./Carousel.css"

const CarouselPage = ({ image1, image2, image3, image4 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src: image1,
      altText: "button to show films",
      caption: "The Dark Knight",
    },
    {
      src: image2,
      altText: "Slide 2",
      caption: "Back to the Future",
    },
    {
      src: image3,
      altText: "Slide 3",
      caption: "Light Year",
    },
    {
      src: image4,
      altText: "Slide 3",
      caption: "Pulp Fiction",
    },
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="image-carousel"
          src={item.src}
          alt={item.altText}
          style={{ marginLeft: "500px", width: "900px" }}
        />
        <CarouselCaption captionText={item.caption} />
        {/* Movie Name={item.caption} */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      pause="false"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};
export default CarouselPage;
