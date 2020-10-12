import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/index.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
