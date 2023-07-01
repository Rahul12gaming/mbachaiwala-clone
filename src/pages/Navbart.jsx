
import {Box,Button,Image, Text} from '@chakra-ui/react'
import { SideDrawer } from '../component/navbar/Drawer'
import { Link } from 'react-router-dom'

export const Navbar=()=>
{
    return (
       <>
         <Box border={'2px solid #F9EFF2'} zIndex={100} position={'fixed'} w={'100%'} bg={'#ee2a7b'} borderRadius={'150px'} display={['none','none','block','block']}>
              <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
                    <Box>
                    
                    <Image w={'110px'} src={'http://www.mbachaiwala.com/wp-content/uploads/2023/03/mba-chai-wala-logo.png'}/>
                    </Box>
                    <Box display={'flex'} alignItems={'center'}>
                         <Link to={'/'}>
                              <Text  textShadow={'0.08em 0.08em 0em rgba(0,0,0,0.4)'} _hover={{color:'yellow', borderBottom:'2px solid yellow',borderBottomWidth:'5px',overflow:'hidden'}} pr={'10px'} fontSize={'16px'} color={'#fff'} fontWeight={700}>Home</Text>
                         </Link>
                         <Link to={'/about'}>
                              <Text textShadow={'0.08em 0.08em 0em rgba(0,0,0,0.4)'} _hover={{color:'yellow', borderBottom:'2px solid yellow',borderBottomWidth:'5px',overflow:'hidden'}} pr={'10px'} fontSize={'16px'} color={'#fff'} fontWeight={700}>About Us</Text>
                         </Link>
                         <Link to={'/contact'}>
                              <Text textShadow={'0.08em 0.08em 0em rgba(0,0,0,0.4)'} _hover={{color:'yellow', borderBottom:'2px solid yellow',borderBottomWidth:'5px',overflow:'hidden'}} pr={'10px'} fontSize={'16px'} color={'#fff'} fontWeight={700}>Contact Us</Text>
                         </Link>
                         <Link >
                              <Button _hover={{background:'rgb(109, 61, 15)',transform:'skew(-10deg)'}} border={'none'} bg={'rgb(109, 61, 15)'} color={'rgb(255, 241, 0)'} fontSize={'14px'} letterSpacing={'2px'} textTransform={'uppercase'}>Get a Franchise</Button>
                         </Link>
                    </Box>
              </Box>
         </Box>
         <Box h={'140px'} display={['flex','flex','none','none']} alignItems={'center'} justifyContent={'space-between'} bg={'yellow'}>
               <Box pl={'50px'}>
                    <Image w={'100px'} src={'http://www.mbachaiwala.com/wp-content/uploads/2023/03/mba-chai-wala-logo.png'}/>
               </Box>
               <Box pr={'50px'}>
               <SideDrawer/>
               </Box>
         </Box>
         </>
    )
    
}

// background-color: rgb(109, 61, 15);
//     color: rgb(255, 241, 0);