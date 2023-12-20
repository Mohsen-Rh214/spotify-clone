import { Box, Center, Flex } from "@chakra-ui/layout";
import { ButtonGroup, IconButton, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text } from "@chakra-ui/react";
import { useState } from "react";
import ReactHowler from 'react-howler';
import {
    MdShuffle,
    MdSkipPrevious,
    MdSkipNext,
    MdOutlinePlayCircleFilled,
    MdOutlinePauseCircleFilled,
    MdOutlineRepeat,
} from 'react-icons/md'

const Player = ({ songs, activeSong }) => {
    const [playing, setPlaying] = useState(true)
    const [indes, setIndes] = useState(0)
    const [seek, setSeek] = useState(0.0)
    const [repeat, setRepeat] = useState(false)
    const [shuffle, setShuffle] = useState(false)
    const [duration, setDuration] = useState(0.0)

    const setPlayState = (value) => {
        setPlaying(value)
    }

    const onShuffle = () => {
        setShuffle((state)=>!state)
    }
    const onRepeat = () => {
        setRepeat((state)=>!state)
    }

    return (
        <Box>
            <Box>
                {/* <ReactHowler
                    playing={playing}
                    src={activeSong?.url}

                /> */}
            </Box>
            <Center>
                <ButtonGroup>
                    <IconButton outline='none'
                        variant='link' aria-label="shuffle"
                        fontSize='24px'
                        icon={<MdShuffle />}
                        color={shuffle ? 'white' : 'gray.600'}
                        onClick={onShuffle}
                    />
                    <IconButton outline='none'
                        variant='link' aria-label="skip"
                        fontSize='24px'
                        icon={<MdSkipPrevious />}
                    />
                    {playing ? (
                        <IconButton outline='none'
                            variant='link' aria-label="pause"
                            fontSize='40px'
                            color='white'
                            icon={<MdOutlinePauseCircleFilled />}
                            onClick={() => setPlayState(false)}
                        />
                    ) : (
                        <IconButton outline='none'
                            variant='link' aria-label="play"
                            fontSize='40px'
                            color='white'
                            icon={<MdOutlinePlayCircleFilled />}
                            onClick={() => setPlayState(true)}
                        />
                    )}
                    <IconButton outline='none'
                        variant='link' aria-label="next"
                        fontSize='24px'
                        icon={<MdSkipNext />}
                    />
                    <IconButton outline='none'
                        variant='link' aria-label="repeat"
                        fontSize='24px'
                        icon={<MdOutlineRepeat />}
                        color={repeat ? 'white' : 'gray.600'}
                        onClick={onRepeat}
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
                                <RangeSliderThumb index={0} />
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