import ContentPageLayout from "../components/layouts/ContentPageLayout";
import {DeveloperCard} from '../components/developers'
import { getDevelopers } from "../libs/getDevelopers";


function FullstackPage({devs}) {

  return (
    <>
     <ContentPageLayout 
     type="full stack developers"
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

export default FullstackPage;

FullstackPage.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
    type="full stack developers"
    title="D20 Developers"
    tagline="We always roll high initiative"
    >
      {page}
    </ContentPageLayout>
  )
}

export async function getStaticProps(content){
  const devs = await getDevelopers()
  const fullStack = devs.filter(dev=> dev.type==='full stack')
  console.log(fullStack)
  return{
    props:{
      devs:fullStack
    }
  }
}