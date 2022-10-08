import React, { useEffect, useState } from "react";

import {
  Box,
  Table,
  Thead,
  Tbody,
  Flex,
  Tr,
  Th,
  Td,
  Button,
  TableContainer,
  Text,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router";

export const Cart = () => {
  const navigate = useNavigate();
  let [cart, setcart] = useState([]);
  let [state, setstate] = useState(1);
  let id = JSON.parse(localStorage.getItem("data")).id;
  // console.log(id);
  useEffect(() => {
    axios
      .get(`https://bigbasketbackend.herokuapp.com/cart/${id}`)
      .then((r) => setcart(r.data.cart));
  }, []);

  const handleInc = (e) => {
    // let productId = e._id;
    setstate((e) => e - 1);

    // axios
    //   .post(`http://localhost:8080/cart/updateone`, {
    //     id,
    //     productId,
    //   })
    //   .then((r) => console.log(r));
  };
  const handleDec = (e) => {
    // let productId = e._id;

    // axios
    //   .post(`http://localhost:8080/cart/updatemin`, {
    //     id,
    //     productId,
    //   })
    //   .then((r) => console.log(r));
    setstate((e) => e + 1);
  };
  //   let total = cart.length ? cart.reduce((a,b) => {
  //    return Number(a.Price) + Number(b.Price)
  //   },0):0
  //  console.log(cart)

  let saved = 0;
  let total = 0;
  return (
    <Box width="100%">
      {/* <Topnavbar /> */}
      <Box width="75%" m={"auto"}>
        <Box
          width="100%"
          margin="auto"
          p="1rem"
          mt="1.5rem"
          border="1px solid #e8e8e8"
          // border="1px solid red"
        >
          <Text
            fontSize={"24px"}
            textAlign={"left"}
            fontWeight={300}
            borderBottom={"1px solid #e8e8e8"}
            pb={"6px"}
          >
            {/* YOUR BASKET {cart?.length} */}
            YOUR BASKET ({cart.lenth}item)
          </Text>
          <TableContainer width="99%">
            <Table variant="simple">
              <Thead width="99%">
                <Tr
                  bg={"#555555"}
                  color={"white"}
                  justifyContent={"space-between"}
                >
                  <Th color={"white"}>ITEM DESCRIPTION</Th>
                  <Th color={"white"}>UNIT PRICE</Th>
                  <Th color={"white"}>QUANTITY</Th>
                  <Th color={"white"}>SUBTOTAL</Th>
                  <Th color={"#555555"}>......</Th>
                  <Th color={"black"} bg={"#c6cc74"}>
                    Saving
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {cart?.map((e) => {
                  {
                    saved =
                      saved +
                      (Math.floor(e.Price) -
                        Math.floor(e.Price - (10 * e.Price) / 100));

                    total =
                      total +
                      Math.floor(e.Price - (10 * e.Price) / 100) * state;
                  }

                  return (
                    <Tr>
                      <Td fontSize={"12px"}>
                        {e.Title}
                        <br></br>
                      </Td>
                      <Td>
                        <br></br>
                        <span>Rs. {e.Price}.00</span>
                      </Td>
                      <Td>
                        <Button
                          onClick={(e) => handleInc(e)}
                          variant={"outline"}
                          m={"2px"}
                        >
                          -
                        </Button>
                        <Button variant={"outline"} m={"2px"}>
                          {state}
                        </Button>
                        <Button
                          onClick={(e) => handleDec(e)}
                          variant={"outline"}
                          m={"2px"}
                        >
                          +
                        </Button>
                      </Td>
                      <Td>
                        Rs {Math.floor(e.Price - (10 * e.Price) / 100) * state}
                        .00
                      </Td>
                      <Td></Td>

                      <Td>
                        {" "}
                        Rs{" "}
                        {Math.floor(
                          e.Price - Math.floor(e.Price - (10 * e.Price) / 100)
                        )}
                        .00
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>
          <Flex justifyContent={"space-between"} mt={8}>
            <Box width={"45%"}>
              <Button variant={"outline"} float={"left"}>
                Empty Basket
              </Button>
            </Box>
            <Box width={"45%"} border="1px solid #e8e8e8 ">
              <Flex
                justifyContent={"space-between"}
                p="1rem"
                textAlign={"left"}
                fontSize="14px"
                fontWeight={400}
              >
                <Box>
                  <Text>Delivery Charges</Text>
                  <Text>Rs. 0</Text>
                </Box>
                <Box>
                  {/* <Text>Rs</Text> */}
                  {/* <Text>***</Text> */}
                </Box>
                <Box borderLeft={"1px solid #e8e8e8"} color="red" pl="2px">
                  <Text>You saved!</Text>
                  <Text>Rs {saved}.00</Text>
                </Box>
              </Flex>
              <Flex
                textAlign={"left"}
                border={"1px solid #e8e8e8"}
                padding="2rem"
                justify={"space-between"}
              >
                <Heading as={"h6"} fontWeight="350">
                  TOTAL
                </Heading>
                <Heading as={"h6"} fontWeight="350">
                  ₹{total}.00
                </Heading>
              </Flex>
              <Box float={"right"}>
                <Button
                  p="30px 55px"
                  fontSize="20px"
                  bg="linear-gradient(to bottom, #ffcc99 0%, #ffff99 100%)"
                  variant={"outline"}
                  _hover={{
                    bg: "linear-gradient(to bottom, #ffff99 0%, #ffcc99 100%)",
                  }}
                  onClick={() => {
                    if (cart.length !== 0) {
                      localStorage.setItem("total", total);
                      navigate("/address");
                    } else {
                      alert(
                        "Your Cart is Empty, Please Add items into cart and after check it out"
                      );
                      // navigate("/product");
                    }
                  }}
                >
                  {" "}
                  CHECKOUT
                </Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
