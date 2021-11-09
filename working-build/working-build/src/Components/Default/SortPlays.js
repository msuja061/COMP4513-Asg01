import DefaultView from "./DefaultView";
import ListOfPlays from "./ListOfPlays";
import React from "react";

const SortPlays = (props) => {
  let list = props.plays;
  const [howToSort, setHowToSort] = React.useState("title");

  const handleChange = (event) => {
    if (event.target.value === "title") {
      setHowToSort("title");
    } else if (event.target.value === "year") {
      setHowToSort("year");
    } else if (event.target.value === "genre") {
      setHowToSort("genre");
    }
  };

  const sortByTitle = () => {
    console.log("sort by title");
    console.log(props.plays);
    const titleSort = props.plays.sort((a, b) => (a.title > b.title ? 1 : -1));
    console.log("Printing only titles: ");
    console.log(titleSort);
    list = titleSort;
  };

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

  const sortByGenre = () => {
    console.log("sort by genre");
    console.log(props.plays);
    const genreSort = props.plays.sort((a, b) => (a.genre > b.genre ? 1 : -1));
    console.log("Printing only genres: ");
    console.log(genreSort);
    list = genreSort;
  };

  function genList() {
    if (howToSort === "title") {
      sortByTitle();
      return list.map((plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "year") {
      SortByDate();
      return list.map((plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else if (howToSort === "genre") {
      sortByGenre();
      return list.map((plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    } else {
      return list.map((plays) => <ListOfPlays aPlay={plays} key={plays.id} />);
    }
  }

  return (
    <section className="section">
      <label
        className="column select is-primary"
        style={{ margin: "50px 20px", marginLeft: "-7%", position: "fixed" }}
      >
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
      <div className="columns is-multiline is-mobile">{genList()}</div>
    </section>
  );
};
export default SortPlays;
