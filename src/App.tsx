import GameContainer from "./components/GameContainer";
import GameDetail from "./components/GameDetail";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
      <NavBar />
      {/* <Main />
      <GameContainer /> */}
      <GameDetail />
    </>
  );
}
