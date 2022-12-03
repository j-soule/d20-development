import {ContentPageLayout} from '../components/layouts'
import {getDevelopers} from './../libs/getDevelopers'
import { DeveloperCard} from './../components/developers'

function FullstackPage() {
    return(
        <>
        {/* { devs.map(dev=> <DeveloperCard key={dev.uid} 
          fullName={dev.fullName} 
          avatar={dev.avatar}
          jobTitle={dev.jobTitle}
          experience={dev.experience}
          availability={dev.availability}
          />)} */}
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