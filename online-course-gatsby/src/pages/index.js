import React from 'react';
import { StickyProvider } from 'contexts/app/app.provider';
import { VideoProvider } from 'contexts/video/video.provider';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Modal from 'components/modal';
import Banner from 'sections/banner';
import CtaOne from 'sections/cta-one';
import FAQ from 'sections/faq';
import CtaTwo from 'sections/cta-two';
import WorkFlow from 'sections/workflow';
import Pricing from 'sections/pricing';
import PopularCourse from 'sections/popular-course';
import CtaThree from 'sections/cta-three';
import FavoriteCourse from 'sections/favorite-course';

import 'rc-drawer/assets/index.css';
import 'react-modal-video/css/modal-video.min.css';
import 'swiper/swiper-bundle.min.css';
import 'typeface-dm-sans';

export default function IndexPage() {
  return (
    <StickyProvider>
      <VideoProvider>
        <Layout>
          <SEO
            description="Collection of free top of the line startup landing templates built using react/ next js. Free to download, simply edit and deploy! Updated weekly!"
            title="003 Landguru || Startup Landing"
          />
          <Banner />
          <FavoriteCourse />
          <CtaThree />
          <PopularCourse />
          <WorkFlow />
          <Pricing />
          <CtaTwo />
          <FAQ />
          <CtaOne />
          <Modal />
        </Layout>
      </VideoProvider>
    </StickyProvider>
  );
}
