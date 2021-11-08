import DefaultView from "./DefaultView";
// import React, {useState, useEffect} from "react";
import React from "react";

function SortPlays(props) {
  const [list, setList] = React.useState(props.plays);
  <DefaultView plays={list}/>
  // let listItem = props.plays;
  // let setList = '';
  // const [list, setList]
  // this.setState({listItem: setList});
  
  // let[list, setList] = useState(setList);



  function handleChange(event){
    // console.log(event.target.value);
    
    if (event.target.value === "title") {
      // DefaultView.sortPlays(true);
      console.log(event.target.value + " is selected");
      sortByTitle();
    } else if (event.target.value === "year") {
      // DefaultView.sortPlays(false);
      console.log(event.target.value + " is selected");
      SortByDate();
    } else if (event.target.value === "genre") {
      // DefaultView.sortPlays(false);
      console.log(event.target.value + " is selected");
      sortByGenre();
    }
  };

  function sortByTitle() {
    console.log("sort by title");
    console.log(props.plays);
    const titleSort = props.plays.sort((a, b) => (a.title > b.title) ? 1 : -1);
    console.log("Printing only titles: ");
    console.log(titleSort);
    
    this.setState({plays: titleSort});
    // SortedList(titleSort);

    // const SortedList = (listSorted) => {
    //   const [list, setList] = useState(listSorted);
    //   console.log("SortedList Title reached...");
    // }
  }

  function SortByDate() {
    console.log("sort by date");
    console.log(props.plays);
    const dateSort = props.plays.sort((a, b) => (a.year > b.year) ? 1 : -1);
    console.log("Printing only dates: ");
    console.log(dateSort);

    // this.setState({plays: dateSort});
    // SortedList(dateSort);

    setList(dateSort);
      
    

  }

  function sortByGenre() {
    console.log("sort by genre");
    console.log(props.plays);
    const genreSort = props.plays.sort((a, b) => (a.genre > b.genre) ? 1 : -1);
    console.log("Printing only genres: ");
    console.log(genreSort);
    
    this.setState({plays: genreSort});
    // SortedList(genreSort);

    // const SortedList = (listSorted) => {
    //   const [list, setList] = useState(listSorted);
    //   console.log("SortedList Genre reached...");
    // }
  }

  return (
    <section>
      <label>
        Sort by:
        <form onChange={handleChange}>
          <select>
            <option value="select">Select</option>
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="genre">Genre</option>
          </select>
        </form>
      </label>
    </section>
  );
}
export default SortPlays;