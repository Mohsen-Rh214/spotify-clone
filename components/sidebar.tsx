import {
    Box,
    List,
    ListItem,
    ListIcon,
    Divider,
    Center,
    LinkBox,
    LinkOverlay,
} from "@chakra-ui/layout"
import Image from "next/image"
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from 'react-icons/md'

const Sidebar = () => {
    return (
        <Box sx={{ width: '100%', color: 'gray', height: 'Calc(100vh - 100px)', background: 'black' }} paddingX='5px'>
            <Box paddingY='20px'>
                <Box width='120px' marginBotton='20px' paddingX='20px'>
                    <Image src='/logo.svg' height={60} width={120} />
                </Box>
            </Box>
            Sidebar
        </Box>
    )
}

export default Sidebar