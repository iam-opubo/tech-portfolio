'use client'

import { Box, Container, Heading, SimpleGrid, Text, Center, Circle } from '@chakra-ui/react'
import { LuCode, LuDatabase, LuCpu } from 'react-icons/lu'
import { useColorMode } from '@/components/ui/color-modes' //

export default function Services() {
  const { colorMode } = useColorMode() //
  const isLight = colorMode === 'light'

  return (
    <Box 
      py="24" 
      bg={isLight ? 'white' : '#0a0f1e'} 
      color={isLight ? 'gray.800' : 'white'} 
      transition="all 0.3s ease" 
      id="services"
    >
      <Container maxW="6xl">
        <Center flexDir="column" mb="16">
          <Heading size="2xl" letterSpacing="widest" mb="2">MY SERVICES</Heading>
          <Box w="60px" h="3px" bg="purple.500" />
        </Center>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap="8">
          {[
            { title: "Frontend", desc: "I craft clean interfaces.", icon: <LuCode /> },
            { title: "Backend", desc: "I build scalable APIs.", icon: <LuDatabase /> },
            { title: "Fullstack", desc: "End-to-end solutions.", icon: <LuCpu /> }
          ].map((s) => (
            <Box 
              key={s.title} 
              p="10" 
              // 🚀 Dynamic card styling
              bg={isLight ? 'gray.50' : 'whiteAlpha.50'} 
              borderRadius="xl" 
              border="1px solid" 
              borderColor={isLight ? 'gray.200' : 'whiteAlpha.100'}
              textAlign="center"
              _hover={{ transform: 'translateY(-10px)', borderColor: 'purple.500' }}
            >
              <Center mb="6">
                <Circle size="60px" bg={isLight ? 'purple.50' : 'whiteAlpha.100'} color="purple.500" fontSize="2xl">
                  {s.icon}
                </Circle>
              </Center>
              <Heading size="md" mb="4">{s.title}</Heading>
              <Text color={isLight ? 'gray.600' : 'whiteAlpha.600'}>{s.desc}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}