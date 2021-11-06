function SinglePlay(props) {
  return (
    <div>
      <h2>Title: {props.single.title}</h2>
      <div>Released: {props.single.likelyDate}</div>
      <div>Genre: {props.single.genre}</div>
      <button>Add to Favorites</button>
      <button>View</button>
    </div>
  );
}
export default SinglePlay;
