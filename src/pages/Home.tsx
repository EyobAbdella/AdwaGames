import GameContainer from "../components/GameContainer";
import Main from "../components/Main";
import useFetchGames from "../hooks/useFetchGames";
import useGames from "../hooks/useGames";
import Game from "../types/Game";

const Home = () => {
  const { data } = useGames();

  const { data: topGames } = useFetchGames("?ordering=-rating");
  const { data: newReleased } = useFetchGames("?ordering=-release_date");
  const { data: eSports } = useFetchGames("?tags=esports");
  const { data: educationalGames } = useFetchGames("?tags=education");
  const { data: upComing } = useFetchGames(
    "?dates=2024-02-08,2025-02-08&ordering=-added"
  );

  const game = data?.results[
    Math.floor(Math.random() * data.results.length)
  ] as Game;

  return (
    <>
      <Main game={game} />
      <GameContainer title='Top Games' games={topGames?.results} />
      <GameContainer title='Up Coming' games={upComing?.results} />
      <GameContainer title='New Released' games={newReleased?.results} />
      <GameContainer
        title='Educational Games'
        games={educationalGames?.results}
      />
      <GameContainer title='Esports Games' games={eSports?.results} />
    </>
  );
};

export default Home;
