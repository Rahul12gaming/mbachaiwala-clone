import {Box,Text} from '@chakra-ui/react'
import {IoIosSend} from 'react-icons/io'
import {FaMapMarked} from 'react-icons/fa'
import {IoCallSharp} from 'react-icons/io5';
import {FaFacebookF,FaLinkedinIn,FaInstagram} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs';
import {Link} from 'react-router-dom';

export const Contact=()=>
{
    
    
    return (
        
        <>
            <Box>
                <Box bg={'yellow'} textAlign={'center'} pt={'50px'} pb={'50px'}>
                    <Text className='heading-animate' wordBreak={'break-word'} m={'0px'} fontSize={'35px'} color={'#ee2a7b'} fontWeight={800}>WANT TO GET IN TOUCH?</Text>
                    <Box w={'80%'} maxW={'1080px'} ml={'auto'} mr={'auto'}>
                        <Text m={'0px'} fontSize={'20px'} color={'#666666'} wordBreak={'break-word'}>
                        We value your feedback, and we’re available to assist you with any queries or concerns you might have. Whether you want to join our team or partner with us, we are happy to have a chat!
                        </Text>
                        <Box display={['column','column','flex','flex']} justifyContent={'center'} mt={'10px'} mb={'10px'}>
                            <Box _hover={{transition:'2s ease-in-out',transform:'scale(0.9)'}} border={'2px solid #ee2a7b'} display={'inline-block'}>
                                <Text p={'10px'} m={'0px'} color={'#ee2a7b'} bg={'transparent'} fontSize={'20px'}>JOIN THE TEAM</Text>
                            </Box>
                            <Box _hover={{transition:'2s ease-in-out',transform:'scale(0.9)'}} border={'2px solid #ee2a7b'} display={'inline-block'}>
                                <Text p={'10px'} m={'0px'} color={'#ee2a7b'} bg={'transparent'} fontSize={'20px'}>LET'S DO BUSINESS</Text>
                            </Box>
                            <Box _hover={{transition:'2s ease-in-out',transform:'scale(0.9)'}} border={'2px solid #ee2a7b'} display={'inline-block'}>
                                <Text p={'10px'} m={'0px'} color={'#ee2a7b'} bg={'transparent'} fontSize={'20px'}>A QUICK WORD</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box display={['block','block','flex','flex']} >
                    <Box bg={'#ee2a7b'} w={['100%','100%','40%','40%']} textAlign={'center'} pt={'50px'} pb={'50px'}>
                        <Box bg={'#fff'} display={'inline-block'} borderRadius={'20px'} >
                            <Text p={'10px'} m={'0px'} wordBreak={'break-word'} fontSize={'32px'} color={'#ee2a7b'} fontWeight={800}>GET IN TOUCH</Text>
                        </Box>
                        <Box>
                            <Box  display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'10px'}>
                                <Box borderRadius={'30px'} p={'6px'}  w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><IoCallSharp size={35} color={'#ee2a7b'}/></Box>
                                <Text fontWeight={700} color={'#fff'} m={'0px'}>+91 1234567899</Text>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'10px'}>
                                <Box borderRadius={'30px'} p={'6px'}  w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><IoIosSend size={35} color={'#ee2a7b'}/></Box>
                                <Text fontWeight={700} color={'#fff'} m={'0px'}>customersupport@mbachaiwala.com</Text>
                            </Box>
                            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'10px'}>
                                <Box borderRadius={'30px'} p={'6px'}  w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaMapMarked size={35} color={'#ee2a7b'}/></Box>
                                <Text fontWeight={700} w={'60%'} color={'#fff'} wordBreak={'break-word'} m={'0px'}>1106, 11th Floor, Skye Earth Corporate Park, 105, AB Road, Sector C, Slice 5, Part II, Shalimar Township, Indore, Madhya Pradesh 452010</Text>
                            </Box>
                        </Box>
                        <Box mt={'20px'} display={'flex'} justifyContent={'center'}>
                    <Link to={'https://www.facebook.com/mbachaiwalaind'}><Box borderRadius={'30px'} mr={'5px'} _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaFacebookF color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                    <Link to={'https://www.youtube.com/@PrafullMBACHAIWALA'}><Box borderRadius={'30px'} mr={'5px'} _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><BsYoutube color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                    <Link to={'https://www.linkedin.com/company/mbachaiwala/'}><Box borderRadius={'30px'} mr={'5px'} _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaLinkedinIn color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                    <Link to={'https://www.instagram.com/mbachaiwalaind/?igshid=YmMyMTA2M2Y%3D'}><Box borderRadius={'30px'} mr={'5px'} _hover={{background:'yellow',transform:'scale(0.9)'}} w={'44px'} h={'44px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  bg={'#fff'}><FaInstagram color='#EE2B7B' size={25} mt={'auto'}/></Box></Link>
                </Box>
                    </Box>
                    <Box w={['99%','99%','59%','59%']}>
                   
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14156.460856334079!2d77.6781735!3d27.4967921!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3973715630c129e5%3A0x5c05678b1bbe1848!2sMBA%20CHAI%20WALA%20MATHURA!5e0!3m2!1sen!2sin!4v1687932178824!5m2!1sen!2sin" width="100%" height="642px" className='map'  allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
                    
                </Box>
                </Box>
            
        </>
    )
}