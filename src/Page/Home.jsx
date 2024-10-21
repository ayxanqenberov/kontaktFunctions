import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/Api/ApiSlice';
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { CiZoomIn } from "react-icons/ci";
import '../Page/home.css';
import { addToBasket } from '../features/Basket/BasketSlider';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.value);
  const status = useSelector((state) => state.data.status);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProducts());
    }
  }, [status, dispatch]);

  const getBasket = (product) => {
    dispatch(addToBasket(product));
  };

  const getBasketPage = () => {
    navigate("/basket");
  };

  const goToDetailPage = (productId) => {
    navigate(`/detail/${productId}`); 
  };

  return (
    <div id='productss'>
      <div className="basket">
        <SlBasket onClick={getBasketPage} />
      </div>
      {products.map((product) => (
        <div key={product.id}>
          <div className="product">
            <div className="imgs">
              <img
                className="img"
                src={product.image}
                alt={product.title}
              />
              <div className="featurePart">
                <div>
                  <SlBasket onClick={() => getBasket(product)} />
                </div>
                <div>
                  <FaRegHeart />
                </div>
                <div>
                  <CiZoomIn />
                </div>
              </div>
            </div>

            <a onClick={() => goToDetailPage(product.id)}>{product.title}</a>
            <div className="price">
              <span>{`$${product.firstPrice}`}</span>
              <span>${product.lastPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
