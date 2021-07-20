import styled from '@emotion/styled';
import ZoomToFit from '../common/ZoomToFit';
import Background from '../islands/Background';
import LevelPanel from '../levels/LevelPanel';
import islands from '../islands/islands';
import { SpecialGradients } from '../levels/special';
import useTargetLevel from '../../hooks/useTargetLevel';
import { GameChildProps } from '../../layouts/GameLayout';
import { WelcomeGuide } from '../guides';
import { useTargetAccount } from '../../contexts/account';

const SizeContainer = styled(ZoomToFit)`
  position: absolute;
  width: 820px;
  height: 720px;
  transition: 0.15s;
  margin: 30px;
`;

const Map = ({ onQueryChange }: GameChildProps) => {
  const account = useTargetAccount();
  const { level, targetLevel } = useTargetLevel();

  const { left, top } = targetLevel || { left: 0, top: 0 };

  return (
    <>
      <SpecialGradients />
      <SizeContainer
        style={{
          left: `calc(50% + ${-left}px)`,
          top: `${-top}px`,
          marginTop: `${top ? 148 : 78}px`,
        }}
      >
        {islands.map(({ name, Component: Island }) => (
          <Island
            key={name}
            onLevelClick={(level) =>
              onQueryChange({ tool: undefined, level: level.name })
            }
            targetLevel={targetLevel}
            status={
              account?.islands.find(
                (accountIsland) => accountIsland.name === name
              )?.status || 'closed'
            }
            levels={account?.levels || []}
          />
        ))}
        <Background />
      </SizeContainer>
      <LevelPanel
        account={account}
        level={targetLevel?.level}
        open={Boolean(level)}
        onToggleClick={(event) => {
          event.stopPropagation();
          onQueryChange({
            tool: undefined,
            level: level ? undefined : 'chooseLevel',
          });
        }}
      />
      <WelcomeGuide />
    </>
  );
};

export default Map;
