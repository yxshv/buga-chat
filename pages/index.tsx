import { Box, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import ChatBox from "../components/ChatBox";
import Details from "../components/Details";

const Home : NextPage = () => {

    return (
        <Box
            display='flex'
            height='100vh'
            gap={10}
            mx='0'
            alignItems='center'
            flexDir='column'
        >
            <Box
                mt={5}
                display='flex'
                flexDir='column'
                justifyContent='center'
                alignItems='center'
                gap={3}
            >
                <Heading 
                    color="teal.300"
                    size="4xl"
                >
                    Buga Chat
                </Heading>
                <Text color="teal.400">
                    Completely Anounymous chat app
                </Text>
            </Box>

            <Box
                px={{
                    base : '10vw',
                    md : '15vw',
                    lg : '20vw',
                    xl : '25vw'
                }}
                w='100%'
            >
                <ChatBox />
            </Box>
            
            <Details />

        </Box>
    )
}

export default Home;