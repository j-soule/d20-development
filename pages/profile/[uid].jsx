
import {DeveloperBioLayout} from '../../components/layouts';
import {BioHeader, BioNav, BioContent} from "../../components/developer-bio";
import { getDevelopers } from "../../libs/getDevelopers.js";
import { generateRandomTitle } from "../../libs/generateRandomTitle.js";

function SingleDeveloperPage({ avatar, firstName, lastName, city, heading, ...bio}) {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <BioNav avatar={avatar} firstName={firstName} lastName={lastName} />
      <BioHeader city={city}  heading={heading} />
      <BioContent topic="About Me" />
    </div>
  );
}

export default SingleDeveloperPage;

export async function getStaticPaths() {
  const devs = await getDevelopers();
  const paths = devs.map((dev) => ({ params: { uid: dev.uid } }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const devs = await getDevelopers();
  const dev = devs.find((dev) => dev.uid === params.uid);
  const bio = { ...dev, header: generateRandomTitle() };

  return {
    props: bio,
  };
}

SingleDeveloperPage.getLayout = function getLayout(page) {
    return (
      <DeveloperBioLayout>
        {page}
      </DeveloperBioLayout>
    )
  }
