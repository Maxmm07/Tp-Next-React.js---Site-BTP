'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'blue.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'blue.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('white.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Ce qu'en pensent nos clients</Heading>
          <Text>Nous travaillons avec des clients partout en France métropolitaine.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Avis de Sophie</TestimonialHeading>
              <TestimonialText>
              "Je suis extrêmement satisfaite du travail de l'entreprise Allan BTP. Ils ont construit ma maison avec une qualité exceptionnelle, respectant les délais et le budget. Je recommande vivement leurs services."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://risibank.fr/cache/medias/0/24/2463/246398/thumb.jpeg'
              }
              name={'Sophie Dupont'}
              title={'Particulière'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Avis de Thomas</TestimonialHeading>
              <TestimonialText>
              "Allan BTP a réalisé la rénovation de mon entreprise de manière professionnelle et efficace. Leur équipe a fait preuve de compétence et d'engagement, et le résultat final a dépassé mes attentes. Je les remercie pour leur excellent travail."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://risibank.fr/cache/medias/0/24/2430/243098/thumb.png'
              }
              name={'Thomas Martin'}
              title={'Particulier'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Avis de Laura</TestimonialHeading>
              <TestimonialText>
              "J'ai fait appel à Allan BTP pour la construction de mon restaurant. Leur souci du détail, leur attention à mes besoins spécifiques et leur service client exceptionnel m'ont convaincue que j'avais fait le bon choix. Je suis ravie du résultat et je les recommande sans hésitation."
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://risibank.fr/cache/medias/0/7/785/78515/thumb.png'
              }
              name={'Laura Dubois'}
              title={'Particulière'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  )
}