import styled from '@emotion/styled';
import React from 'react';
import Button from '../common/Button';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useQuery } from 'react-query';
import { getRankings } from '../../api/accounts';
import PlayerCard, { Card } from './PlayerCard';

const TopPlayers = styled.div`
  display: flex;
  flex-wrap: wrap;

  > * + * {
    margin-left: 12px;
    flex: 1;
  }
`;
const MorePlayers = styled.div`
  overflow: auto;
  > * + * {
    margin-top: 6px;
  }
`;

const Container = styled.div`
  font-family: Roboto Mono;
  margin-top: 48px;
  padding: 15px;
  flex-grow: 1;
  display: grid;
  grid-template-rows: auto auto 1fr;

  nav {
    display: flex;
    flex-basis: 100%;

    * + * {
      margin-left: 15px;
    }
  }

  ${TopPlayers} {
    margin-top: 15px;
  }
  ${MorePlayers} {
    margin-top: 12px;
  }
`;

const NotFirst = styled.div`
  background: #3f3e43;
  padding: 25px 12px;
  ${Card} + ${Card} {
    margin-top: 20px;
  }
`;

const Leaderboard = () => {
  const router = useRouter();
  const { season = '10' } = router.query;
  const activeSeason = typeof season === 'string' ? season : null;
  const { data = [] } = useQuery('rankings', getRankings);

  const [first, second, third, ...rest] = data;

  return (
    <Container onClick={(event) => event.stopPropagation()}>
      <nav>
        <Link
          href={{
            query: {
              subpage: 'leaderboard',
              season: '10',
            },
          }}
          passHref
        >
          <Button as="a" active={activeSeason === season}>
            Season 10
          </Button>
        </Link>
        <Button disabled>Season 11</Button>
      </nav>
      <TopPlayers>
        <PlayerCard size="L" rank={1} ranking={first} />
        <NotFirst>
          <PlayerCard size="M" rank={2} ranking={second} />
          <PlayerCard size="M" rank={3} ranking={third} />
        </NotFirst>
      </TopPlayers>
      <MorePlayers>
        {rest.map((ranking, index) => (
          <PlayerCard
            key={ranking.summonerName}
            size="S"
            rank={index + 4}
            ranking={ranking}
          />
        ))}
      </MorePlayers>
    </Container>
  );
};

export default Leaderboard;
