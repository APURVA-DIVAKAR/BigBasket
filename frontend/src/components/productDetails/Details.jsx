import React from "react";
import styled from "styled-components";

export const HeadLine = styled.p`
  font-size: 24px;
  color: #222222;
  margin-top: 100px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const Container = styled.div`
  border-bottom: 1px solid #eee;
  padding: 0 15px;
  padding-bottom: 20px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;

  & i {
    color: #999;
    font-size: 24px;
  }
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  padding: 0 15px;
  width: 90%;
  color: #666;
  font-size: 13px;
`;
export const Details = ({ data }) => {
  return (
    <div>
      <HeadLine>{data.Title}</HeadLine>
      <div>
        <Container>
          <Flex>
            <p>About the Product</p>
            <i class="fa-solid fa-plus"></i>
          </Flex>
          <div>
            <Ul>
              <li>{data.Description}</li>
            </Ul>
          </div>
        </Container>

        <Container>
          <Flex>
            <p>Storage and Uses</p>
            <i class="fa-solid fa-plus"></i>
          </Flex>
          <div>
            <Ul>
              <li>Store in a cool dry place, need not refridgerate.</li>
              <li>
                Freezing onions, soaking them under water and keeping the root
                intact before chopping are some methods to reduce tears while
                chopping them.
              </li>
            </Ul>
          </div>
        </Container>

        <Container>
          <Flex>
            <p>Other Product Info</p>
            <i class="fa-solid fa-plus"></i>
          </Flex>
          <div>
            <Ul>
              <li>EAN Code: 8400755370205</li>
              <li>Country of origin: India</li>
            </Ul>
          </div>
        </Container>
      </div>
    </div>
  );
};
