import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Home({ inviterReferralCode }: any) {
  // const router = useRouter();
  // const inviterReferralCode = router.query?.code || '';
  // const hasInviterReferral = inviterReferralCode.length === 8;

  // const router = useRouter();
  // console.log("router", router);
  // const pageQuery = router.asPath.split('/').pop() || '';

  // // const pageQuery = typeof window !== 'undefined' && (window.location.href).split('/').pop() || '';
  // const hasInviterReferral = pageQuery.length === 8;
  // const inviterReferralCode = (pageQuery as string) || '';

  const HOMEPAGE_METADATA_WITH_REFERRAL = {
    description: 'Earn up to 8% back in Democoin.',
    ogDescription: 'Earn up to 8% back in Democoin.',
    ogImageWidth: '1200',
    ogImageHeight: '628',
    ogTitle: (inviterReferralCode: any) =>
      `DemoCard - ${inviterReferralCode} invited you to earn up to 8% Democoin Rewards.`,
    ogUrl: (inviterReferralCode: any) =>
      `https://dev-dogecard.d2ap16azx4464o.amplifyapp.com/${inviterReferralCode}`,
    themeColor: '#5cd95b',
    ogImage: `https://dev-dogecard.d2ap16azx4464o.amplifyapp.com/logos/referral-preview.png`,
    twitterTitle: (inviterReferralCode: any) =>
      `DemoCard - ${inviterReferralCode} invited you to earn up to 8% Democoin Rewards.`,
  };

  const HOMEPAGE_METADATA_WITHOUT_REFERRAL = {
    ogDescription: 'Earn up to 8% back in Democoin.',
    ogImageWidth: '1200',
    ogImageHeight: '628',
    ogTitle: (inviterReferralCode: any) =>
      'DogeCard - up to 8% Democoin Rewards.',
    ogUrl: (inviterReferralCode: any) =>
      'https://dev-dogecard.d2ap16azx4464o.amplifyapp.com/',
    themeColor: '#5cd95b',
    ogImage:
      'https://dev-dogecard.d2ap16azx4464o.amplifyapp.com/logos/home-preview.png',
    twitterTitle: (inviterReferralCode: any) =>
      'DemoCard - up to 8% Democoin Rewards.',
  };

  const ogMetadata = HOMEPAGE_METADATA_WITH_REFERRAL as any;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='DemoCard' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta property='og:type' content='website' />
        <meta name='theme-color' content='#000000' />
        <meta name='keywords' content='DemoCard' />
        <meta property='og:description' content={ogMetadata.ogDescription} />
        <meta property='og:image:width' content={ogMetadata.ogImageWidth} />
        <meta property='og:image:height' content={ogMetadata.ogImageHeight} />
        <meta
          property='og:title'
          content={ogMetadata.ogTitle(inviterReferralCode)}
        />
        <meta
          property='og:url'
          content={ogMetadata.ogUrl(inviterReferralCode)}
        />
        <meta name='theme-color' content={ogMetadata.themeColor} />
        <meta property='og:image' content={ogMetadata.ogImage} />
        <meta
          property='article:modified_time'
          content={new Date().toISOString()}
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content={`DemoCard Marketing Website`} />
        <meta
          property='twitter:title'
          content={ogMetadata.twitterTitle(inviterReferralCode)}
        />
        <meta
          property='twitter:description'
          content={ogMetadata.ogDescription}
        />
        <meta property='twitter:image' content={ogMetadata.ogImage} />
        <meta name='twitter:image:alt' content={`DemoCard Preview Image`} />

        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href='https://nextjs.org/docs' className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href='https://nextjs.org/learn' className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href='https://github.com/vercel/next.js/tree/canary/examples'
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async (context: { query: { code: string; }; }) => {
  const inviterReferralCode = context.query?.code || '';
  const hasInviterReferral = inviterReferralCode.length === 8;
  return {
    props: {
      inviterReferralCode: hasInviterReferral ? inviterReferralCode : ''
    }
  }
}
