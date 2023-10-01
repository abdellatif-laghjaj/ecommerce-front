import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Display one product per row by default */
  gap: 20px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* Display two products per row on larger screens */
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr; /* Display four products per row on even larger screens */
  }
`;

export default function ProductsGrid({ products }) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 &&
        products.map((product) => (
          <ProductBox key={product._id} {...product} />
        ))}
    </StyledProductsGrid>
  );
}