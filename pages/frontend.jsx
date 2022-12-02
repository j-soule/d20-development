import { ContentPageHeader } from "../components/headers";

function FrontEndPage() {
  return (
    <>
      <main></main>
    </>
  );
}

export default FrontEndPage;

FrontEndPage.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
      type="frontend developers"
      title="the next big thing"
      tagline="Makes the last big thing useable"
    >
      {page}
    </ContentPageLayout>
  );
};
