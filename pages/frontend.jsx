import ContentPageLayout from "../components/layouts/ContentPageLayout";
import {DeveloperCard} from '../components/developers'
import { getDevelopers } from "../libs/getDevelopers";


function FrontEndPage({devs}) {

  return (
    <>
     <ContentPageLayout 
     type="front end developers"
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

export default FrontEndPage;

FrontEndPage.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
    type="front end developers"
    title="D20 Developers"
    tagline="We always roll high initiative"
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
