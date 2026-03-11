'use client'

import { Box, Container, Text, VStack, Link, Icon, HStack } from '@chakra-ui/react'
import { LuChevronUp } from 'react-icons/lu'
import { useColorMode } from '@/components/ui/color-modes'

export default function Footer() {
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box 
      as="footer" 
      py="10" 
      bg={isLight ? 'white' : '#070b16'} // Slightly darker than the main sections for depth
      borderTop="1px solid"
      borderColor={isLight ? 'gray.100' : 'whiteAlpha.100'}
      transition="all 0.3s ease"
    >
      <Container maxW="6xl">
        <VStack gap="6">
          
          {/* Back to Top Button */}
          <Link 
            onClick={scrollToTop}
            color="purple.500"
            fontSize="sm"
            fontWeight="bold"
            display="flex"
            alignItems="center"
            gap="2"
            _hover={{ textDecoration: 'none', transform: 'translateY(-2px)' }}
            transition="all 0.2s"
          >
            <Icon as={LuChevronUp} boxSize="5" />
            BACK TO TOP
          </Link>

          <HStack 
            w="full" 
            justify="space-between" 
            flexDir={{ base: 'column', md: 'row' }} 
            gap="4"
          >
            <Text 
              fontSize="sm" 
              color={isLight ? 'gray.500' : 'whiteAlpha.500'}
            >
              Designed with ❤️ by **Opubo Amachree** © 2026. All rights reserved.
            </Text>

            <HStack gap="6">
              {['About', 'Portfolio', 'Contact'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  fontSize="xs"
                  fontWeight="bold"
                  letterSpacing="widest"
                  color={isLight ? 'gray.400' : 'whiteAlpha.400'}
                  _hover={{ color: 'purple.500', textDecoration: 'none' }}
                >
                  {item.toUpperCase()}
                </Link>
              ))}
            </HStack>
          </HStack>

        </VStack>
      </Container>
    </Box>
  )
}