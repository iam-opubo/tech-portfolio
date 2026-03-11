'use client'

import { Box, Container, HStack, Text, Link, Circle } from '@chakra-ui/react'
// Import the specialized button and hook we just set up
import { ColorModeButton, useColorMode } from '@/components/ui/color-modes'

export default function Navbar() {
  const { colorMode } = useColorMode()

  return (
    <Box 
      as="nav" 
      position="fixed" 
      top="0" 
      w="full" 
      zIndex="1000" 
      backdropFilter="blur(12px)" 
      // Background adjusts based on the current mode
      bg={colorMode === 'light' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(10, 15, 30, 0.8)'}
      borderBottom="1px solid" 
      borderColor={colorMode === 'light' ? 'blackAlpha.100' : 'whiteAlpha.100'}
    >
      <Container maxW="6xl" py="4">
        <HStack justify="space-between" position="relative">
          
          {/* 1. Purple Circular Logo */}
          <Circle 
            size="40px" 
            bg="purple.500" 
            cursor="pointer"
            transition="all 0.3s"
            _hover={{ 
              transform: "rotate(10deg) scale(1.1)",
              boxShadow: "0 0 20px rgba(128, 90, 213, 0.6)" 
            }}
          >
            <Text fontWeight="black" color="white" fontSize="xl">OP</Text>
          </Circle>

          {/* 2. Centered Navigation Links */}
          <HStack 
            gap="10" 
            display={{ base: 'none', md: 'flex' }}
            position="absolute"
            left="50%"
            transform="translateX(-50%)"
          >
            {['About', 'Skills', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase()}`}
                fontSize="xl"
                fontWeight="medium"
                letterSpacing="wide"
                // Text color flips between black and white for readability
                color={colorMode === 'light' ? 'blackAlpha.900' : 'whiteAlpha.800'}
                transition="all 0.2s"
                _hover={{ 
                  color: 'purple.500', 
                  textDecoration: 'none',
                  transform: "translateY(-2px)"
                }}
              >
                {item}
              </Link>
            ))}
          </HStack>

          {/* 3. Right-side Theme Toggle */}
          <ColorModeButton 
            variant="ghost" 
            border="1px solid"
            borderColor={colorMode === 'light' ? 'blackAlpha.200' : 'whiteAlpha.200'}
            _hover={{ 
              bg: colorMode === 'light' ? "blackAlpha.50" : "whiteAlpha.200", 
              color: "purple.500" 
            }}
          />
          
        </HStack>
      </Container>
    </Box>
  )
}