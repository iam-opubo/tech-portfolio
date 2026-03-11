'use client'

import { Box, Flex, type BoxProps } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'

const scroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`

interface MarqueeProps extends BoxProps {
  children: React.ReactNode
  gap?: string
  pauseOnHover?: boolean
}

export const Marquee = ({ children, gap = "40px", pauseOnHover, ...props }: MarqueeProps) => {
  return (
    <Box overflow="hidden" whiteSpace="nowrap" width="full" {...props}>
      <Flex
        display="inline-flex"
        animation={`${scroll} 30s linear infinite`}
        gap={gap}
        _hover={pauseOnHover ? { animationPlayState: 'paused' } : undefined}
      >
        {/* We render the children twice to create the infinite loop effect */}
        {children}
        {children}
      </Flex>
    </Box>
  )
}