import { Component } from "react";
import "./randomChar.scss";
import mjolnir from "../../resources/img/mjolnir.png";
import MarvelServices from "../../services/services";
import Spiner from "../spinner/Spiner";
import Error from "../error/error";

class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      char: {}, 
      spinner: true,
      error: false,
    };
  }

  marvelService = new MarvelServices(); 

  componentDidMount() {
    this.getData();
  }
  onGetDataLoaded = (char) => {
    this.setState({ char, spinner: false });
  };
  onError = () => {
    this.setState({ error: true, spinner: false });
  };
  onTryIt = () => {
    this.setState({ spinner: true, error: false });
  };

  getData = () => {
    this.onTryIt();
    let id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000); //numbers taken from Marvel API characters id numeration
    this.marvelService
      .getOneCharacter(id)
      .then(this.onGetDataLoaded) 
      .catch(this.onError);
  };

  render() {
    const { char, spinner, error } = this.state;
    const errorMessage = error ? <Error /> : null;
    const spinnerMessage = spinner ? <Spiner /> : null;
    const content = !(spinner || error) ? <View char={char} /> : null;
    return (
      <div className="randomchar">
        {errorMessage}
        {spinnerMessage}
        {content}
        <div className="randomchar__static">
          <p className="randomchar__title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar__title">Or choose another one</p>
          <button className="button button__main" onClick={this.getData}>
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
        </div>
      </div>
    );
  }
}
const View = ({ char }) => {
  const { imgSrc, name, description, homepage, wiki } = char;
  let styleImg = { objectFit: "cover" };
  if (
    imgSrc ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    styleImg = { objectFit: "fill" };
  }
  return (
    <div className="randomchar__block">
      <img
        style={styleImg}
        src={imgSrc}
        alt="Random character"
        className="randomchar__img"
      />
      <div className="randomchar__info">
        <p className="randomchar__name">{name}</p>
        <p className="randomchar__descr">{description}</p>
        <div className="randomchar__btns">
          <a href={homepage} target="blank" className="button button__main">
            <div className="inner">Homepage</div>
          </a>
          <a href={wiki} target="blank" className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RandomChar;
