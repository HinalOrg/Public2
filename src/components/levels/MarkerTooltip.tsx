import React, { FC, ReactElement } from 'react';
import { Tooltip } from '../tooltip';
import { Level } from './types';
import styled from '@emotion/styled';
import { useUser } from '../../contexts/user';

interface MarkerTooltipProps {
  children: ReactElement;
  level: Level;
}

const Trophies = styled.div`
  display: flex;
  margin-top: 6px;
  > svg {
    margin-right: 4px;
    height: 30px;
  }
`;

const MarkerTooltip: FC<MarkerTooltipProps> = ({ children, level }) => {
  const user = useUser();

  const trophies = level.trophies.map(trophy => {
    const progress =
      user?.islands[trophy.island]?.levels[trophy.level]?.trophies[trophy.name]
        ?.progress || 0;

    return <trophy.ProgressIcon key={trophy.name} progress={progress} />;
  });

  return (
    <Tooltip
      text={
        <>
          <h5>{level.title}</h5>
          <Trophies>{trophies}</Trophies>
        </>
      }
      placement="bottom"
    >
      {children}
    </Tooltip>
  );
};

export default MarkerTooltip;