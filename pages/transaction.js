import head from 'next/head';
import TransContainer from '../src/components/containers/TransContainer';

export default function Transaction() {
  return (
    <div>
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </head>
      <TransContainer />
    </div>
  );
}
