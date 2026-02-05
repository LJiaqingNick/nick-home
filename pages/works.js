import { Container, Heading, SimpleGrid, Link } from '@chakra-ui/react';
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
            <WorkGridItem
              id="cozap-website"
              title="Cozap Company Website"
              thumbnail={thumbEchoic}
            >
              Designed and developed the Cozap website with Next.js and
              TailwindCSS, delivering a modern, responsive experience. Website:{' '}
              <Link href="https://cozap.ca" target="_blank">
                cozap.ca
              </Link>
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="work-shift-auto-scheduling"
              title="Work Shift Auto-Scheduling System"
              thumbnail={thumbEchoic}
            >
              Python-based backend service that automates work shift scheduling
              for small businesses, with end-to-end ownership from requirements
              to delivery.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
