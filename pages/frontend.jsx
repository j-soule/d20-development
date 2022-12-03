import { ContentPageLayout } from "../components/layouts";
import {getDevelopers} from './../libs/getDevelopers'
import { DeveloperCard} from './../components/developers'
function FrontEndPage() {
  return (
    <>
      {/* {devs.map(dev=> <DeveloperCard key={dev.uid} 
          fullName={dev.fullName} 
          avatar={dev.avatar}
          jobTitle={dev.jobTitle}
          experience={dev.experience}
          availability={dev.availability}
          />)} */}
    </>
  );
}

export default FrontEndPage;

FrontEndPage.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
    type="front end developers"
    title="D20 Developers"
    tagline="We always roll high initative"
    >
      {page}
    </ContentPageLayout>
  )
}

export async function getStaticProps(content){
  const devs = await getDevelopers()
  const frontEnd = devs.filter(dev=> dev.type==='front end')
  console.log(frontEnd)
  return{
    props:{
      devs:frontEnd
    }
  }
}
