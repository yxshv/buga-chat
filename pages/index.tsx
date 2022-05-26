import { Box, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import ChatBox from "../components/ChatBox";

const Home : NextPage = () => {

    return (
        <Box
            display='flex'
            width='100vw'
            height='100vh'
            gap={10}
            alignItems='center'
            flexDir='column'
        >
            <Heading 
                color="teal.300"
                size="4xl"
                my='4'
            >
                Buga Chat
            </Heading>

            <ChatBox />

        </Box>
    )
}

export default Home;