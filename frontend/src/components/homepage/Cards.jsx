import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Image,
  HStack,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Input,
  Button,
} from "@chakra-ui/react";
import Carousel from "react-elastic-carousel";
// import Item from 'react-elastic-carousel'
import db from "./db.json";
import { ImTruck } from "react-icons/im";
import { RiShoppingBasket2Fill } from "react-icons/ri";

const Cards = () => {
  const breakPoints = [
    { width: 200, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, itemsToShow: 2, itemsToScroll: 2 },
    { width: 500, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 5, itemsToScroll: 5 },
  ];

  var getInitials = function (string) {
    var names = string.split(" ");
    var initials;
    // console.log(names);
    if (names.length > 2) {
      initials = names.slice(0, 1).join(" ");
    } else if (names.length >= 0) {
      initials = names.join(" ");
    }
    // initials = names[0].substring(0, 1).toUpperCase();

    // if (names.length > 1) {
    //   let shortName = []
    //     for(let i = 0; i < names.length; i++) {
    //       let x= ""
    //       if(names[i]!==" "){
    //         x+=names[i]
    //       }
    //       else{
    //         shortName.push(x)
    //         x=""
    //       }

    //     }
    //     initials =  shortName.slice(0,2)
    // }
    return initials;
  };

  let data = db.slice(0, 11);

  return (
    <div style={{ margin: "1% 7%", border: "solid gainsboro 1px" }}>
      <Carousel breakPoints={breakPoints} itemPadding={[0, 0]} itemsToShow={3}>
        {data.map((item) => (
          <Box
            _hover={{
              boxShadow: "2xl",
            }}
            minWidth="12rem"
            border="1px"
            borderColor="gray.400"
            p="1.5rem"
            // ml='2px'
            key={item.ObjectId}
          >
            <VStack w={"9rem"} lineHeight="15px">
              <Text
                w="100%"
                fontSize="12px"
                fontWeight="bold"
                color="red.400"
                p="2px"
                boxShadow="lg"
                textAlign="right"
              >
                GET {Math.floor(Math.random() * 30)}% OFF
              </Text>
              <Image src={item.Image_url} objectFit="contain" />
              <Text textAlign="left">{getInitials(item.Title)}</Text>
              <VStack w="120%" bg="gray.50">
                <HStack textAlign="left" spacing={0}>
                  {/* <VStack> */}
                  <Text
                    textAlign="left"
                    ml="-25px"
                    fontSize="11px"
                    style={{
                      textDecoration: "line-through",
                      textAlign: "left",
                    }}
                  >
                    MRP:Rs {`${item.Price + Math.floor(Math.random() * 30)}`}
                  </Text>
                  <Text as="h6">Rs {item.Price}</Text>
                  {/*
            </VStack> */}
                </HStack>
                <HStack letterSpacing="0" mt="-10px">
                  <ImTruck
                    style={{
                      fontSize: "2.5rem",
                      ":hover": {
                        color: "green.400",
                      },
                    }}
                  />
                  <Text fontSize="10px" textAlign="left">
                    Standard Delivery: Today 9:00AM - 11:00AM
                  </Text>
                </HStack>
                <HStack>
                  <InputGroup size="sm">
                    <InputLeftAddon children="Qty" />
                    <Input placeholder="1" />
                  </InputGroup>
                  <Button
                    rightIcon={<RiShoppingBasket2Fill />}
                    backgroundColor="yellow.300"
                    _hover={{
                      backgroundColor: "yellow.200",
                    }}
                    variant="outline"
                  >
                    ADD
                  </Button>
                </HStack>
              </VStack>
            </VStack>
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default Cards;
