import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

const HOMEPAGE_METADATA_WITH_REFERRAL = {
  description: 'Earn up to 8% back in Dogecoin.',
  ogDescription: 'Earn up to 8% back in Dogecoin.',
  ogImageWidth: '1200',
  ogImageHeight: '628',
  ogTitle: (inviterReferralName : string) => `DogeCard - ${inviterReferralName} invited you to earn up to 8% Dogecoin Rewards.`,
  ogUrl: (inviterReferralCode: string ) =>
    `${process.env.NEXT_PUBLIC_DOMAIN}${inviterReferralCode}`,
  themeColor: '#5cd95b',
  ogImage: `${process.env.NEXT_PUBLIC_DOMAIN}logos/referral-preview.png`,
  twitterTitle: (inviterReferralName: string) => `DogeCard - ${inviterReferralName} invited you to earn up to 8% Dogecoin Rewards.`
};

const HOMEPAGE_MAIN_DATA = {
  title: (inviterReferralName: string) => 'DogeCard - up to 8% back in Dogecoin Rewards.',
  description: 'Up to 8% back in Dogecoin Rewards. Start earning Dogecoin passively.'
};

const HOMEPAGE_METADATA_WITHOUT_REFERRAL = {
  ogDescription: 'Earn up to 8% back in Dogecoin.',
  ogImageWidth: '1200',
  ogImageHeight: '628',
  ogTitle: (inviterReferralName: string) => 'DogeCard - up to 8% Dogecoin Rewards.',
  ogUrl: (inviterReferralCode: string) => `${process.env.NEXT_PUBLIC_DOMAIN}`,
  themeColor: '#5cd95b',
  ogImage: `${process.env.NEXT_PUBLIC_DOMAIN}logos/home-preview.png`,
  twitterTitle: (inviterReferralCode: string) => 'DogeCard - up to 8% Dogecoin Rewards.'
};

const SITE_DATA = {
  avalancheCard: false,
  dogeCardSkeleton: true,
  dogeCard: true,
  prideCard: false,
  terraCard: false,
  choiceCard: false,
  liquidityCard: false,
  shibCard: false,
  causeCard: false,
  firstAppName: 'Doge',
  appName: 'DogeCard',
  secondaryAppName: '',
  website: 'dogeCard',
  siteName: 'Marketing Website',
  coinName: 'Dogecoin',
  inputPlaceholderText: 'Enter phone number',
  bannerTitle: 'Get your <br/> DogeCard',
  subBannerTitle: 'Buy, sell, send, spend, earn Dogecoin',
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  domainMailto: 'dogecard.co',
  phoneNumber: '(424) 272-7344'
};

const OG_CONTENT = {
  locale: 'en_US',
  site: `${SITE_DATA.appName}`,
  contentType: 'text/html; charset=utf-8',
  type: 'website'
};

class MyDocument extends Document {
  render() {
    const jsonLd = {
      '@context': 'http://schema.org',
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': process.env.NEXT_PUBLIC_DOMAIN
      },
      headline: HOMEPAGE_MAIN_DATA.title,
      image: HOMEPAGE_METADATA_WITH_REFERRAL.ogImage,
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: SITE_DATA.appName
      },
      publisher: {
        '@type': 'Organization',
        name: 'Liquidity',
        logo: {
          '@type': 'ImageObject',
          url: HOMEPAGE_METADATA_WITH_REFERRAL.ogImage
        }
      },
      description: HOMEPAGE_MAIN_DATA.description
    };

    // const pageRoute = this.props.__NEXT_DATA__.page;
    const pageQuery = (this.props.ampPath || '').replace('/', '');

    const hasInviterReferral = pageQuery.length === 8;
    const inviterReferralCode = (pageQuery as string) || '';

		console.log('inviterReferralCode', inviterReferralCode);

    const ogMetadata = (hasInviterReferral
      ? HOMEPAGE_METADATA_WITH_REFERRAL
      : HOMEPAGE_METADATA_WITHOUT_REFERRAL) as any;

    return (
      <Html lang="en" prefix="og: https://ogp.me/ns#">
        <Head>
          <meta property="og:locale" content={OG_CONTENT.locale} />
          <meta property="og:site_name" content={OG_CONTENT.site} />
          <meta httpEquiv="Content-Type" content={OG_CONTENT.contentType} />
          <meta property="og:type" content={OG_CONTENT.type} />
          <meta name="theme-color" content="#000000" />
          <meta name="keywords" content={SITE_DATA.appName} />
          <meta property="og:description" content={ogMetadata.ogDescription} />
          <meta property="og:image:width" content={ogMetadata.ogImageWidth} />
          <meta property="og:image:height" content={ogMetadata.ogImageHeight} />
          {/* <meta property="og:title" content={ogMetadata.ogTitle('')} /> */}
          <meta
            property="og:url"
            content={ogMetadata.ogUrl(inviterReferralCode)}
          />
          <meta name="theme-color" content={ogMetadata.themeColor} />
          <meta property="og:image" content={ogMetadata.ogImage} />
          <meta
            property="article:modified_time"
            content={new Date().toISOString()}
          />
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:site"
            content={`${SITE_DATA.appName} ${SITE_DATA.siteName}`}
          />
          <meta
            property="twitter:title"
            content={ogMetadata.twitterTitle(inviterReferralCode)}
          />
          <meta
            property="twitter:description"
            content={ogMetadata.ogDescription}
          />
          <meta property="twitter:image" content={ogMetadata.ogImage} />
          <meta
            name="twitter:image:alt"
            content={`${SITE_DATA.appName} Preview Image`}
          />
          <link
            rel="shortcut icon"
            sizes="76x76"
            href={`${process.env.NEXT_PUBLIC_DOMAIN}logos/favicon.ico`}
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={`${process.env.NEXT_PUBLIC_DOMAIN}logos/favicon.ico`}
          />
					{/* <Partytown
            debug={true}
            forward={[
              'twq',
              'ttq',
              'rdt',
              'snaptr',
              'analytics',
              'analytics.track',
              'analytics.identify'
            ]}
          /> */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {/*  AB Tasty Tag */}
          {/* <script
            type="text/partytown"
            src="https://try.abtasty.com/553d9dbfa7f9050a8d6fa8c3a84dc44d.js"
          ></script> */}

          {/* Reddit Pixel  */}
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `!function(w,d){if(!w.rdt){var p=w.rdt=function(){p.sendEvent?p.sendEvent.apply(p,arguments):p.callQueue.push(arguments)};p.callQueue=[];var t=d.createElement("script");
          t.src="https://www.redditstatic.com/ads/pixel.js",t.async=!0;var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(t,s)}}
          (window,document);rdt('init','t2_dk3s6gpn');rdt('track', 'PageVisit'); `
            }}
          />
          {/* Twitter universal website tag code  */}
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          {/* Insert Twitter Pixel ID and Standard Event data below */}
          twq('init','o6qy7');
          twq('track','PageView');`
            }}
          />
          {/* <!-- TikTok Pixel Code --> */}
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `!function (w, d, t) {
                w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
                ttq.load('C574M7SK7EFNSJPVU7AG');
                ttq.page();
              }(window, document, 'ttq');`
            }}
          />
          {/* <!-- Snap Pixel Code --> */}
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
                {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
                a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
                r.src=n;var u=t.getElementsByTagName(s)[0];
                u.parentNode.insertBefore(r,u);})(window,document,
                'https://sc-static.net/scevent.min.js');
                snaptr('init', 'cf39d2c8-5a91-43e1-aab0-3b281c19b56b', {
                'user_email': '__INSERT_USER_EMAIL__'
                });
                snaptr('track', 'PAGE_VIEW');`
            }}
          />
         	{/* <!-- Flockler Embed --> */}
					{/* <script src={`https://plugins.flockler.com/embed/17ed08e129a0cb36f00fbf1d04bb2058/${process.env.NEXT_PUBLIC_APP_FLOCKLER_API_KEY}?autoload=false`}
          /> */}
          {/* <!-- Elfsight platform --> */}
          <script src="https://apps.elfsight.com/p/platform.js" defer></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            type="text/partytown"
            dangerouslySetInnerHTML={{
              __html: `
                !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked = !0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length; e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="lE8sd66U1DiTokQONChWAko1PY9TeNx2";analytics.SNIPPET_VERSION="4.13.2";
                analytics.load("${process.env.NEXT_PUBLIC_API_KEY_SEGMENT}");
                analytics.page();
                }}();
              `
            }}
          ></script>
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => <App {...props} />
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">{initialProps.styles}</React.Fragment>
    ],
    ampPath: ctx?.req?.url
  };
};

export default MyDocument;
