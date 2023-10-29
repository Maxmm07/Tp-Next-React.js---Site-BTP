import { Box, Container, Stack, Text, useColorModeValue, Image } from '@chakra-ui/react'

export default function SmallWithNavigation() {
  return (
    <Box
      bg={useColorModeValue('white.50', 'gray.900')}
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
          <Box as="a" href={'#'}>
            Présentation
          </Box>
          <Box as="a" href={'#'}>
            Nos services
          </Box>
          <Box as="a" href={'#'}>
            Nous Contacter
          </Box>
        </Stack>
        <Text>© 2023 Alain Terrieur BTP. All rights reserved</Text>
      </Container>
    </Box>
  )
}