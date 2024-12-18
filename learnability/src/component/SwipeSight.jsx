import React, { useState, useEffect } from 'react';
import IconCard from './IconCard';
import IconCardSwipe from './IconCardSwipe';
import { FaCoins } from 'react-icons/fa';

const SwipeSight = (props) => {
  const {coins, setCoins,total,setTotal,score,setScore,scoreOfGame1,setScoreOfGame1,totalOfGame1,setTotalOfGame1} = props;
// console.log(totalii,setTotalii,scoreii,setScoreii);

  const [count, setCount] = useState(3); // Initialize count to 3
  const [seen, setSeen] = useState([]); // Keep track of the icons seen
  const [done, setDone] = useState(false);
  const [randomNums, setRandomNums] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numRight, setNumRight] = useState(0);
  const [start, setStart] = useState(false);


  const generateRandomNumbers = () => {
    const nums = [];
    while (nums.length < 10) {
      const randomNumber = Math.floor(Math.random() * 10) + 1; // generates random number between 1 and 10 (inclusive)
      if (!nums.includes(randomNumber)) {
        nums.push(randomNumber);
      }
    }
    setRandomNums(nums);
  };

  useEffect(() => {
   
    generateRandomNumbers();
  }, []);

  useEffect(() => {
    // Use setTimeout to decrement count every second
    const timer = setTimeout(() => {
      if (count > 0 && start) {
        setCount(count - 1);
      }
    }, 1000);

    // Clean up the timer when the component unmounts or count reaches 0
    return () => clearTimeout(timer);
  }, [count, start]);

  const getIcon = () => {
    // Return the IconCard component
    return (
      <div className="bg-gradient-to-br from-purple-700 via-purple-800
       to-indigo-900 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition 
       duration-300 ease-in-out p-8 w-100 h-100">
        <div className="flex justify-center items-center h-full text-white">
          <IconCard className="text-6xl" seen={seen} setSeen={setSeen} setDone={setDone} />
        </div>
      </div>
    );
  };

  const getDoneIcon = (num) => {
    // Return the IconCard component with animation
   if(currentIndex < 10){
    return (
      <div
        className={`bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 rounded-lg shadow-2xl hover:shadow-3xl transform hover:scale-105 transition duration-300 ease-in-out p-8 w-100 h-100 ${
          done ? 'animate-flyoff' : ''
        }`}
      >
        <div className="flex justify-center items-center h-full text-white">
          <IconCardSwipe
            className="text-6xl"
            seen={seen}
            setSeen={setSeen}
            setDone={setDone}
            randomNumber={num}
            numRight={numRight}
          />
        </div>
      </div>
    );
   }
   else {
    // Render the end screen with number of coins won or lost
    let coinsWon = numRight * 10; // Assuming each correct guess wins 5 coins
    if(coinsWon < 0){
      coinsWon = 0
    }

    coinsWon = Math.round(coinsWon);
  

    return (
      <div className="flex justify-center items-center h-full">
    

            <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 rounded-lg shadow-2xl p-8">
        <div className="flex flex-col items-center">
          <div className="text-4xl text-white mb-4">
            {coinsWon > 0 ? 'Congratulations!' : 'Better Luck Next Time!'}
          </div>
          <div className="text-6xl text-white mb-8">
            {coinsWon > 0 ? (
              <>
                {coinsWon} <FaCoins className="inline" /> Won!
              </>
            ) : (
              <>
                {coinsWon} <FaCoins className="inline" /> None Won!
              </>
            )}
          </div>
          <div className="flex space-x-4">
            <button
              className="bg-white text-purple-900 px-4 py-2 rounded-md font-bold text-lg transition duration-300 ease-in-out hover:bg-purple-800 hover:text-white"
              onClick={() => {
                setDone(!done);
                setNumRight(0);
                setCurrentIndex(0);
                setSeen([]);
                setCount(3);
                setRandomNums([]);
                generateRandomNumbers();
              }}
            >
              Play Again
            </button>
            <button
              className="bg-white text-purple-900 px-4 py-2 rounded-md font-bold text-lg transition duration-300 ease-in-out hover:bg-purple-800 hover:text-white"
              onClick={() => {
                setCoins(coins + coinsWon);
                setDone(!done);
                setNumRight(0);
                setCurrentIndex(0);
                setSeen([]);
                setCount(3);
                setRandomNums([]);
                generateRandomNumbers();
              }}
            >
              Claim Coins
            </button>
          </div>
        </div>
      </div>
         
    </div>
    
    );
  }
  };

  const handleLeftArrow = (event) => {
    if (event.key === 'ArrowLeft' && done) {
      setCurrentIndex(currentIndex + 1);
      if (seen.includes(randomNums[currentIndex])) {
        setNumRight(numRight - 0.25);
        setTotal(total+1);
        setTotalOfGame1(totalOfGame1+1);
      }
      else{
        setNumRight(numRight + 0.5);
        setScore(score+1);
        setTotal(total+1);
        setScoreOfGame1(scoreOfGame1+1);
        setTotalOfGame1(totalOfGame1+1);
      }
    }
  };

  const handleRightArrow = (event) => {
    if (event.key === 'ArrowRight') {
      setCurrentIndex(currentIndex + 1);
      if (seen.includes(randomNums[currentIndex])) {
        setNumRight(numRight + 1);
        setScore(score+1);
        setTotal(total+1);
        setScoreOfGame1(scoreOfGame1+1);
        setTotalOfGame1(totalOfGame1+1);
      }
      else{
        setNumRight(numRight - 0.25)
        // setScore(score+1);
        setTotal(total+1);
        setTotalOfGame1(totalOfGame1+1);
      }
    }
  };

  useEffect(() => {
   if(currentIndex < 10){
     window.addEventListener('keydown', handleLeftArrow);
    window.addEventListener('keydown', handleRightArrow);

    return () => {
      window.removeEventListener('keydown', handleLeftArrow);
      window.removeEventListener('keydown', handleRightArrow);
    };
   }
  }, [done, currentIndex, seen]);

  return (
    <div className="flex-grow h-screen flex flex-col items-center justify-center mt-7">
      {
        start ?
        (
          <div className="text-3xl font-bold">{!done ? 'Memorize!' : `⬅ Seen New ➡`}
      </div>
        )
        :
        (
          <div className="text-3xl font-bold">
            Play SwipeSight!
          </div>
        )
      }
  {!done ? (
    <div className="text-5xl font-bold mt-5">
      {
        start ?
        (
          <div>
          {count === 0 ? (
            <div>
              {getIcon()}
            </div>
          ) : (
            <div>
              {count}
            </div>
          )}
          </div>
        ) : <button onClick={() => setStart(true)} className="bg-primary text-white font-medium px-3 py-2 rounded hover:bg-gray-500 transition text-3xl">
          Start
      </button>
      }
    </div>
  ) : (
    <div>
    <div className="text-2xl font-bold mt-5">

      {getDoneIcon(randomNums[currentIndex])}
      </div>
    </div>
  )}
</div>
  )
}

export default SwipeSight;
