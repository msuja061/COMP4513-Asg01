import DefaultView from "./DefaultView";
import ListOfPlays from "./ListOfPlays";
import React from "react";

/**
 * Sorts array by title, date of release, and genre in ascending order
 * Filters array by a year range
 */
const SortPlays = (props) => {
  let list = props.plays;
  let tempList = props.plays;
  let startYear = 0;
  let endYear = 0;
  let yearCond = "between";
  const [howToSort, setHowToSort] = React.useState("title");
  const [filter, setFilter] = React.useState([]);

  //
  const sortChange = (event) => {
    if (event.target.value === "title") {
      setHowToSort("title");
    } else if (event.target.value === "year") {
      setHowToSort("year");
    } else if (event.target.value === "genre") {
      setHowToSort("genre");
    }
  };

  // Sort array list by play title
  const sortByTitle = () => {
    console.log("sort by title");
    console.log(props.plays);
    const titleSort = props.plays.sort((a, b) => (a.title > b.title ? 1 : -1));
    console.log("Printing only titles: ");
    console.log(titleSort);
    list = titleSort;
  };

  // Sorts array list by play likely release date
  const SortByDate = () => {
    console.log("sort by date");
    console.log(props.plays);
    const dateSort = props.plays.sort((a, b) =>
      a.likelyDate > b.likelyDate ? 1 : -1
    );
    console.log("Printing only dates: ");
    console.log(dateSort);
    list = dateSort;
  };

  // Sorts array list by play genre
  const sortByGenre = () => {
    console.log("sort by genre");
    console.log(props.plays);
    const genreSort = props.plays.sort((a, b) => (a.genre > b.genre ? 1 : -1));
    console.log("Printing only genres: ");
    console.log(genreSort);
    list = genreSort;
  };

  // Filters array list based by years
  const handleYearChange = (event) => {
    console.log("Year changed...");
    console.log(event.target.value);
    console.log(event.target.name);
    // let startYear=0;
    // let endYear=0;

    if (event.target.name === "start" && event.target.value !== "") {
      startYear = event.target.value;
      console.log("startYear: " + startYear);
    } else if (event.target.name === "end" && event.target.value !== "") {
      endYear = event.target.value;
      console.log("endYear: " + endYear);
    }

    if (startYear !== 0 && endYear !== 0) {
      // const betweenYears = props.plays.filter((a) => a.likelyDate >= startYear && a.likelyDate <= endYear);
      // list = betweenYears;
      // tempList = betweenYears;
      yearCond = "between";
      howToSort("between");
      // filterYearChange("between", startYear, endYear);
    } else if (startYear !== 0 && endYear === 0) {
      // const afterYear = props.plays.filter((a) => a.likelyDate >= startYear);
      // list = afterYear;
      // tempList = afterYear;
      yearCond = "after";
      setHowToSort("after");
      // filterYearChange("after", startYear, endYear);
    } else if (startYear === 0 && endYear !== 0) {
      // const beforeYear = props.plays.filter((a) => a.likelyDate <= endYear);
      // list = beforeYear;
      // tempList = beforeYear;
      yearCond = "before";
      setHowToSort("before");
      // filterYearChange("before", startYear, endYear);
    } else {
      // list = props.plays;
      tempList = props.plays;
    }

    // console.log("Printing filtered list: ");
    // console.log(tempList);

    // return list.map( (plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
  };

  // Determines if years inputted is a ranged input or for years raning before/after
  const filterYearChange = () => {
    if (yearCond === "between") {
      console.log("filterYearChange; between...");
      const betweenYears = props.plays
        .filter((a) => a.likelyDate >= startYear && a.likelyDate <= endYear)
        .map((filteredYear) => tempList.push(filteredYear));
      // props.plays.filter((a) => a.likelyDate >= startYear && a.likelyDate <= endYear).map(filteredYear => tempList.push(filteredYear));
      list = betweenYears;
      console.log("Printing filtered list: ");
      // console.log(betweenYears);
      console.log(tempList);
    } else if (yearCond === "after") {
      console.log("filterYearChange; after...");
      const afterYear = props.plays
        .filter((a) => a.likelyDate >= startYear)
        .map((filteredYear) => tempList.push(filteredYear));
      // props.plays.filter((a) => a.likelyDate >= startYear).map(filteredYear => tempList.push(filteredYear));
      list = afterYear;
      console.log("Printing filtered list: ");
      // console.log(afterYear);
      console.log(tempList);
    } else if (yearCond === "before") {
      console.log("filterYearChange; before...");
      const beforeYear = props.plays
        .filter((a) => a.likelyDate <= endYear)
        .map((filteredYear) => tempList.push(filteredYear));
      // props.plays.filter((a) => a.likelyDate <= endYear).map(filteredYear => tempList.push(filteredYear));
      list = beforeYear;
      console.log("Printing filtered list: ");
      // console.log(beforeYear);
      console.log(tempList);
    }
  };

  function genList() {
    if (howToSort === "title") {
      sortByTitle();
      // filterByTitle();
      return list.map((plays) => (
        <ListOfPlays
          aPlay={plays}
          key={plays.id}
          showDetail={props.showDetail}
        />
      ));
    } else if (howToSort === "year") {
      SortByDate();
      return list.map((plays) => (
        <ListOfPlays
          aPlay={plays}
          key={plays.id}
          showDetail={props.showDetail}
        />
      ));
    } else if (howToSort === "genre") {
      sortByGenre();
      return list.map((plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "between") {
      filterYearChange();
      return list.map((plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "after") {
      filterYearChange();
      return list.map((plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "before") {
      filterYearChange();
      return list.map((plays) => (
        <ListOfPlays
          aPlay={plays}
          key={plays.id}
          showDetail={props.showDetail}
        />
      ));
    } else {
      return list.map((plays) => (
        <ListOfPlays
          aPlay={plays}
          key={plays.id}
          showDetail={props.showDetail}
        />
      ));
    }
  }

  function genList2() {
    console.log("genList2: ");
    console.log(tempList);
    return tempList.map((plays) => (
      <ListOfPlays aPlay={plays} key={plays.id} />
    ));
  }

  return (
    <section className="section">
      <label
        className="columns select is-primary"
        style={{ margin: "50px 20px", marginLeft: "-8%", position: "fixed" }}
      >
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
      <label
        className="column  is-primary"
        style={{
          margin: "200px 20px",
          marginLeft: "-9%",
          position: "fixed",
          width: "10%",
        }}
      >
        Filter by years:
        <form onChange={handleYearChange}>
          <input
            className="input"
            type="text"
            name="start"
            value={props.filter}
            placeholder="Starting Date"
          />
          <input
            className="input"
            type="text"
            name="end"
            value={props.filter}
            placeholder="Ending Date"
          />
        </form>
      </label>
      <div className="columns is-multiline">{genList()}</div>
    </section>
  );
};
export default SortPlays;
