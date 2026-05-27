import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AnimatedSection, AnimatedItem } from '../../common/AnimatedSection';
import { SectionHeader } from '../../common/SectionHeader';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { projects } from '../../../data/projects';

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const standard = projects.filter((p) => !p.featured);

  return (
    <AnimatedSection id="projects">
      <Container maxWidth="lg" sx={{ py: { xs: 16, md: 24 } }}>
        <AnimatedItem>
          <SectionHeader number="05" title="Selected Work." accentWord="Work." label="projects" />
        </AnimatedItem>

        {featured && (
          <AnimatedItem>
            <Box sx={{ mb: 6 }}>
              <FeaturedProject project={featured} />
            </Box>
          </AnimatedItem>
        )}

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 4,
          }}
        >
          {standard.map((project) => (
            <AnimatedItem key={project.id}>
              <ProjectCard project={project} />
            </AnimatedItem>
          ))}
        </Box>
      </Container>
    </AnimatedSection>
  );
}
