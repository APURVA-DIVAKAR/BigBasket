import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

const GreenBottom = styled.p`
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #84c225;
  color: rgba(34, 34, 34, 0.87);
  display: inline-block;
  padding-bottom: 2px;
  font-size: 16px;
  font-weight: 600;
`;

const UL = styled.ul`
  list-style-type: none;
`;

const LI1 = styled.li`
  margin: 0;
  padding: 0;
  color: #676767;
  // margin-left: -15px;
  font-size: 14px;
  margin-bottom: 2px;
  cursor: pointer;
`;
const LI2 = styled.li`
  margin: 0;
  padding: 0;
  margin-left: 10px;
  margin-bottom: 2px;
`;

const LI3 = styled.li`
  margin: 0;
  padding: 0;
  margin-left: 20px;
  margin-bottom: 2px;
`;

const UnderLine = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid #666;
  width: 40px;
  cursor: pointer;
`;

const Span = styled.span`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #8f8f8f;
  cursor: pointer;
`;
const Standard = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: #222222;
`;
const Red = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #ba5252;
  font-weight: bold;
`;
const Left = styled.div`
  width: 20%;
  border-right: 1px solid #979797;
`;
const Middle = styled.div`
  width: 40%;
`;
const Right = styled.div`
  width: 40%;
`;

const WhiteBtn = styled.button`
  background: #fff;
  padding: 11px 20px;
  color: #666;
  border: 1px solid #979797;
  border-radius: 3px;
  cursor: pointer;
`;

const GreenBtn = styled.button`
  background: #84c225;
  padding: 11px 20px;
  color: #fff;
  border: 1px solid #84c225;
  border-radius: 3px;
  cursor: pointer;
`;
const BtnDiv = styled.div`
  display: flex;
  gap: 5px;
  margin: 20px 0;
`;

const TruckDiv = styled.div`
  color: #676767;
  font-size: 12px;
`;
const Truck = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 11px;

  border-radius: 0.3rem;
  overflow: hidden;
  padding: 10px 10px 10px;
  border: 1px solid #d0d0d0;
  cursor: pointer;
  :hover {
    box-shadow: 0 2px 2px 0 rgb(0 0 0 / 20%);
  }
`;

const InFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
const WrapperFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0;
`;

const MainImgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainImg = styled.img`
  width: 80%;
`;

const SubImgDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 2%;

  & > div {
    width: 12%;
    padding: 3px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    & > img {
      width: 100%;
      border-radius: 5px;
    }
  }
`;

export const Info = ({ data }) => {
  const toast = useToast();
  async function addtocart() {
    let id = JSON.parse(localStorage.getItem("data")).id;
    axios
      .post(`https://bigbasketbackend.herokuapp.com/cart/${id}`, { ...data, quantity: 1 })
      .then((r) => {
      // console.log(r)
      }
      );

    toast({
      title: "Product added.",
      description: "Product added to basket",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  }

  return (
    <Wrapper>
      {/* Left div */}
      <Left>
        <div>
          <GreenBottom>Category</GreenBottom>
          <UL>
            <LI1 style={{ fontWeight: 500 }}>Fruits & Vegetables</LI1>
            <LI1>
              <UL>
                <LI2>Fresh Vegetables</LI2>
                <LI2>
                  <UL>
                    <LI3>Beans, Brinjals & Okra</LI3>
                    <LI3>Cabbage & Cauliflower</LI3>
                    <LI3>Cucumber & Capsicum</LI3>
                    <LI3>Gourd, Pumpkin, Drumstick</LI3>
                    <LI3>Leafy Vegetables</LI3>
                    <LI3>Potato, Onion & Tomato</LI3>
                    <LI3>Root Vegetables</LI3>
                    <LI3>Specialty</LI3>
                  </UL>
                </LI2>
              </UL>
            </LI1>
          </UL>
        </div>
        <div>
          <GreenBottom>Brands</GreenBottom>
          <UL>
            <LI1>Fresho</LI1>
            <LI1>Fresho Potato, Onion & Tomato</LI1>
          </UL>
        </div>
      </Left>

      {/* Middle div */}
      <Middle>
        <MainImgDiv>
          <MainImg src={data.Image_url} alt="" />
        </MainImgDiv>
        <SubImgDiv>
          <div>
            <img src={data.Image_url} alt="" />
          </div>
          <div>
            <img src={data.Image_url} alt="" />
          </div>
          <div>
            <img src={data.Image_url} alt="" />
          </div>
          <div>
            <img src={data.Image_url} alt="" />
          </div>
        </SubImgDiv>
      </Middle>

      {/* Right div */}
      <Right>
        <div>
          <UnderLine>Fresho</UnderLine>
          <Standard>{data.Title}</Standard>
          <p style={{ padding: 0, margin: 0 }}>
            <Span>MRP: </Span>
            <s>
              <Span>Rs {data.Price + 20}.00</Span>
            </s>
          </p>
          <Standard>
            Price: Rs {data.Price}.00 <Span>(Rs.26.75/kg)</Span>
          </Standard>
          <Red>You Save: 27%</Red>
          <p style={{ padding: 0, margin: 0 }}>
            <Span>(Inclusive of all taxes)</Span>
          </p>
        </div>

        <BtnDiv>
          <WhiteBtn>1</WhiteBtn>
          <GreenBtn onClick={addtocart}>ADD TO BASKET</GreenBtn>
          <WhiteBtn>SAVE</WhiteBtn>
        </BtnDiv>

        <TruckDiv>
          <Truck>
            <i class="fa-solid fa-truck"></i>
            <p>Standard: Today 9:00AM - 11:00AM</p>
          </Truck>
          <div>Pack Sizes</div>
        </TruckDiv>

        <WrapperFlex>
          <Flex style={{ background: "#e6f3d3" }}>
            <div>
              <p>2 Kg</p>
            </div>
            <InFlex>
              <p>Rs {data.Price}</p>
              <p style={{ color: "#979797" }}>
                <s>MRP: Rs 73.14</s>
              </p>
              <p style={{ color: "#ba5252", fontWeight: "500" }}>24% Off</p>
            </InFlex>
            <div>
              <i
                style={{ fontSize: "20px", color: "#979797" }}
                class="fa-solid fa-check"
              ></i>
            </div>
          </Flex>

          <Flex>
            <div>
              <p>2 Kg</p>
            </div>
            <InFlex>
              <p>Rs {data.Price}</p>
              <p style={{ color: "#979797" }}>
                <s>MRP: Rs 73.14</s>
              </p>
              <p style={{ color: "#ba5252", fontWeight: "500" }}>23% Off</p>
            </InFlex>
            <div>
              <i
                style={{ fontSize: "20px", color: "#979797" }}
                class="fa-solid fa-check"
              ></i>
            </div>
          </Flex>

          <Flex>
            <div>
              <p>5 Kg</p>
            </div>
            <InFlex>
              <p>Rs 140.00</p>
              <p style={{ color: "#979797" }}>
                <s>MRP: Rs 73.14</s>
              </p>
              <p style={{ color: "#ba5252", fontWeight: "500" }}>23% Off</p>
            </InFlex>
            <div>
              <i
                style={{ fontSize: "20px", color: "#979797" }}
                class="fa-solid fa-check"
              ></i>
            </div>
          </Flex>

          <Flex>
            <div>
              <p>1 Kg</p>
            </div>
            <InFlex>
              <p>Rs 28.00</p>
              <p style={{ color: "#979797" }}>
                <s>MRP: Rs 73.14</s>{" "}
              </p>
              <p style={{ color: "#ba5252", fontWeight: "500" }}>23% Off</p>
            </InFlex>
            <div>
              <i
                style={{ fontSize: "20px", color: "#979797" }}
                class="fa-solid fa-check"
              ></i>
            </div>
          </Flex>
        </WrapperFlex>
      </Right>
    </Wrapper>
  );
};
