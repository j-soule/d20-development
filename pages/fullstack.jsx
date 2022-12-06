import {ContentPageLayout} from '../components/layouts'
import {getDevelopers} from '../libs/getDevelopers'
import { DeveloperCard} from './../components/developers'

function FullstackPage({devs}) {
    return(
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

export default FullstackPage;

FullstackPage.getLayout = function getLayout(page) {
  return (
    <ContentPageLayout
    type="full stack developers"
    title="D20 Developers"
    tagline="We always roll high initative"
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