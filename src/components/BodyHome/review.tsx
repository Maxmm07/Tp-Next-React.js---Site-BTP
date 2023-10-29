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
        bg={useColorModeValue('white', 'gray.800')}
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
          borderTopColor: useColorModeValue('white', 'gray.800'),
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
      <Box bg={useColorModeValue('gray.100', 'gray.700')}>
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading>L'avis de nos clients</Heading>
            <Text>Nous avons pu travailler avec different clients.</Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Une équipe efficace !</TestimonialHeading>
                <TestimonialText>
                "C'est la deuxième fois que je fais appel à cette entreprise pour des travaux de rénovation. Leur équipe est extrêmement compétente, amicale et respectueuse de votre espace. Ils ont livré dans les délais, et la qualité du travail est exceptionnelle. Je n'hésiterais pas à les recommander à nouveau."
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'memeguy2.jpeg'
                }
                name={'Tristan Douille'}
                title={'Particulier'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Design Intuitive.</TestimonialHeading>
                <TestimonialText>
                "J'ai eu le plaisir de travailler avec cette entreprise pour un projet de rénovation de ma maison. Le résultat a dépassé toutes mes attentes ! L'équipe a fait preuve de professionnalisme, de compétence et d'une grande attention aux détails. Je recommande vivement cette société de BTP pour tous vos projets de construction ou de rénovation."
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  '/jackson.jpg'
                }
                name={'Jacques Sonne'}
                title={'PDG de DA Corporation'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Des Travailleurs Engagé.</TestimonialHeading>
                <TestimonialText>
                "Je tiens à remercier chaleureusement cette société de BTP pour son excellent travail sur la construction de ma nouvelle entreprise. Du début à la fin, ils ont été à l'écoute de mes besoins et ont su répondre à toutes mes demandes. Leur engagement envers la qualité et la ponctualité est impressionnant. Je suis ravie du résultat final."
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  '/guccihat2.png'
                }
                name={'Jane Cooper'}
                title={'PDG de HARD Corporation'}
              />
            </Testimonial>
          </Stack>
        </Container>
      </Box>
    )
  }