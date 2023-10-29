import { Box, Container, Stack, Text, useColorModeValue, Image } from '@chakra-ui/react'

export default function SmallWithNavigation() {
  return (
    <Box
    position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={10}
      bg={useColorModeValue('grey.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <Box as="a" href={'/'} rounded={'md'} _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('blue.200', 'blue.700'),
      }}>
            Présentation
          </Box>
          <Box as="a" href={'/services'} rounded={'md'} _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('blue.200', 'blue.700'),
      }}>
            Nos services
          </Box>
          <Box as="a" href={'/contact'} rounded={'md'} _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('blue.200', 'blue.700'),
      }}>
            Nous Contacter
          </Box>
        </Stack>
        <Text>© 2023 Alain Terrieur BTP. All rights reserved</Text>
      </Container>
    </Box>
  )
}