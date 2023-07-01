import {  Drawer, DrawerBody, DrawerCloseButton, DrawerContent,  DrawerOverlay, Icon, Text, useDisclosure} from "@chakra-ui/react"
import { BiMenu } from "react-icons/bi";
import {Link} from 'react-router-dom'
export const SideDrawer=()=>{
    const {isOpen,onOpen,onClose} =useDisclosure()
    // console.log(isOpen,onOpen,onClose)
    return (
        <>
        <Icon onClick={onOpen} as={BiMenu} w={'40px'}  h={'40px'} bg={'yellow'} border={'1px solid'}/>
        <Drawer  isOpen={isOpen} onClose={onClose} placement={'top'} zIndex={10}>
        <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton bg={'yellow'} border={'1px solid'}/>
                
                
                <DrawerBody  bg={'#EE2B7B'}>
                    
                        <Link to={'/'}>
                            <Text fontFamily={'Bebas Neue'} fontSize={'20px'}>Home</Text>
                        </Link>
                       <Link to={'/Franchise'}>
                       <Text fontFamily={'Bebas Neue'} fontSize={'20px'}>Franchise</Text>
                       </Link>
                        <Link to={'/Contact'}>
                        <Text fontFamily={'Bebas Neue'} fontSize={'20px'}>Contact</Text>
                        </Link>
                        <Link to={'About'}>
                        <Text fontFamily={'Bebas Neue'} fontSize={'20px'}>About</Text>
                        </Link>
                    
                </DrawerBody>
                
               
            </DrawerContent>
        </Drawer>
        </>
    )
}