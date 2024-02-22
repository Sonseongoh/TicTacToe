export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>게임 종료!</h2>
      {winner && <p>{winner} 승리!</p>}
      {!winner && <p>무승부!</p>}
      <p>
        <button onClick={onRestart}>재시작</button>
      </p>
    </div>
  );
}
