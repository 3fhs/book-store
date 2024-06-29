import { useContext, useState } from "react";
import "./book-slider.css";
import Rating from "./Rating";
import Modal from "../modal/Modal";
import StoreContext from "../../context/StoreContext";

const BookSlider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(null);
  const { addToCart } = useContext(StoreContext);

  // Handle Click
  const HandelClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 0);
    } else {
      setSlideIndex(slideIndex < data.length ? slideIndex + 1 : data.length);
    }
  };

  // Handle Modal
  const HandelModal = (book) => {
    setOpenModal(true);
    setBookData(book);
    console.log(book);
  };

  return (
    <div className="book-slider-container">
      <i
        className="bi bi-chevron-left book-slider-arrow-left"
        onClick={() => HandelClick("left")}
      ></i>

      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h3 className="book-slide-item-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slider-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              <i
                className="bi bi-eye-fill"
                onClick={() => HandelModal(item)}
              ></i>
              <i
                className="bi bi-cart-plus"
                onClick={() => addToCart({ ...item, quantity: 1 })}
              ></i>
            </div>
          </div>
        ))}
      </div>

      <i
        className="bi bi-chevron-right book-slider-arrow-right"
        onClick={() => HandelClick("right")}
      ></i>
      {openModal && <Modal bookData={bookData} setOpenModal={setOpenModal} />}
    </div>
  );
};

export default BookSlider;
