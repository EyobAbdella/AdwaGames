import GameContainer from "./components/GameContainer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      {/* <GameCard /> */}
      <Main />
      <GameContainer />
    </>
  );
}
