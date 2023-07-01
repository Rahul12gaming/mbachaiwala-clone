import {Link} from 'react-router-dom';
import {Box, Flex, Text} from '@chakra-ui/react';
import {IoCallSharp} from 'react-icons/io5';
import {GrMail} from 'react-icons/gr';
import {TiInfo} from 'react-icons/ti';
import {BsYoutube} from 'react-icons/bs';
import {FaFacebookF,FaLinkedinIn,FaInstagram} from 'react-icons/fa'

export const Footer=()=>
{
    return (
        <>
        <Flex className='footer'  flexWrap={'wrap'} justifyContent={'space-around'} mt={'auto'} border={'2px solid'} pt={'50px'} pb={'50px'}>
            <Box>
                <Text textShadow={'0.08em 0.08em 0em rgba(0,0,0,0.4)'} fontSize={'32px'} fontWeight={800} color={'#EDF000'}>Get in touch</Text>
                <Box display={'flex'} alignItems={'center'}>
                    <IoCallSharp color='#EDF000' size={30}/>
                    <Text wordBreak={'break-word'} pl={'10px'} color={'#fff'} fontWeight={800} fontSize={'18px'}>+91 123789542</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <GrMail color='#EDF000' size={30}/>
                    <Text wordBreak={'break-word'} pl={'10px'} color={'#fff'} fontWeight={800} fontSize={'18px'}>salessupport@mbachaiwala.com</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <TiInfo color='#EDF000' size={30}/>
                    <Text wordBreak={'break-word'} pl={'10px'} color={'#fff'} fontWeight={800} fontSize={'18px'}>info@mbachaiwala.com</Text>
                </Box>
            </Box>
            <Box> 
                <Text  textShadow={'0.08em 0.08em 0em rgba(0,0,0,0.4)'} fontSize={'32px'} fontWeight={800} color={'#EDF000'}>Quick Links</Text>
                <Text color={'#fff'} fontWeight={600} fontSize={'18px'}>FAQs</Text>
                <Text color={'#fff'} fontWeight={600} fontSize={'18px'}>Terms Conditions</Text>
                <Text color={'#fff'} fontWeight={600} fontSize={'18px'}>Privacy Policy</Text>
                <Text color={'#fff'} fontWeight={600} fontSize={'18px'}>Shipping Policy</Text>
            </Box>
            <Box>
                <Text  textShadow={'0.08em 0.08em 0em rgba(0,0,0,0.4)'} fontSize={'32px'} fontWeight={600} color={'#EDF000'}>Social Media</Text>
                <Box display={'flex'} justifyContent={'space-around'} >
                    <Link to={'https://www.facebook.com/mbachaiwalaind'}><Box _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaFacebookF color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                    <Link to={'https://www.youtube.com/@PrafullMBACHAIWALA'}><Box _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><BsYoutube color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                    <Link to={'https://www.linkedin.com/company/mbachaiwala/'}><Box _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaLinkedinIn color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                    <Link to={'https://www.instagram.com/mbachaiwalaind/?igshid=YmMyMTA2M2Y%3D'}><Box _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaInstagram color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                </Box>
            </Box>
        </Flex>
        {/* <Box bg={'yellow'} mt={'-15px'}>
        <Text  textAlign={'center'} bg={'yellow'} w={'100%'} fontWeight={800} mb={'0px'}>Copyright 2022 - mbachaiwala.com</Text>
        </Box> */}
        
       </>
    )
}