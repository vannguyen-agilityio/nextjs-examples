import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const jsonLd = {
      '@context': 'http://schema.org',
      '@type': 'NewsArticle',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://dev-dogecard.d2ap16azx4464o.amplifyapp.com'
      },
      headline: 'Title',
      image: 'https://dev-dogecard.d2ap16azx4464o.amplifyapp.com/logos/home-preview.png',
      datePublished: new Date().toISOString(),
      dateModified: new Date().toISOString(),
      author: {
        '@type': 'Person',
        name: 'DemoCard'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Liquidity',
        logo: {
          '@type': 'ImageObject',
          url: 'https://dev-dogecard.d2ap16azx4464o.amplifyapp.com/logos/home-preview.png'
        }
      },
      description: 'Test description'
    };

    // const pageRoute = this.props.__NEXT_DATA__.page;
    const pageQuery = (this.props.ampPath || '').replace('/', '');

    const hasInviterReferral = pageQuery.length === 8;
    const inviterReferralCode = (pageQuery as string) || '';

    return (
      <Html lang="en" prefix="og: https://ogp.me/ns#">
        <Head>
          <meta property="og:locale" content="en_US" />
          <meta property="og:site_name" content="DemoCard Test" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta property="og:type" content="website" />
          <meta name="theme-color" content="#000000" />
          <meta name="keywords" content="DemoCard Test" />
          <meta property="og:image" content="https://dev-dogecard.d2ap16azx4464o.amplifyapp.com/logos/home-preview.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
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
