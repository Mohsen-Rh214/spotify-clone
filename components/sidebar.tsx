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
import NextLink from "next/link"
import {
    MdHome,
    MdSearch,
    MdLibraryMusic,
    MdPlaylistAdd,
    MdFavorite
} from 'react-icons/md'

const navMenu = [
    {
        name: 'Home',
        icon: MdSearch,
        route: '/search'
    },
    {
        name: 'Search',
        icon: MdHome,
        route: '/'
    },
    {
        name: 'Your Library',
        icon: MdLibraryMusic,
        route: '/library'
    },
]

const musicMenu = [
    {
        name: 'Create Playlist',
        icon: MdPlaylistAdd,
        route: '/'
    },
    {
        name: 'Favorites',
        icon: MdFavorite,
        route: '/favorites'
    },
]

const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
    return (
        <Box sx={{ width: '100%', color: 'gray', height: 'Calc(100vh - 100px)', background: 'black' }} paddingX='5px'>
            <Box paddingY='20px' height='100%'>
                <Box width='120px' marginBotton='20px' paddingX='20px'>
                    <Image src='/logo.svg' height={60} width={120} />
                </Box>
                <Box marginBottom='20px'>
                    <List spacing={2}>
                        {navMenu.map(item => (
                            <ListItem paddingX='20px' fontSize='16px' key={item.name}>
                                <LinkBox>
                                    <NextLink href={item.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={item.icon} color='white' marginRight='20px' />
                                            {item.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Box marginTop='20px'>
                    <List spacing={2}>
                        {musicMenu.map(item => (
                            <ListItem paddingX='20px' fontSize='16px' key={item.name}>
                                <LinkBox>
                                    <NextLink href={item.route} passHref>
                                        <LinkOverlay>
                                            <ListIcon as={item.icon} color='white' marginRight='20px' />
                                            {item.name}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
                <Divider bg='gray.800' />
                <Box height='66%' overflowY="auto" paddingY='20px'>
                    <List spacing={2}>
                        {playlist.map(item => (
                            <ListItem paddingX='20px' key={item}>
                                <LinkBox>
                                    <NextLink href='/' passHref>
                                        <LinkOverlay>
                                            {item}
                                        </LinkOverlay>
                                    </NextLink>
                                </LinkBox>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
            Sidebar
        </Box >
    )
}

export default Sidebar