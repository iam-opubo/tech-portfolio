'use client'

import { Box, Container, Heading, Text, Stack, SimpleGrid, Circle, Image, HStack, IconButton } from '@chakra-ui/react'
import { LuGithub, LuLinkedin, LuInstagram } from 'react-icons/lu'
import { FaWhatsapp } from 'react-icons/fa' // Real WhatsApp Icon
import { RiTwitterXFill } from 'react-icons/ri' // 🚀 The real X icon
import { useColorMode } from '@/components/ui/color-modes' // Ensure this matches your file name (mode vs modes)
import Typewriter from 'typewriter-effect'

export default function Hero() {
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  return (
    <Box 
      pt="40" 
      pb="20" 
      // Background and text colors react to the toggle
      bg={isLight ? 'gray.50' : '#0a0f1e'} 
      color={isLight ? 'gray.800' : 'white'}
      transition="all 0.3s ease"
      id="home"
    >
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap="12" alignItems="center">
          
          {/* Left Side: Content */}
          <Stack gap="8">
            <Stack gap="2">
              <Text fontSize="xl" fontWeight="medium">
                Hello 👋, I'm
              </Text>
              <Heading size="4xl" letterSpacing="tighter" fontWeight="bold">
                Opubo <Text as="span">Amachree</Text>
              </Heading>
              
              <Heading size="2xl" color="purple.500" letterSpacing="tight">
                <Typewriter
                  options={{
                    strings: ["I'm A Fullstack Developer", "I Build Scalable Apps", "I Design Modern UIs"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    cursor: "|" 
                  }}
                />
              </Heading>
            </Stack>

            <Text fontSize="lg" color={isLight ? 'gray.600' : 'whiteAlpha.700'} lineHeight="relaxed" maxW="lg">
              A software developer with experience building pixel-perfect web applications 
              and scalable APIs using modern Javascript technologies and frameworks.
            </Text>

            {/* 🔗 FULL SOCIALS LIST WITH X LOGO */}
            <HStack gap="4">
              {[
                { 
                  icon: <LuGithub />, 
                  label: "GitHub", 
                  href: "https://github.com/your-username" 
                },
                { 
                  icon: <LuLinkedin />, 
                  label: "LinkedIn", 
                  href: "https://linkedin.com/in/your-username" 
                },
                { 
                  icon: <FaWhatsapp />, 
                  label: "WhatsApp", 
                  href: "https://wa.link/934v6y"
                },
                { 
                  icon: <RiTwitterXFill />, // 🚀 Swapped LuTwitter for RiTwitterXFill
                  label: "X", 
                  href: "https://x.com/Cfc_Emmy"
                },
                { 
                  icon: <LuInstagram />, 
                  label: "Instagram", 
                  href: "https://instagram.com/gudteenz?igsh=MTNwdW56OHVrOHRxZA==" 
                }
              ].map((social) => (
                <IconButton
                  key={social.label}
                  as="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  variant="outline"
                  rounded="full"
                  size="lg"
                  fontSize="xl"
                  // Icon colors adjust to light/dark mode
                  color={isLight ? 'gray.700' : 'whiteAlpha.800'}
                  borderColor={isLight ? 'gray.300' : 'whiteAlpha.300'}
                  bg={isLight ? 'white' : 'whiteAlpha.100'}
                  _hover={{ 
                    bg: "purple.500", 
                    color: "white", 
                    borderColor: "purple.500",
                    transform: "translateY(-3px)",
                    boxShadow: "0 0 15px rgba(128, 90, 213, 0.5)" 
                  }}
                  transition="all 0.3s"
                >
                  {social.icon}
                </IconButton>
              ))}
            </HStack>
          </Stack>

          {/* Right Side: Image with Dynamic Border */}
          <Box position="relative" justifySelf="center">
            <Circle 
              size={{ base: "300px", md: "420px" }} 
              border="12px solid" 
              borderColor={isLight ? "blackAlpha.50" : "whiteAlpha.100"}
              outline="2px solid"
              outlineColor={isLight ? "blackAlpha.200" : "whiteAlpha.300"}
              overflow="hidden"
              role="group" 
              boxShadow={isLight ? "0 10px 30px rgba(0,0,0,0.1)" : "0 0 40px rgba(128, 90, 213, 0.1)"}
              transition="all 0.5s ease"
              _hover={{ 
                outlineColor: "purple.500",
                boxShadow: "0 0 80px rgba(128, 90, 213, 0.4)",
              }}
            >
              <Image 
                src="/profile.png" 
                alt="Profile"
                objectFit="cover"
                w="full"
                h="full"
                transition="transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)"
                _groupHover={{ transform: "scale(1.15)" }}
              />
            </Circle>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  )
}