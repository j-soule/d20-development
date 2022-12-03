import Head from 'next/head';
import { ContentPageHeader } from "../headers";

export default function ContentPageLayout({ children, title, type, tagline}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
      <ContentPageHeader tagline={tagline} type={type} title={title} />
      <main className='flex flex-row flex-wrap justify-center sm:gap-4 lg:max-w-6xl my-16 mx-auto'>{children}</main>
    </>
  );
}

// export default ContentPageLayout;