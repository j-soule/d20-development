
import {getDevelopers} from '../libs/getDevelopers'
import { DeveloperCard} from './../components/developers'
import { ContentPageLayout } from "../components/layouts";
function FrontEndPage({devs}) {
  return (
    <>
        { devs.map(dev=> <DeveloperCard key={dev.uid} 
        firstName={dev.firstName} 
        lastName={dev.lastName} 
        avatar={dev.avatar}
        email={dev.email}
        experience={dev.experience}
        active={dev.active}
        uid={dev.uid}
        />
        )}
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
