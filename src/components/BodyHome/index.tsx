import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useBreakpointValue,
    Link 
  } from '@chakra-ui/react'
  
  export default function SplitScreen() {
    return (
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Presentation de
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                BT(errieur)P
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Construire l'avenir, ancrés dans l'excellence. Notre société de BTP en Île-de-France, façonne les rêves en béton depuis 2023. Notre engagement envers la qualité, l'innovation et la durabilité nous distingue. En tant que bâtisseurs passionnés, nous construisons plus que des structures, nous érigeons des communautés. Joignez-vous à nous pour façonner un avenir solide et prometteur.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link href="/">
              <Button
                rounded={'full'}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Nos services
              </Button>
            </Link>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              '/chantierTerieur.jpeg'
            }
          />
        </Flex>
      </Stack>
    )
  }