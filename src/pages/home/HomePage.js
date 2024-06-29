import React from "react";
import Slider from "../../componentes/slider/Slider";
import Services from "../../componentes/services/Services";
import HeadingTitle from "../../componentes/heading-title/HeadingTitle";
import BookSlider from "../../componentes/book-slider/BookSlider";
import { books } from "../../data/books";

function HomePage() {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title="Most Gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Best Sellary" />
      <BookSlider data={books} />
      <HeadingTitle title="Most Wished For" />
      <BookSlider data={books} />
    </div>
  );
}

export default HomePage;
