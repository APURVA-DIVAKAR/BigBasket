import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Details } from "./Details";
import { Info } from "./Info";
import { Review } from "./Review";
import { Similar } from "./Similar";

const Wrapper = styled.div`
  width: 82%;
  margin: auto;
  margin-top: 40px;
`;
export const ProductDetails = () => {
  const [data, setData] = React.useState([]);

  const path = useLocation().pathname.split("/")[2];


  useEffect(() => {
    axios.get(`https://bigbasketbackend.herokuapp.com/products/${path}`).then((res) => {
      let data = res.data;
      setData(data);
    });
  }, []);
  return (
    <Wrapper>
      <Info data={data} />
      <Details data={data} />
      <Review />
      <Similar />
    </Wrapper>
  );
};
