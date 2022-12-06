
import ContentPageLayout from "../components/layouts/ContentPageLayout";
import {DeveloperCard} from '../components/developers'
import { getDevelopers } from "../libs/getDevelopers";


function UiUxPage({devs}) {



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
        />)}
     
    </>
  );
}

export default UiUxPage;

UiUxPage.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
      type="ui-ux developers"
      title="D20 Developers"
      tagline="We always roll high initative"
    >
      {page}
    </ContentPageLayout>
  )
}

export async function getStaticProps(content){
    const devs = await getDevelopers()

    const uiDevs = devs.filter(devs => devs.type==='ui ux')
    return{
        props:{
            devs:uiDevs
        }
    }
}
