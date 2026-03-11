'use client'

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Input, 
  Textarea, 
  Button, 
  SimpleGrid, 
  Icon,
  Circle
} from '@chakra-ui/react'
import { LuPhone, LuMapPin, LuMail } from 'react-icons/lu'
import { useColorMode } from './ui/color-modes'

export default function Contact() {
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  return (
    <Box 
      py="24" 
      bg={isLight ? 'gray.50' : '#0a0f1e'} 
      color={isLight ? 'gray.800' : 'white'}
      id="contact"
      transition="all 0.3s ease"
    >
      <Container maxW="6xl">
        {/* Section Heading */}
        <VStack mb="16" gap="1">
          <Heading size="2xl" letterSpacing="widest" textTransform="uppercase">
            Get In Touch
          </Heading>
          <Box w="50px" h="2px" bg="purple.500" />
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap="0" borderRadius="2xl" overflow="hidden" boxShadow="2xl">
          
          {/* LEFT COLUMN: Contact Info & Map */}
          <VStack 
            bg={isLight ? 'white' : 'whiteAlpha.50'} 
            p={{ base: "8", md: "12" }} 
            align="start" 
            gap="10"
            borderRight={isLight ? "1px solid" : "none"}
            borderColor="gray.100"
          >
            <VStack align="start" gap="8" w="full">
              {/* Call */}
              <HStack gap="6">
                <Circle size="50px" border="1px solid" borderColor="purple.500" color="purple.500">
                  <Icon as={LuPhone} boxSize="5" />
                </Circle>
                <VStack align="start" gap="0">
                  <Text fontWeight="bold" fontSize="lg">Call:</Text>
                  <Text color={isLight ? "gray.600" : "whiteAlpha.600"}>+234 812 345 6789</Text>
                </VStack>
              </HStack>

              {/* Location */}
              <HStack gap="6">
                <Circle size="50px" border="1px solid" borderColor="purple.500" color="purple.500">
                  <Icon as={LuMapPin} boxSize="5" />
                </Circle>
                <VStack align="start" gap="0">
                  <Text fontWeight="bold" fontSize="lg">Location:</Text>
                  <Text color={isLight ? "gray.600" : "whiteAlpha.600"}>Rivers State, Nigeria</Text>
                </VStack>
              </HStack>

              {/* Email */}
              <HStack gap="6">
                <Circle size="50px" border="1px solid" borderColor="purple.500" color="purple.500">
                  <Icon as={LuMail} boxSize="5" />
                </Circle>
                <VStack align="start" gap="0">
                  <Text fontWeight="bold" fontSize="lg">Email:</Text>
                  <Text color={isLight ? "gray.600" : "whiteAlpha.600"}>yourname@example.com</Text>
                </VStack>
              </HStack>
            </VStack>

            {/* Map Placeholder */}
            <Box 
              w="full" 
              h="250px" 
              bg="gray.200" 
              borderRadius="lg" 
              overflow="hidden"
              position="relative"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127160.81432321473!2d6.936660639992015!3d4.812395521406857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1063451000000001%3A0x1063451000000001!2sPort%20Harcourt!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: isLight ? "none" : "grayscale(1) invert(0.9)" }} 
                allowFullScreen 
                loading="lazy" 
              />
            </Box>
          </VStack>

          {/* RIGHT COLUMN: Contact Form */}
          <VStack 
            bg={isLight ? 'white' : 'whiteAlpha.100'} 
            p={{ base: "8", md: "12" }} 
            gap="6" 
            as="form"
          >
            <SimpleGrid columns={{ base: 1, md: 2 }} gap="6" w="full">
              <VStack align="start" gap="2" w="full">
                <Text fontSize="sm" fontWeight="bold">Name</Text>
                <Input 
                  placeholder="" 
                  rounded="none" 
                  h="12" 
                  bg={isLight ? "gray.50" : "whiteAlpha.50"}
                  border="1px solid"
                  borderColor={isLight ? "gray.200" : "whiteAlpha.200"}
                  _focus={{ borderColor: "purple.500", boxShadow: "none" }}
                />
              </VStack>
              <VStack align="start" gap="2" w="full">
                <Text fontSize="sm" fontWeight="bold">Email</Text>
                <Input 
                  type="email" 
                  rounded="none" 
                  h="12" 
                  bg={isLight ? "gray.50" : "whiteAlpha.50"}
                  border="1px solid"
                  borderColor={isLight ? "gray.200" : "whiteAlpha.200"}
                  _focus={{ borderColor: "purple.500", boxShadow: "none" }}
                />
              </VStack>
            </SimpleGrid>

            <VStack align="start" gap="2" w="full">
              <Text fontSize="sm" fontWeight="bold">Subject</Text>
              <Input 
                rounded="none" 
                h="12" 
                bg={isLight ? "gray.50" : "whiteAlpha.50"}
                border="1px solid"
                borderColor={isLight ? "gray.200" : "whiteAlpha.200"}
                _focus={{ borderColor: "purple.500", boxShadow: "none" }}
              />
            </VStack>

            <VStack align="start" gap="2" w="full">
              <Text fontSize="sm" fontWeight="bold">Message</Text>
              <Textarea 
                rounded="none" 
                rows={6} 
                bg={isLight ? "gray.50" : "whiteAlpha.50"}
                border="1px solid"
                borderColor={isLight ? "gray.200" : "whiteAlpha.200"}
                _focus={{ borderColor: "purple.500", boxShadow: "none" }}
              />
            </VStack>

            <Button 
              variant="outline" 
              borderColor="purple.500" 
              color="purple.500" 
              rounded="none" 
              px="10" 
              h="12"
              _hover={{ bg: "purple.500", color: "white" }}
              transition="all 0.3s"
              alignSelf="start"
            >
              Send Message
            </Button>
          </VStack>

        </SimpleGrid>
      </Container>
    </Box>
  )
}