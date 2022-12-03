import {ContentPageLayout} from '../components/layouts'
import {DeveloperCard} from './../components/developers'
import {getDevelopers} from '../libs/getDevelopers'
function BackendPage() {
    return(
        <>
              { devs.map(dev=> <DeveloperCard key={dev.uid} 
        firstName={dev.firstName} 
        lastName={dev.lastName} 
        avatar={dev.avatar}
        email={dev.email}
        experience={dev.experience}
        active={dev.active}
        />)}
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