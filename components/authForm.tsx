import { Box, Flex } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import NextImage from 'next/image'
import { auth } from "../lib/mutations";

const AuthForm: FC<{ mode: 'signin' | 'signup' }> = ({ mode }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoadong, setIsLoadong] = useState(false)
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoadong(true);

        await auth(mode, { email, password })
        setIsLoadong(false);
        router.push('/')
    }

    return <Box height="100vh" width="100vw" bg="black" color="white">
        <Flex justify="center" align="center" height="100px" borderBottom="white 1px solid">
            <NextImage src="/logo.svg" height={60} width={120} />
        </Flex>
        <Flex justify="center" align="center" height="calc(100vh - 100px)">
            <Box padding="50px" bg="gray.900" borderRadius="6px">
                <form style={{ flex: 'flexbox' }}
                    onSubmit={handleSubmit}
                >
                    <Input placeholder="email" type="email" onChange={(e) => setEmail(e.target.value)} />
                    <Input placeholder="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                    <Button type="submit" bg="green.500" sx={{ '&:hover': { bg: 'green.300' } }} isLoading={isLoadong}>{mode}</Button>
                </form>
            </Box>
        </Flex>
    </Box>
}
export default AuthForm;