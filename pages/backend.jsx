import {ContentPageLayout} from '../components/layouts'
import {DeveloperCard} from './../components/developers'
import {getDevelopers} from '../libs/getDevelopers'
function BackendPage() {
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

export default BackendPage;

BackendPage.getLayout = function getLayout(page) {
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
    const backEnd = devs.filter(dev=> dev.type==='back end')
    console.log(backEnd)
    return{
      props:{
        devs:backEnd
      }
    }
  }