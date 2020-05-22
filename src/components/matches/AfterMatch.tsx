import styled from '@emotion/styled';
import { FC, useState, useEffect } from 'react';
import Backdrop from '../common/Backdrop';
import SandClock from '../icons/SandClock';
import Modal from '../modals/Modal';
import TrophyListItem from '../trophies/TrophyListItem';
import { Trophy } from '../trophies/types';
import { firstBlood, flail } from '../trophies/combat';
import { Tooltip } from '../tooltip';
import ModalButton from '../modals/ModalButton';
import DevButton from '../common/DevButton';
import { keyframes } from '@emotion/core';

const sandClockMotion = keyframes`
  from {
    transform: rotateZ(0deg);
  }

  80% {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(180deg);
  }
`;

const sandMotion1 = keyframes`
  from {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
`;

const sandMotion2 = keyframes`
  from {
    opacity: 0;
  }

  50%: {
    opacity: 1;
  }

  80% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
`;

const sandMotion3 = keyframes`
  from {
    opacity: 0;
  }

  50$ {
    opacity: 0;
  }

  80% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translate3d(0,0,0);
  }

  40% {
    transform: translate3d(0, -4px, 0);
  }

  60% {
    transform: translate3d(0, -2px, 0);
  }
`;

const AnimatedSandClock = styled(SandClock)<{ loading: boolean }>`
  animation: ${(props) => (props.loading ? sandClockMotion : bounce)} 2s ease
    infinite;

  > .frame-1 {
    opacity: 0;
    animation: ${(props) => (props.loading ? sandMotion1 : 'none')} 2s ease
      infinite;
  }

  > .frame-2 {
    opacity: 0;
    animation: ${(props) => (props.loading ? sandMotion2 : 'none')} 2s ease
      infinite;
  }

  > .frame-3 {
    animation: ${(props) => (props.loading ? sandMotion3 : 'none')} 2s ease
      infinite;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 10px;
  }
`;

const Message = styled.div`
  text-transform: uppercase;
  font-family: Roboto Mono;
  font-size: 1.2rem;
`;

const List = styled.div`
  flex-grow: 1;
  overflow: auto;
  margin-bottom: 20px;
`;

interface AfterMatchProps {
  className?: string;
}

const ButtonContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 15px 10px 10px;
`;

const AfterMatch: FC<AfterMatchProps> = ({ className }) => {
  const [loading, setLoading] = useState(false);
  const [match, setMatch] = useState<{ trophies: Trophy[] }>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!loading) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoading(false);
      setShowTooltip(true);
      setMatch({
        trophies: [firstBlood, flail],
      });
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [loading]);

  return (
    <>
      {!match && !loading && (
        <DevButton
          onClick={() => {
            setLoading(true);
            setShowTooltip(true);
            setShowModal(true);
          }}
        >
          Load match
        </DevButton>
      )}
      {(loading || match) && (
        <AnimatedSandClock
          className={className}
          data-tooltip-id="sandClock"
          onClick={() => setShowModal(true)}
          loading={loading}
        />
      )}
      {!showModal && showTooltip && (
        <Tooltip
          title={loading ? 'Loading Trophies...' : 'Trophies are ready!'}
          onClick={() => setShowTooltip(false)}
          text={
            loading ? (
              'It may take a few moments.. we’re loading and concluding your last match to show your progress.'
            ) : (
              <>
                <div>All set, want to see the progress you’ve made?</div>
                <ButtonContainer>
                  <ModalButton onClick={() => setShowModal(true)}>
                    Check now!
                  </ModalButton>
                </ButtonContainer>
              </>
            )
          }
          placement="topLeft"
          targetId="sandClock"
          pointerEvents
        />
      )}
      {showModal && loading && (
        <Backdrop onClick={() => setShowModal(false)}>
          <Container>
            <img src="/logo.png" />
            <Message>Loading Trophies...</Message>
          </Container>
        </Backdrop>
      )}
      {showModal && match && (
        <Modal
          onClose={() => {
            setShowTooltip(false);
            setShowModal(false);
            setMatch(null);
          }}
          title="Trophies completed in this match, GG!"
        >
          <List>
            {match.trophies.map((trophy) => (
              <TrophyListItem trophy={trophy} key={trophy.name} borderless />
            ))}
          </List>
        </Modal>
      )}
    </>
  );
};

export default AfterMatch;