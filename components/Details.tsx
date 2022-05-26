import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { MdPersonSearch, MdOutlineTimer } from 'react-icons/md'


const Details = () => {
    return (
        <Box>
            <Heading
                color='teal.400'
                textAlign='center'
            >About</Heading>

            <Flex
                justify='center'
                alignItems='center'
                wrap='wrap'
                p='10'
                gap={5}
                textAlign='center'
            >
                <Flex
                    justify='center'
                    alignItems='center'
                    flexDir='column'
                    w='300px'
                    borderRadius='md'
                    bg='gray.700'
                    p='5'
                >
                    <MdPersonSearch
                        fontSize='8rem'
                    />
                    <Text>
                        Completely anonymous chat. No one can see who sent the message.
                    </Text>
                </Flex>

                <Flex
                    justify='center'
                    alignItems='center'
                    flexDir='column'
                    w='300px'
                    borderRadius='md'
                    bg='gray.700'
                    p='5'
                >
                    <MdOutlineTimer
                        fontSize='8rem'
                    />
                    <Text>
                        Messages deletes 1 minute after they are sent.
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Details;
