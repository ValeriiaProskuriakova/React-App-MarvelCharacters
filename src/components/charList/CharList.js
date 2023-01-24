import { Component } from "react";
import MarvelServices from "../../services/services";
import "./charList.scss";
import abyss from "../../resources/img/abyss.jpg";
import Spiner from "../spinner/Spiner";
import Error from "../error/error";

class CharList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charList: [],
      spinner: true,
      error: false,
      counter: 9,
    };
  }

  marvelServices = new MarvelServices();

  componentDidMount() {
    this.marvelServices
      .getAllCharacters("9")
      .then(this.onCharListLoaded)
      .catch(this.onError);
  }
  setCounter = () => {
    let counter = this.state.counter + 9;
    this.setState({ counter: counter });
  };

  loadMoreCharacters = () => {
    this.setCounter();
    console.log(this.state.counter + 9);
    this.marvelServices
      .getAllCharacters(this.state.counter + 9)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };
  onCharListLoaded = (list) => {
    this.setState({ charList: list, spinner: false });
  };
  onError = () => {
    this.setState({ error: true, spinner: false });
  };

  createList = (charList) => {
    const charItem = charList.map((item) => {
      let styleImg = { objectFit: "cover" };
      if (
        item.imgSrc ==
        "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
      ) {
        styleImg = { objectFit: "fill" };
      }
      return (
        <li
          className="char__item"
          key={item.id}
          onClick={() => {
            this.props.onSelectedIdChar(item.id);
          }}
        >
          <img style={styleImg} src={item.imgSrc} alt={item.name} />
          <div className="char__name">{item.name}</div>
        </li>
      );
    });

    return <ul className="char__grid">{charItem}</ul>;
  };

  render() {
    const { spinner, error, charList } = this.state;
    const contentList = this.createList(charList);
    const errorMessage = error ? <Error /> : null;
    const spinnerMessage = spinner ? <Spiner /> : null;
    const content = !(spinner || error) ? contentList : null;

    return (
      <div className="char__list">
        {content}
        {errorMessage}
        {spinnerMessage}
        <button className="button button__main button__long">
          <div className="inner" onClick={this.loadMoreCharacters}>
            load more
          </div>
        </button>
      </div>
    );
  }
}

export default CharList;