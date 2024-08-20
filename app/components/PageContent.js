// components/PageContent.js
import Header from './Header';
import CTASection from './CTASection';
import StatsSection from './StatsSection';
import OffreSection from './OffreSection';
import FeatureSection from './FeatureSection';
import Footer from './Footer';
import TeamsSection from './TeamsSection';
import DataTable from './DataTable';
import { useAppContext } from '@/context/AuthContext';

const sections = {
  CTASection,
  StatsSection,
  OffreSection,
  FeatureSection,
  TeamsSection,
  DataTable,
};

const PageContent = () => {
  const { isAuthenticated, user } = useAppContext();

  return (
    <main>
      <Header />
      {Object.keys(sections).map((key) => {
        const Component = sections[key];
        return (
          <Component key={key} user={user} isAuthenticated={isAuthenticated} />
        );
      })}
      <Footer />
    </main>
  );
};

export default PageContent;
