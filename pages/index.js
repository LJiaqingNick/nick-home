import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link,
} from '@chakra-ui/react';
import Section from '@/components/section';
import Paragraph from '@/components/paragraph';
import NextLink from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '@/components/bio';

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I'm a full-stack developer based in Vancouver.
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nick Liu
          </Heading>
          <p> Fullstack Developer / Data Scientist / Athletic / Reader </p>
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
          About Nick
        </Heading>
        <Paragraph>
          Nick is a versatile full-stack developer and data Scientist with a
          Master&apos;s in Computer Science from Northeastern University,
          Vancouver. Skilled in website development, he has led data management
          and software projects, improving efficiencies and user experiences.
          Beyond his professional pursuits, Nick is passionate about
          bodybuilding and reading, demonstrating his commitment to continuous
          personal and physical growth. His work ethic and innovative approach
          to challenges reflect a dedication to excellence in every facet of his
          life.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="orange">
              My porfolio
            </Button>
          </NextLink>
        </Box>
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
          <BioYear>2015</BioYear>
          Completed a Bachelor's degree in Business Finance at Washington State
          University in the United States.
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed a Master&apos;s degree in Computer Science at Northeastern
          University in the Canada.
        </BioSection>
        <BioSection>
          <BioYear>2023 to present</BioYear>
          Working at{' '}
          <Link href="https://glocalfoundation.ca/">
            Glocal Foundation Of Canada
          </Link>
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Solving Puzzle, Reading, Bodybuilding, Traveling, Music.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Page;
