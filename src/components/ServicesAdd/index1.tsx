import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react'
  import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
  import { FaDollarSign } from "react-icons/fa";
  import { MdAccessTimeFilled } from "react-icons/md";
  import { ReactElement } from 'react'
  
  interface FeatureProps {
    text: string
    iconBg: string
    icon?: ReactElement
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    )
  }
  
  export default function SplitWithImage1() {
    return (
      <Container maxW={'5xl'} py={12} mt={5}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Heading>Services de Charpente</Heading>
            <Text color={'gray.500'} fontSize={'lg'}>
            Nous concevons et installons des charpentes en bois ou en métal pour vos bâtiments. Notre charpente est à la fois fonctionnelle et esthétique.</Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
              }>
              <Feature
                icon={<Icon as={FaDollarSign} color={'orange.500'} w={5} h={5} />}
                iconBg={useColorModeValue('orange.100', 'orange.900')}
                text={" À partir de 12 000 €"}
              />
              <Feature
                icon={<Icon as={MdAccessTimeFilled} color={'blue.500'} w={5} h={5} />}
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Environ 6 à 8 semaines'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                'ch.png'
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    )
  }