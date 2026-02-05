import {
  Container,
  Heading,
  Badge,
  List,
  ListItem,
  Link,
  Box,
} from '@chakra-ui/react';
import Layout from '@/components/layouts/article';
import Section from '@/components/section';
import Paragraph from '@/components/paragraph';

const CozapWebsite = () => {
  return (
    <Layout title="Cozap Company Website">
      <Container>
        <Heading as="h2" variant="page-title" mb={2}>
          Cozap Company Website
        </Heading>
        <Section delay={0.1}>
          <Paragraph>
            Designed and developed the Cozap company website using Next.js and
            TailwindCSS, focusing on a modern, responsive user experience and
            maintainable front-end structure.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <List spacing={2}>
            <ListItem>
              <Badge colorScheme="orange" mr={2}>
                Year
              </Badge>
              2024
            </ListItem>
            <ListItem>
              <Badge colorScheme="orange" mr={2}>
                Role
              </Badge>
              Web Developer
            </ListItem>
            <ListItem>
              <Badge colorScheme="orange" mr={2}>
                Stack
              </Badge>
              Next.js, TailwindCSS
            </ListItem>
            <ListItem>
              <Badge colorScheme="orange" mr={2}>
                Website
              </Badge>
              <Link href="https://cozap.ca" target="_blank">
                cozap.ca
              </Link>
            </ListItem>
          </List>
        </Section>
        <Box h={4} />
      </Container>
    </Layout>
  );
};

export default CozapWebsite;
