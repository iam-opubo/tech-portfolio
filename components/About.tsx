'use client'

import { Box, Container, Heading, Text, VStack, Button } from '@chakra-ui/react'

export default function About() {
  return (
    <Box py="24" bg="#0a0f1e" id="about" color="white">
      <Container maxW="3xl">
        <VStack gap="8" textAlign="center">
          <VStack gap="1">
            <Heading size="2xl" letterSpacing="widest">ABOUT ME</Heading>
            {/* Purple Accent Bar */}
            <Box w="60px" h="3px" bg="purple.500" />
          </VStack>

          <Text fontSize="lg" color="whiteAlpha.700" lineHeight="tall">
            Hi, I'm Connor, a Software Developer with experience building efficient, 
            scalable, and user-centric web applications. My strength lies in frontend 
            development, creating engaging interfaces using modern frameworks.
          </Text>

          <Text fontSize="md" color="whiteAlpha.600">
            Beyond the keyboard, I enjoy exploring new tech, solving complex 
            problems, and building features that matter.
          </Text>

          <Box pt="4">
            <Text fontWeight="bold" mb="6">Have a feature in mind? I'll build it — and build it right. 💪</Text>
            <Button 
              variant="outline" 
              borderColor="purple.500" 
              color="purple.500" 
              size="xl"
              px="12"
              rounded="full"
              transition="all 0.3s"
              _hover={{ 
                bg: 'purple.500', 
                color: 'white',
                boxShadow: "0 0 25px rgba(128, 90, 213, 0.4)"
              }}
            >
              Let's Talk
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}