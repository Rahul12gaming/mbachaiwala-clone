import {Text,Link} from '@chakra-ui/react'
export const IconLink=({link,text})=>
{
    return (
        <Link href={link}>
            <Text>{text}</Text>
        </Link>

    )
}