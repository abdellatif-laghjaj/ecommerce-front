import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Product added to cart');

const ProductWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const WhiteBox = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 100px;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  color: inherit;
  text-decoration: none;
  margin: 0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
  padding: 20px;
`;

const PriceRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 10px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + _id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img
            rc={images?.[0]} 
            alt=""
          />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Title href={url}>{title.length > 30 ? title.substring(0, 30) + '...' : title}</Title>
          <Price>{price}dh</Price>
        </div>
        <PriceRow>
          <Button block onClick={() => {notify(); addProduct(_id)}} primary outline>
            Add to cart
          </Button>
          <Toaster/>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
