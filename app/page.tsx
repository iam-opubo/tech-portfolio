'use client'

import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import About from "../components/About"
import Contact from '../components/Contact'
import Services from '@/components/Services'

export default function Home() {
  return (
    <Box as="main" bg="bg.canvas" minH="100vh">
      <Navbar /> 
      <Hero />  

      {/* 🗑️ DELETE THIS ENTIRE SECTION BELOW */}
      {/* <Container maxW="3xl" py="20">
        <VStack gap="8" align="start">
          <Heading size="4xl" letterSpacing="tighter">
            System Online.
          </Heading>
          ...
        </VStack>
      </Container> */}
      <About />
      <Skills />
      <Services />
      <Projects />   
      <Contact />   
      
      <Box as="footer" py="10" textAlign="center" borderTopWidth="1px">
        <Box fontSize="sm" color="fg.muted">
          © 2026 Built with Chakra UI v3
        </Box>
      </Box>
    </Box>
  )
}