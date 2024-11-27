import PropTypes from "prop-types";

const GameSelector = ({ selectedGame, onGameChange }) => {
  return (
    <div className="mb-4 pr-5 flex flex-row items-center justify-start">
      <div style={{ border: '1px solid #D1D5DB', display: 'inline-flex', padding: '5px', borderRadius: '10px' }}>
        {/* <label htmlFor="game-select">Select Game:</label> */}
        <select
          id="game-select"
          value={selectedGame}
          onChange={(e) => onGameChange(e.target.value)}
          className="block cursor-pointer sm:w-60 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="mlbb">Mobile Legends: Bang Bang</option>
          <option value="valorant">Valorant</option>
          <option value="pubg">PUBG</option>
        </select>
      </div>
    </div>
  );
};

GameSelector.propTypes = {
  selectedGame: PropTypes.string.isRequired,
  onGameChange: PropTypes.func.isRequired,
};

export default GameSelector;
