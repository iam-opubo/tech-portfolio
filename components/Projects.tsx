'use client'

import { SimpleGrid, Card, Heading, Container, Badge, Text, Button, Stack, Box, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
} from "./ui/dialog" 

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const myProjects = [
    { title: "E-commerce App", desc: "Next.js + Stripe", tech: "React", longDesc: "A full-scale store with secure checkout, real-time inventory, and user authentication.", color: "purple" },
    { title: "AI Dashboard", desc: "Data visualization", tech: "TypeScript", longDesc: "An interactive dashboard visualizing complex AI training data using D3.js and Framer Motion.", color: "blue" },
    { title: "Chakra Portfolio", desc: "V3 Site", tech: "Chakra", longDesc: "A high-performance portfolio using Next.js Turbopack and the latest Chakra UI v3 components.", color: "teal" },
  ]

  return (
    <Container maxW="5xl" py="20" id="projects">
      <Heading size="2xl" mb="10" letterSpacing="tighter">Featured Projects</Heading>
      
      <SimpleGrid columns={{ base: 1, md: 3 }} gap="8">
        {myProjects.map((project) => (
          <Card.Root 
            key={project.title} 
            variant="outline" 
            cursor="pointer"
            _hover={{ shadow: "xl", borderColor: "purple.500", transform: "translateY(-4px)" }}
            transition="all 0.3s ease"
            onClick={() => setSelectedProject(project)}
          >
            <Card.Body gap="2">
              <Badge width="fit-content" colorPalette={project.color}>{project.tech}</Badge>
              <Card.Title mt="2">{project.title}</Card.Title>
              <Card.Description>{project.desc}</Card.Description>
            </Card.Body>
          </Card.Root>
        ))}
      </SimpleGrid>

      {/* Styled Dialog */}
      <DialogRoot 
        open={!!selectedProject} 
        onOpenChange={() => setSelectedProject(null)}
        motionPreset="slide-in-bottom"
        size="md"
      >
        <DialogContent bg="bg.panel" borderRadius="xl" border="1px solid" borderColor="border.muted">
          <DialogHeader borderBottom="1px solid" borderColor="border.subtle" pb="4">
            <HStack justify="space-between" width="full">
               <Stack gap="0">
                 <Badge variant="surface" colorPalette={selectedProject?.color} width="fit-content">
                    {selectedProject?.tech}
                 </Badge>
                 <DialogTitle fontSize="2xl" fontWeight="bold" mt="2">
                    {selectedProject?.title}
                 </DialogTitle>
               </Stack>
            </HStack>
          </DialogHeader>

          <DialogBody py="6">
            <Stack gap="4">
               <Text color="fg.muted" lineHeight="tall" fontSize="md">
                 {selectedProject?.longDesc}
               </Text>
               <Box p="4" bg="bg.muted" borderRadius="md" borderLeft="4px solid" borderColor={`${selectedProject?.color}.500`}>
                  <Text textStyle="xs" fontWeight="bold" color="fg.subtle" mb="1">KEY FEATURES</Text>
                  <Text fontSize="sm">• High Performance • SEO Optimized • Fully Responsive</Text>
               </Box>
            </Stack>
          </DialogBody>

          <DialogFooter borderTop="1px solid" borderColor="border.subtle" pt="4">
            <Button variant="ghost" onClick={() => setSelectedProject(null)}>Close</Button>
            <Button colorPalette="purple" variant="solid">View Case Study</Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </Container>
  )
}