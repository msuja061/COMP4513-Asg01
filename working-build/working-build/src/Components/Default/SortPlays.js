import DefaultView from "./DefaultView";
import ListOfPlays from "./ListOfPlays";
import React from "react";

const SortPlays = (props) => {
  let list = props.plays;
  let tempList = props.plays;
  const [howToSort, setHowToSort] = React.useState("title");

  const sortChange = (event) =>{
    if (event.target.value === "title") {
      setHowToSort("title");
    } else if (event.target.value === "year") {
      setHowToSort("year");
    } else if (event.target.value === "genre") {
      setHowToSort("genre");
    }
  }

  const sortByTitle = () => {
    console.log("sort by title");
    console.log(props.plays);
    const titleSort = props.plays.sort((a, b) => (a.title > b.title) ? 1 : -1);
    console.log("Printing only titles: ");
    console.log(titleSort);
    list = titleSort;
  }

  const SortByDate = () => {
    console.log("sort by date");
    console.log(props.plays);
    const dateSort = props.plays.sort((a, b) => (a.likelyDate > b.likelyDate) ? 1 : -1);
    console.log("Printing only dates: ");
    console.log(dateSort);
    list = dateSort;
  }

  const sortByGenre = () => {
    console.log("sort by genre");
    console.log(props.plays);
    const genreSort = props.plays.sort((a, b) => (a.genre > b.genre) ? 1 : -1);
    console.log("Printing only genres: ");
    console.log(genreSort);
    list = genreSort;
  }

  const handleYearChange = (event) => {
    console.log("Year changed...");
    console.log(event.target.value);
    console.log(event.target.name);
    let startYear=0;
    let endYear=0;
    
    if(event.target.name === "start" && event.target.value !== "") {
      startYear = event.target.value;
      console.log("startYear: " + startYear);
    }else if(event.target.name === "end" && event.target.value !== ""){
      endYear = event.target.value;
      console.log("endYear: " + endYear);
    }
    
    if(startYear !== 0 && endYear !== 0){
      const betweenYears = props.plays.filter((a) => a.likelyDate >= startYear && a.likelyDate <= endYear);
      list = betweenYears;
      // tempList = betweenYears;
      setHowToSort("between");

    } 
    else if(startYear !== 0 && endYear === 0){
      const afterYear = props.plays.filter((a) => a.likelyDate >= startYear);
      list = afterYear;
      // tempList = afterYear;
      setHowToSort("after");
    }
    else if(startYear === 0 && endYear !== 0){
      const beforeYear = props.plays.filter((a) => a.likelyDate <= endYear);
      list = beforeYear;
      // tempList = beforeYear;
      setHowToSort("before");
    }
    else{
      list = props.plays;
      // tempList = props.plays;
    }

    console.log("Printing filtered list: ");
    // console.log(tempList);
    console.log(list);

    // return list.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
  }

  const filterByYear = () => {
    console.log("filter by year");
    console.log(props.plays);
    const yearFilter = props.plays.filter((play) => play.likelyDate.includes(props.filter));
    console.log("Printing only years: ");
    console.log(yearFilter);
    list = yearFilter;
  } 

  function genList() {
    if (howToSort === "title") {
      sortByTitle();
      // filterByTitle();
      return list.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "year") {
      SortByDate();
      return list.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "genre") {
      sortByGenre();
      return list.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "between") {
      return list.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
      return tempList.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "after") {
      return list.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "before") {
      return list.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else {
      return list.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    }
  }

  function genList2() {
    console.log("genList2: ");
    console.log(tempList);
    return tempList.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
  }

    return (
      <section>
        <label>
          Sort by:
          <form onChange={sortChange}>
            <select>
              <option value="select">Select</option>
              <option value="title">Title</option>
              <option value="year">Year</option>
              <option value="genre">Genre</option>
            </select>
          </form>
        </label>
         <label>
           Filter by years:
           <form onChange={handleYearChange}>
             <input type="text" name="start" value={props.filter} placeholder="Starting Date" />
             <input type="text" name="end" value={props.filter} placeholder="Ending Date" />
          </form>
        </label>
        <ul>
          {genList()}
        </ul>
        {/* <ul>
          {genList2()}
        </ul> */}
      </section>
    );
}
export default SortPlays;