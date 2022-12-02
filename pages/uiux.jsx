
import ContentPageLayout from "../components/layouts/ContentPageLayout";
import {DeveloperCard} from '../components/developers'
import { getDevelopers } from "../libs/getDevelopers";


function UiUxPage({ui}) {

    console.log(ui)

  return (
    <>
     
        { ui.map(dev=> <DeveloperCard key={dev.uid} 
        fullName={dev.fullName} 
        avatar={dev.avatar}
        jobTitle={dev.jobTitle}
        experience={dev.experience}
        availability={dev.availability}
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
            ui:uiDevs
        }
    }
}
