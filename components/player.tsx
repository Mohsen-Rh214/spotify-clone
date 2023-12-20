import { Box, Center, Flex } from "@chakra-ui/layout";
import { ButtonGroup, IconButton, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";
import ReactHowler from 'react-howler';
import {
    MdShuffle,
    MdSkipPrevious,
    MdSkipNext,
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat,
} from 'react-icons/md'

const Player = () => {
    return (
        <Box>
            <Box></Box>
            <Center>
                <ButtonGroup>
                    <IconButton outline='none'
                        variant='link' aria-label="shuffle"
                        fontSize='24px'
                        icon={<MdShuffle />}
                    />
                    <IconButton outline='none'
                        variant='link' aria-label="skip"
                        fontSize='24px'
                        icon={<MdSkipPrevious />}
                    />
                    <IconButton outline='none'
                        variant='link' aria-label="play"
                        fontSize='40px'
                        color='white'
                        icon={<MdOutlinePlayCircleFilled />}
                    />
                    <IconButton outline='none'
                        variant='link' aria-label="pause"
                        fontSize='40px'
                        color='white'
                        icon={<MdOutlinePauseCircleFilled />}
                    />
                    <IconButton outline='none'
                        variant='link' aria-label="next"
                        fontSize='24px'
                        icon={<MdSkipNext />}
                    />
                    <IconButton outline='none'
                        variant='link' aria-label="repeat"
                        fontSize='24px'
                        icon={<MdOutlineRepeat />}
                    />
                </ButtonGroup>
            </Center>

            <Box color='gray.600'>
                <Flex justify='center' align='center'>
                    <Box width='10%'>
                        <Text fontSize='xs'>1:26</Text>
                    </Box>
                    <Box width='80%'>
                        <RangeSlider
                            aria-label={['min', 'max']}
                            step={0.1}
                            min={0}
                            max={300}
                            id="player-range"
                        >
                            <RangeSliderTrack
                                bg='gray.800'
                            >
                                <RangeSliderFilledTrack bg='gray.600' />
                                <RangeSliderThumb index={0}/>
                            </RangeSliderTrack>
                        </RangeSlider>
                    </Box>
                    <Box width='10%' textAlign='right'>
                        <Text fontSize='xs'>3:23</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Player;