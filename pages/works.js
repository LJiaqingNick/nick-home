import { Container,  Heading, SimpleGrid } from '@chakra-ui/react';
import Section from '@/components/section';
import { WorkGridItem } from '@/components/grid-item';
import thumbEchoic from '@/public/images/echoic_banner1.jpg';
import Layout from '@/components/layouts/article';

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="echoic" title="Echoic" thumbnail={thumbEchoic}>
              A music app that harmonizes sleek design with immersive
              soundscapes, offering a refined gateway to the universe of music.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="echoic" title="Echoic" thumbnail={thumbEchoic}>
              A music app that harmonizes sleek design with immersive
              soundscapes, offering a refined gateway to the universe of music.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
