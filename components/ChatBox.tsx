import { 
    Box, 
    Icon, 
    IconButton, 
    Input, 
    InputGroup,
    InputRightElement
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineSend } from 'react-icons/ai';
import { BACKEND } from "../backend";
import useWebSocket, { ReadyState } from 'react-use-websocket';

interface Messages {
    [key: string]: string;
}

const banned_words = [
    "sex", "cum", "fuck", "bitch", "porn"
]

function getUID() {
    return Date.now().toString()
}

const ChatBox = () => {

    const [messages, setMessages] = useState<Messages>({});
    const [msg, setMsg] = useState<string>('');
    const DiV = useRef<any>(null);

    const { sendMessage, lastMessage, readyState} = useWebSocket(`ws://${BACKEND}/ws`);

    function deleteMessage(id:string) {
        setMessages((prev) => {
            const newMessages = {...prev};
            delete newMessages[id];
            return newMessages;
        })
    }

    const newMessage = (m : string) => {
        setMessages((prev : Messages) => {
            let id = getUID();
            while (prev[id] !== undefined || prev[id] !== undefined) {
                id = getUID();
            }
            setTimeout(() => {
                deleteMessage(id);
            }, 1000 * 60)
            return {
                ...prev,
                [id]: m
            }
        });
        console.log(DiV.current.scrollHeight)
    }

    useEffect(() => {
        DiV.current.scrollTop = DiV.current.scrollHeight;
    },[messages])
     
    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];

    useEffect(() => {
        if (lastMessage !== undefined || lastMessage !== null) {
            const newMessage = (m : string) => {
                setMessages((prev : Messages) => {
                    let id = getUID();
                    while (prev[id] !== undefined || prev[id] !== undefined) {
                        id = getUID();
                    }
                    setTimeout(() => {
                        deleteMessage(id);
                    }, 1000 * 60)
                    return {
                        ...prev,
                        [id]: m
                    }
                });
            }
            newMessage(lastMessage?.data);
        }
    },[lastMessage])
    
    function Send() {
        console.log(connectionStatus)
        if (msg.length < 1 || connectionStatus !== 'Open' || msg === undefined || msg === null) return
        
        for (const a in banned_words) {
            if (msg.toLowerCase().includes(banned_words[a])) {
                alert("fuk u\n NEver gonna give u up. never gonna let u down")
                return
            }
        }
        sendMessage(msg);
        newMessage(msg);
        setMsg('')
    }

    return (
        <Box
            display="flex"
            bg="gray.600"
            h='70vh'
            borderRadius='xl'
            w='100%'
            flexDir='column'
        >
            <Box
                flexGrow="30"
                borderTopLeftRadius='xl'
                borderTopRightRadius='xl'
                p='5'
                display='flex'
                flexDir='column'
                gap={2}
                overflow='auto'
                ref={DiV}
            >

                {Object.keys(messages).map(
                    (key: string) => {
                        if (messages[key] === undefined || messages[key] === null) return null
                        return (
                            <Box
                                key={key}
                                borderRadius='lg'
                                bg='teal'
                                color='white'
                                width='fit-content'
                                px='5'
                                py='2'
                            >
                                {messages[key]}
                            </Box>
                        )
                    }
                )}

            </Box>
            <InputGroup
                size='lg'
            >
                <Input
                    placeholder="Type a message..."
                    border='none'
                    bg='gray.700'
                    borderRadius='none'
                    borderBottomLeftRadius='xl'
                    borderBottomRightRadius='xl'
                    value={msg}
                    onChange={(e : any) => setMsg(e.target.value)}
                    _focus={{
                        border : 'none'
                    }}
                    onKeyUp={(e : any) => { if (e.key === "Enter") { Send() } }}

                />
            <InputRightElement onClick={Send}>
                <IconButton
                    as={AiOutlineSend}
                    aria-label='Send'
                    colorScheme='none'
                    size="xs"
                    color='white'
                    cursor='pointer'
                />
            </InputRightElement>

            </InputGroup>
            
        </Box>
    )
}

export default ChatBox;