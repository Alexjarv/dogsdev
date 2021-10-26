import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Input,
  FormControl,
  Textarea,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoSend
} from 'react-icons/io5'

const formAction = "mailto:jarv.aleksei@gmail.com?subject=Lets work together"

const Home = () => (
  
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a full-stack developer based in Estonia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Dogs Dev
          </Heading>
          <p>Digital Craftsman ( Web Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/jarv.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Alex is a freelance and a full-stack developer based in Tallinn with a
          passion for building digital services/stuff he wants. He has a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          hanging out with his camera. Currently, he is living off of his own
          product called{' '}
          <Link href="https://beonmind.ru">Beonmind</Link>
          .
        </Paragraph>
        <Box align="center" my={4}>
          {/* <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink> */}
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          Born in Tallinn, Estonia.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Completed the Bachelor&apos;s Program in the computer science at Solent University, UK.
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at project (<Link href="https://beonmind.ru">Beonmind</Link>)
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Works as a freelance
        </BioSection>
      </Section>

      {/* <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music,{' '}
          <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
          </Link>
          , Playing Drums,{' '}
          <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>
          , Leica, Machine Learning
        </Paragraph>
      </Section> */}

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Alexjarv" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                Github
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://t.me/carvecarv" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoSend}/>}
              >
                Telegram
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/etozhecarv" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                Instagram
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.com/users/338683174311690242" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
        </List>

        {/* <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box> */}
        <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Lets work together
        </Heading>
          <form 
          action='mailto:jarv.aleksei@gmail.com?subject=Lets work together'
          method='POST'
          encType='text/plain'
          id="EmailForm"
          >
            <FormControl display="flex" flexDirection="column" p="6">
              <Textarea onChange={e =>{
                if(e.target.value !== ''){
                  EmailForm.action = formAction + '&body=' + e.target.value
                } else {
                  EmailForm.action = formAction
                }
              }} required rows="3" name="body" id="EmailBody" placeholder="Your message"/>
              <Button type="submit" colorScheme="teal" m="8">Send it</Button>
            </FormControl>
          </form>
        </Section>
      </Section>
    </Container>
  </Layout>
)

export default Home
