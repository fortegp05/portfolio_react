import React, { FC } from 'react';
import Policy from '../../atoms/engineer/Policy';
import Products from '../../atoms/engineer/Products';
import Technologies from '../../atoms/engineer/Technologies';
import Agenda from '../../molecules/engineer/Agenda';

const Contents: FC = () => {
  return (
    <section>
      <Technologies />
      <Policy />
      <Products />
      <Agenda />
    </section>
  );
};

export default Contents;
