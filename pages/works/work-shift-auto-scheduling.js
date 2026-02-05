import {
  Container,
  Heading,
  Badge,
  List,
  ListItem,
  Box,
} from '@chakra-ui/react';
import Layout from '@/components/layouts/article';
import Section from '@/components/section';
import Paragraph from '@/components/paragraph';

const WorkShiftAutoScheduling = () => {
  return (
    <Layout title="Work Shift Auto-Scheduling System">
      <Container>
        <Heading as="h2" variant="page-title" mb={2}>
          Work Shift Auto-Scheduling System
        </Heading>
        <Section delay={0.1}>
          <Paragraph>
            A Python-based back-end service hosted in Binder that automates work
            shift scheduling for small businesses. I owned the project
            end-to-end, collaborating with clients to translate requirements
            into technical solutions and delivering features that reduced manual
            scheduling effort.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <List spacing={2}>
            <ListItem>
              <Badge colorScheme="orange" mr={2}>
                Year
              </Badge>
              2021
            </ListItem>
            <ListItem>
              <Badge colorScheme="orange" mr={2}>
                Role
              </Badge>
              Project Owner / Developer
            </ListItem>
            <ListItem>
              <Badge colorScheme="orange" mr={2}>
                Stack
              </Badge>
              Python, Binder
            </ListItem>
            <ListItem>
              <Badge colorScheme="orange" mr={2}>
                Impact
              </Badge>
              Supported 10+ small businesses and reduced scheduling effort.
            </ListItem>
          </List>
        </Section>
        <Box h={4} />
      </Container>
    </Layout>
  );
};

export default WorkShiftAutoScheduling;
