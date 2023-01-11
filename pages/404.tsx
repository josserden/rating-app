import { FC } from 'react';
import { withLayout } from 'layout/Layout/Layout';
import { Heading } from '../components';

const NotFound: FC = () => {
  return (
    <>
      <Heading tag="h1">Page not found</Heading>
    </>
  );
};

export default withLayout(NotFound);
