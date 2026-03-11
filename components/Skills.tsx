'use client'

import { Box, Container, Heading, SimpleGrid, Text, VStack, Center } from '@chakra-ui/react'
// Updated these names to match your library version 🚀
import { 
  LuCode, 
  LuDatabase, 
  LuLayoutList, 
  LuServer, 
  LuTerminal, 
  LuGithub 
} from 'react-icons/lu'

export default function Skills() {
  const skillSets = [
    { name: "Frontend", icon: <LuLayoutList />, items: "React, Next.js, CSS/Tailwind" },
    { name: "Backend", icon: <LuServer />, items: "Node.js, NestJS" },
    { name: "Database", icon: <LuDatabase />, items: "PostgreSQL, MongoDB" },
    { name: "Languages", icon: <LuCode />, items: "TypeScript, JavaScript" },
    { name: "DevOps", icon: <LuTerminal />, items: "Docker, AWS, Vercel" },
    { name: "Tools", icon: <LuGithub />, items: "Git, Figma" },
  ]

  return (
    <Box py="24" bg="#0a0f1e" id="skills" color="white">
      <Container maxW="6xl">
        <Center flexDir="column" mb="16">
          <Heading size="2xl" letterSpacing="widest" mb="2">MY SKILLS</Heading>
          <Box w="60px" h="3px" bg="purple.500" />
          <Text color="whiteAlpha.600" mt="4">The technologies I use to bring ideas to life.</Text>
        </Center>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="6">
          {skillSets.map((skill) => (
            <VStack
              key={skill.name}
              p="8"
              bg="whiteAlpha.50"
              borderRadius="2xl"
              border="1px solid"
              borderColor="whiteAlpha.100"
              align="start"
              gap="4"
              transition="all 0.3s"
              _hover={{ 
                borderColor: "purple.500",
                bg: "whiteAlpha.100",
                transform: "translateY(-5px)",
                boxShadow: "0 0 30px rgba(128, 90, 213, 0.2)"
              }}
            >
              <Center 
                bg="purple.500/10" 
                color="purple.500" 
                borderRadius="lg"
                p="3"
                fontSize="2xl"
              >
                {skill.icon}
              </Center>
              
              <Box w="full">
                <Text fontWeight="bold" fontSize="lg" mb="1">
                  {skill.name}
                </Text>
                <Text color="whiteAlpha.600" fontSize="sm">
                  {skill.items}
                </Text>
              </Box>

              {/* Decorative Progress Line with Purple Glow */}
              <Box w="full" h="1.5px" bg="whiteAlpha.200" position="relative" mt="2">
                <Box 
                  position="absolute" 
                  top="0" 
                  left="0" 
                  h="full" 
                  w="80%" 
                  bg="purple.500" 
                  boxShadow="0 0 10px #805ad5"
                />
              </Box>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}