import {
  Box,
  Image,
  Text
} from "@chakra-ui/react"; 
import img8 from "../assest/main-image.png";
import img9 from "../assest/in-the-news.gif";
import CountUp from 'react-countup'
import {BsYoutube} from 'react-icons/bs';
import {FaFacebookF,FaLinkedinIn,FaInstagram} from 'react-icons/fa'
import {Link} from 'react-router-dom';
export const Home = () => {
  return (
    <>
    <Box  className='footer' alignItems={'center'} pt={'100px'}>
      <Box textAlign={'center'} display={['column','column','flex','flex']} alignItems={'center'} justifyContent={['center','center','space-around','space-around']} >
        <Box >
          <Text ml={'auto'} mr={'auto'} w={['200px','400px','550px','550px']} textShadow={'0.08em 0.08em 0em rgba(0,0,0,0.4)'} fontSize={'42px'} color={'yellow'} fontWeight={800} wordBreak={'break-word'}>Hamara Apni Chai KI Dukan #MBA CHAI WALA</Text>
          <Text ml={'auto'} mr={'auto'} w={['200px','400px','550px','550px']} color={'#fff'} fontWeight={600} fontSize={'16px'} textShadow={'0.08rem 0.08rem 0rem black'}  wordBreak={'break-word'}>Journey of how an MBA dropout became India ka Chai Wala by forming a company that is a reason behind millions of people to smile every day by its noble deeds, versatile vibes, and Garma-Garam Maseladar Chai.</Text>
          <Box display={'flex'} flexWrap={'wrap'} justifyContent={'center'} >
                    <Link to={'https://www.facebook.com/mbachaiwalaind'}><Box mr={'5px'} _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaFacebookF color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                    <Link to={'https://www.youtube.com/@PrafullMBACHAIWALA'}><Box mr={'5px'} _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><BsYoutube color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                    <Link to={'https://www.linkedin.com/company/mbachaiwala/'}><Box mr={'5px'} _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaLinkedinIn color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                    <Link to={'https://www.instagram.com/mbachaiwalaind/?igshid=YmMyMTA2M2Y%3D'}><Box mr={'5px'} _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaInstagram color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                </Box>
        </Box>
        <Box>
        <Image className="main-image" src={img8} w={'250px'}/>
        </Box>
      </Box>
      
    </Box>
    <Box display={'flex'} flexWrap={'wrap'} bg={'yellow'} justifyContent={'space-around'}>
      <Box display={'flex'} flexDirection={'column'} textAlign={'center'}>
      <Text display={'contents'} fontSize={'72px'} color={'#EE2B7B'} fontWeight={700}><CountUp start={0} end={100} suffix={"+"}/></Text>
      <Text display={'contents'} fontSize={'18px'} color={'gray'} fontWeight={600}>Outlets Serving</Text>
      </Box>
      <Box w={'354px'} bg={'#fff'} textAlign={'center'} borderRadius={'50px'} mt={'5px'} mb={'5px'}>
        <Image w={'134px'} pt={'40px'} pb={'40px'}  src={'http://www.mbachaiwala.com/wp-content/uploads/2023/04/1664183028905.png'}/>
      </Box>
      <Box display={'flex'} flexDirection={'column'} textAlign={'center'}>
      <Text display={'contents'} fontSize={'72px'} color={'#EE2B7B'} fontWeight={700}><CountUp start={0} end={100} suffix={"+"}/></Text>
      <Text display={'contents'} fontSize={'18px'} color={'gray'} fontWeight={600}>Outlets Serving</Text>
      </Box>

    </Box>
    <Box display={['column','column','flex','flex']} justifyContent={'center'} flexWrap={'wrap'}>
      
      
      
      <Box ml={['0px','0px','10px','10px']} display={'inline'} className="fade-in-left">
        <Image w={['400px','400px','400px','400px']} src={'http://www.mbachaiwala.com/wp-content/uploads/2023/03/Prafull-Sir-copy-1.png'}/>
        </Box>
      
      
      
      <Box w={['100%','100%','100%','60%']} ml={['0px','0px','15px','15px']} display={'inline'} className="animate__fadeInRight" >
        <Text pl={'10px'} mb={'0px'} fontSize={'50px'} color={'#EE2B7B'} fontWeight={800}>MR. PRAFULL BILLORE</Text>
        <Text pl={'10px'} fontSize={'18px'} color={'gray'} fontWeight={800}>FOUNDER MBA CHAI WALA PVT.LTD</Text>
        <Box ml={'10px'} borderBottom={'10px solid yellow'} w={'300px'} borderRadius={'10px'}></Box>
        <Text p={'10px'} fontFamily={'monospace'} lineHeight={'20px'} color="gray" wordBreak={'break-word'}>
        Mr. Prafull Billore, the Founder of MBA CHAI WALA PVT. LTD. is an icon among the youth of the nation. His unwavering determination and ambitious spirit have propelled him to represent India on both national and international platforms.

He faced numerous challenges and overcame hurdles with persistent effort and hard work, undeterred by any setback, he turned his passion towards entrepreneurship and established a small tea stall that has now become the iconic MBA CHAI WALA, representing Mr. Prafull Billore’s vision for progress.

With the mantra “Har Ghar Start-up, Ghar Ghar Start-up,” Mr. Prafull Billore envisions cultivating a mindset driven by dreams and ambitions. Mr. Prafull Billore’s vision is to inspire and stimulate a growth-oriented mindset among the people of our nation. We believe that tea can be an avenue for productive discussions, strategic planning, and ambitious pursuits, driving the advancement of our society.

With unwavering commitment and the support of his brother and Co-Founder, Mr. Vivek Billore, Mr. Prafull Billore has tirelessly worked day and night to establish MBA CHAI WALA PVT. LTD., the most iconic chai chain in India. Through our efforts to change the perception of chai to one of inspiration, we strive to make a meaningful impact and exude an aura of progress & growth.
        </Text>
      </Box>
     
    </Box>

    <Box  display={['column','column','flex','flex']} justifyContent={'center'} flexWrap={'wrap'} bg={'#fff883'} alignItems={'center'}>
      
      
    <Box w={['100%','100%','100%','60%']} ml={['0px','0px','15px','15px']} display={'inline'} className="animate__fadeInLeft" >
        <Text pl={'10px'} mb={'0px'} fontSize={'50px'} color={'#EE2B7B'} fontWeight={800}>MR. VIVEK BILLORE</Text>
        <Text pl={'10px'} fontSize={'18px'} color={'gray'} fontWeight={800}>CO-FOUNDER MBA CHAI WALA PVT.LTD</Text>
        <Box ml={'10px'} borderBottom={'10px solid #EE2B7B'} w={'300px'} borderRadius={'10px'}></Box>
        <Text p={'10px'} fontFamily={'monospace'} lineHeight={'30px'}  wordBreak={'break-word'} fontWeight={600} fontSize={'16px'}>
        Mr. Vivek Billore, the Co-Founder of MBA CHAI WALA PVT. LTD., is a visionary leader and a spiritual guru. His unwavering support and contributions have been pivotal in the success of MBA CHAI WALA, serving as the glue that holds the organization together.

As an accomplished Angel Investor, Spiritual Guru, and Public Speaker, Mr. Vivek Billore has made significant strides in guiding individuals through his expertise in astrology, helping them understand the impact of planetary positioning on their lives. He is an inspiration to millions of people, encouraging them to pursue their dreams with zeal and determination.

Mr. Vivek Billore’s passion for spreading the richness of our culture across the globe is evident in his single-handed launch of “Riddhidev”. A core goal of Riddhidev is to introduce and ignite curiosity among the people to learn more about our cultural heritage.

Mr. Vivek Billore has worked diligently to grow MBA CHAI WALA and continuously strives to elevate to new heights. He has traversed a long path, navigating through obstacles and surmounting challenges with resilience and tenacity.
        </Text>
      </Box>
      <Box ml={['0px','0px','60px','60px']} display={'inline'} className="animate__fadeInRight">
        <Image w={'400px'} src={'https://www.mbachaiwala.com/wp-content/uploads/2023/04/VB-Sir-01-01-1.png'}/>
        </Box>


        
    </Box>
    <Box bg={'#fff100'} pt={'50px'} pb={'50px'}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
              <Box>
                <Text textAlign={'center'} fontWeight={800} fontStyle={'italic'} textTransform={'uppercase'} fontSize={'44px'} color={'#ee2a7b'} m={'0px'}>in the news</Text>
                <Text textShadow={'0.02rem 0.02rem 0rem black'} w={['auto','400px','500px','500px']} textAlign={'center'}  wordBreak={'break-word'}  fontSize={'20px'} color={'#ed1e79'} fontWeight={400}>Explore MBA Chai Wala’s Masaledar coverage along with your Garma- Garam cup of Chai brought to you by giant media houses like BRUT, BBC, TOI, TEDx, Josh Talks, ScoopWhoop & more.</Text>
              </Box>
              <Box>
                <Image src={img9} w={['100%','100%','500px','500px']} />
              </Box>
            </Box>
        </Box>
      {/* <VStack
        
        className="box"
        minH={"100vh"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
      >
        <Text
          fontSize={["35px", "35px", "70px", "70px"]}
          color={"#FFFFFF"}
          fontWeight={400}
          fontFamily={"Raleway,sans-serif"}
        >
          Welcome <br /> To <b id="mba">MBA CHAI WALA</b>
        </Text>

        <Text
          mt={"-42px"}
          width={["300px", "400px", "400px", "500px"]}
          color={"#FFFFFF"}
          fontFamily={"Jost"}
          fontSize={"18px"}
          _hover={"none"}
        >
          MBA CHAI WALA is an iconic brand that serves garma-garam chai & finger
          licking snacks with a tinge of inspiration that encourages people to
          forge their own identities.
        </Text>
        <Box>
          <Button
            background={"#EE2B7B"}
            color={"#FFFFFF"}
            border={"none"}
            borderRadius={"0px"}
            w={"150px"}
            fontFamily={"poppins"}
          >
            Contact Us
          </Button>
          <Button
            background={"#EE2B7B"}
            ml={"20px"}
            border={"none"}
            fontWeight={800}
          >
            <AiOutlineArrowRight />
          </Button>
        </Box>
      </VStack>
      <Box >
        <Text textAlign={'center'} color={'#EE2B7B'} fontSize={'28px'} fontWeight={800}>About Us</Text>
        <Box
          display={["column", "column", "flex", "flex"]}
          justifyContent={['center','center','center','space-around']}
          alignItems={'center'}
        textAlign={'center'}

        >
          <Box>
            <Image src={img} w={'350px'} borderRadius={"10px"} />
          </Box>
          <Box w={'50%'}  >
            <Text fontFamily={'poppins'} >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              deserunt repellat tenetur officiis dolorum consectetur soluta
              optio aperiam, non, mollitia quaerat illo tempora maxime ad eos
              architecto natus voluptate at.
            </Text>
          </Box>
        </Box>
        <Box display={["column", "column", "flex", "flex"]}
        justifyContent={['center','center','center','space-around']}
        alignItems={'center'}
        textAlign={'center'}>
          
          <Box w={'50%'} >
            <Text > Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              deserunt repellat tenetur officiis dolorum consectetur soluta
              optio aperiam, non, mollitia quaerat illo tempora maxime ad eos
              architecto natus voluptate at.</Text>
          </Box>
          <Box>
            <Image src={img2} w={['auto','450px','450px','550px']}/>
          </Box>
        </Box>
      </Box>
      <Box className="box2" pt={'70px'} pb={'70px'} position={'relative'}>
        <Text color={'#EEEEEE'} fontWeight={600} fontSize={'36px'} fontFamily={'poppins,sans-serif'} textAlign={'center'}>TO BECOME FRANCHISE</Text>
        <Box maxW={'1140px'} display={['column','flex','flex','flex']} justifyContent={'center'} mt={'auto'} flexWrap={'wrap'} textAlign={'center'} >
        <Box mr={['0px','0px','40px','40px']} mb={['40px','40px','0px','0px']}>
            <img src={img3} width={'390px'} height={'auto'} max-width={'100%'}/>
        </Box>
        <Box>
            <img src={img3} width={'390px'} height={'auto'} max-width={'100%'}/>
        </Box>
      </Box>
        </Box>
        <Box className="box3" minH={'100vh'} mt={'0px'}>
            <Box display={'flex'}  bg={'#EEEEEE'} justifyContent={'center'}>
                <Input type={'text'}/>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
            </Box>
        </Box> */}
    </>
  );
};





//https://www.mbachaiwala.com/wp-content/uploads/2022/11/My-Movie-2.mp4
//https:\/\/www.mbachaiwala.com\/wp-content\/uploads\/2022\/11\/My-Movie-2.mp4
//https://www.mbachaiwala.com/wp-content/uploads/2022/10/title-for-mobile-11-1.png