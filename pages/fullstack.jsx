import {ContentPageHeader} from '../components/headers'

function FullstackPage() {
    return(
        <>
        <main></main>
        </>
    );
}

export default FullstackPage;

FullstackPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout
        type="fullstack developers"
        title="the next big thing"
        tagline="Makes the last big thing useable"
      >
        {page}
      </ContentPageLayout>
    );
  };