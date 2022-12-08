
import ContentPageLayout from "../components/layouts/ContentPageLayout";
import {DeveloperCard} from '../components/developers'
import { getDevelopers } from "../libs/getDevelopers";


function BackendPage({devs}) {

  return (
    <>
     <ContentPageLayout 
     type="ui ux developers"
      title="D20 Developers"
       tagline="We always roll high initiative">
     
        { devs.map(dev=> <DeveloperCard key={dev.uid} 
       firstName={dev.firstName} 
       lastName={dev.lastName} 
       avatar={dev.avatar}
       email={dev.email}
       phoneNumber={dev.phoneNumber}
       experience={dev.experience}
       active={dev.active}
       type={dev.type}
       uid={dev.uid}
        />)}
     </ContentPageLayout>
    </>
  );
}

export default BackendPage;

BackendPage.getLayout = function getLayout(page) {
    return (
      <ContentPageLayout
      type="backend developers"
      title="D20 Developers"
      tagline="We always roll high initiative"
      >
        {page}
      </ContentPageLayout>
    )
  }

  export async function getStaticProps(content){
    const devs = await getDevelopers()
    const backEnd = devs.filter(dev=> dev.type==='back end')
    console.log(backEnd)
    return{
      props:{
        devs:backEnd
      }
    }
  }