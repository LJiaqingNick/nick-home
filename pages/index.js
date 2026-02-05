import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react';
// import { ChevronRightIcon } from '@chakra-ui/icons';
// import NextLink from 'next/link';
import Layout from '@/components/layouts/article';
import Section from '@/components/section';
import Paragraph from '@/components/paragraph';
import { BioSection, BioYear } from '@/components/bio';
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from 'react-icons/io5';

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a web developer based in Richmond, BC.
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jiaqing (Nick) Liu
            </Heading>
            <p> Full-Stack Web Developer </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/nick_round.png"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Jiaqing (Nick) is a full-stack web developer with a Master&apos;s in
            Computer Science from Northeastern University (Vancouver campus).
            He builds responsive, user-centered web experiences with React,
            Next.js, and TailwindCSS, and supports data workflows with Python
            automation and MongoDB. Recent work includes designing the Cozap
            company website and delivering data collection and visualization
            tools at GLOCAL Foundation of Canada.
          </Paragraph>
          {/* <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
                My porfolio
              </Button>
            </NextLink>
          </Box> */}
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1992</BioYear>
            Born in China.
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            M.S. in Computer Science, Northeastern University (Vancouver
            campus).
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Web Developer &amp; Data Management at{' '}
            <Link href="https://glocalfoundation.ca/" target="_blank" rel="noopener noreferrer">
              Glocal Foundation Of Canada
            </Link>
          </BioSection>
          <BioSection>
            <BioYear>2024</BioYear>
            Web Developer at{' '}
            <Link href="https://cozap.ca/" target="_blank" rel="noopener noreferrer">
              Cozap Staging
            </Link>
            .
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Technical Skills
          </Heading>
          <List spacing={2}>
            <ListItem>
              <Box as="span" fontWeight="bold">
                Languages:
              </Box>{' '}
              Python, Java, C, C++, JavaScript, TypeScript, HTML, CSS
            </ListItem>
            <ListItem>
              <Box as="span" fontWeight="bold">
                AWS:
              </Box>{' '}
              RDS, EC2, Lambda, SQS, Load Balancer
            </ListItem>
            <ListItem>
              <Box as="span" fontWeight="bold">
                Tools &amp; Frameworks:
              </Box>{' '}
              React, Next.js, TailwindCSS, Git, Scrum, PostgreSQL, Pandas,
              NumPy, Linux Administration, Message Queue, Prism, MVC,
              Microservices
            </ListItem>
          </List>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact Me
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/LJiaqingNick" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<IoLogoGithub />}
                >
                  @LJiaqingNick
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/jiaqing-liu/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @LJiaqingNick
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:jiaqingliu1992@gmail.com">
                <Button
                  variant="ghost"
                  colorScheme="orange"
                  leftIcon={<IoMailOutline />}
                >
                  jiaqingliu1992@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
