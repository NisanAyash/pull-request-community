import { useRouter } from 'next/router';
import Head from 'next/head';
import { getMetaData } from '../../services/metaData';
import Navbar from './navbar/navbar';

const Layout = ({ children }: LayoutProps) => {
  const currentRoute = useRouter().pathname;
  const { title, metaContents } = getMetaData(currentRoute);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta property="image" content="/images/logo.png" />
        <meta property="og:image" content="/images/logo.png" />
        <title>{title}</title>
        {metaContents && metaContents.map((meta, i) => <meta key={i} {...meta} />)}
      </Head>
      <Navbar />
      <div className="layout__container layout__body--container">{children}</div>
    </div>
  );
};

interface LayoutProps {
  children: object;
}

export default Layout;
