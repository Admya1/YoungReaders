import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import CoinsDisplay from "./component/CoinsDisplay";
import SwipeSight from "./component/SwipeSight";
import Collectibles from "./component/Collectibles";
import WordWhiz from "./component/WordWhiz";
import Shop from "./component/Shop";
import SpellSafari from "./component/SpellSafari";
import FormApp from "./component/FormApp";
import AppProvider from "./context";
import Home from "./component/Home"
import FormScore from "./component/FormScore";
export default function App() {

  const [coins, setCoins] = React.useState(0);
  const [score,setScore]=React.useState(0);
  const [total,setTotal]=React.useState(0);
  const [scoreOfGame1,setScoreOfGame1]=React.useState(0);
  const [scoreOfGame2,setScoreOfGame2]=React.useState(0);
  const [totalOfGame1,setTotalOfGame1]=React.useState(0);
  const [totalOfGame2,setTotalOfGame2]=React.useState(0);

  const [currentPage, setCurrentPage] = React.useState("Form");

  const numCollectibles = 12
  const [collectibles, setCollectibles] = React.useState([]);

  const [words, setWords] = React.useState(
    [
//       "history",
// "notice",
// "often",
// "opposite",
// "possible",
// "potatoes",
// "reign",
// "remember",
// "strange",
// "strength",
    ]
  )
console.log(score,total);
console.log(scoreOfGame1,totalOfGame1);
  // console.log(currentPage);

  if(currentPage == "Form"){
    return(
      <AppProvider>
        <FormApp setCurrentPage={setCurrentPage} />
      </AppProvider>
    )
  }
  else{
    return (
  <div className="flex">
      <Sidebar setCurrentPage={setCurrentPage} />

    {
      currentPage === "FormScore" ? (
        <FormScore />):
      currentPage === "Home" ? (
        // <center>
        <Home score={score} total={total}  scoreOfGame1={scoreOfGame1} totalOfGame1={totalOfGame1} scoreOfGame2={scoreOfGame2} totalOfGame2={totalOfGame2}/>
        // </center>
        ):
  currentPage === "Collectibles" ? (
    <Collectibles collectibles={collectibles} numCollectibles={numCollectibles} />
  ) : currentPage === "SwipeSight" ? (
    <SwipeSight setCoins={setCoins} coins={coins} setScore={setScore} score={score} setTotal={setTotal} total={total} setScoreOfGame1={setScoreOfGame1} scoreOfGame1={scoreOfGame1} setTotalOfGame1={setTotalOfGame1} totalOfGame1={totalOfGame1}/>
  ) : (
    currentPage === "WordWhiz" ? (
      <WordWhiz words={words} setWords={setWords} coins={coins} setCoins={setCoins} />
    ) : (
      currentPage === "Shop" ? (
        <Shop coins={coins} setCoins={setCoins} collectibles={collectibles} setCollectibles={setCollectibles} />
      ) : (
        currentPage === "SpellSafari" ? (
          <SpellSafari setCoins={setCoins} coins={coins} setScore={setScore} score={score} setTotal={setTotal} total={total} setScoreOfGame2={setScoreOfGame2} scoreOfGame2={scoreOfGame2} setTotalOfGame2={setTotalOfGame2} totalOfGame2={totalOfGame2}/>
        ) : null
      )
    )
  )
}

     <CoinsDisplay coins={coins} setCurrentPage={setCurrentPage} />
  </div>
  
  );
  }
}

