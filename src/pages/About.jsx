import { Box, Button, Image, Text } from "@chakra-ui/react";

export const About = () => {
  return (
    <>
      <Box>
        <Box>
          <Image
            w={"100%"}
            h={"auto"}
            src={
              "https://www.mbachaiwala.com/wp-content/uploads/2023/04/ABOUT-2-1-980x429.webp"
            }
          />
        </Box>

        <Box bg={"#fff000"} pt={"20px"} pb={"20px"}>
          <Box
            textAlign={"center"}
            display={["column", "column", "flex", "flex"]}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box>
              <Text
                mb={"0px"}
                color={"#EE2B7B"}
                fontSize={"30px"}
                fontWeight={800}
              >
                100+ <span className="abt-txt">Outlets</span>
              </Text>
            </Box>
            <Box>
              <Image
                w={"110px"}
                src={
                  "https://www.mbachaiwala.com/wp-content/uploads/2023/03/chai-1.png"
                }
              />
            </Box>
            <Box>
              <Text
                mt={"0px"}
                color={"#EE2B7B"}
                fontSize={"30px"}
                fontWeight={800}
              >
                100+ <span className="abt-txt">Brand Partners</span>
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <h1 className="hd-1">Welcome To</h1>
            <h1 className="hd-2">MBA CHAI WALA</h1>
          </Box>
          <Box
            bg={"#ee2a7b"}
            w={"40%"}
            ml={"auto"}
            mr={"auto"}
            pl={"10px"}
            pr={"10px"}
          >
            <Box>
              <Text
                pt={"10px"}
                pb={"10px"}
                m={"0px"}
                color={"#FFFFFF"}
                fontSize={"25px"}
                fontWeight={800}
              >
                HAR GHAR STARTUP, GHAR GHAR STARTUP
              </Text>
            </Box>
          </Box>
          <Box w={'80%'} ml={'auto'} mr={'auto'}>
            <Text textAlign={'center'} wordBreak={'break-word'} color={'#555555'} lineHeight={'1.3rem'}>
              <strong>MBA CHAI WALA</strong> is an Indian café chain, with the objective of
              creating a positive perception of tea as a catalyst for
              inspiration. We aim to dispel the misconception associated with
              tea as merely a beverage, by positioning it as a tool for
              discussions on business plans, strategizing a successful future
              with peers, and working towards achieving goals. We strive to make
              a meaningful impact on the lives of millions of people through the
              inspiration for progress.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
//FASTEST GROWING CHAI CAFE CHAIN
//From Unknown to an Iconic Brand
//It took us a very long journey and a great hustle. Achieving these heights was not easy at all.

//Read More
