import {ContentPageHeader} from '../components/headers'

function BackendPage() {
    return(
        <>
        <main></main>
        </>
    );
}

export default BackendPage;

BackendPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout
        type="backend developers"
        title="the next big thing"
        tagline="Makes the last big thing useable"
      >
        {page}
      </ContentPageLayout>
    );
  };