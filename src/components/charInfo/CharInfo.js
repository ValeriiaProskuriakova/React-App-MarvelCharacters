import "./charInfo.scss";
import thor from "../../resources/img/thor.jpeg";
import { Component } from "react";
import MarvelServices from "../../services/services";
import Spiner from "../spinner/Spiner";
import Error from "../error/error";

class CharInfo extends Component {
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
    let id = this.props.charId;
    this.marvelService
      .getOneCharacter(id)
      .then(this.onCharInfoLoaded) 
      .catch(this.onError);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.charId !== this.props.charId) {
      this.setState({ spinner: true });
      let id = this.props.charId;
      this.marvelService
        .getOneCharacter(id)
        .then(this.onCharInfoLoaded) 
        .catch(this.onError);
    }
  }

  onCharInfoLoaded = (char) => {
    this.setState({ char, spinner: false, error: false });
  };

  onError = () => {
    this.setState({ error: true, spinner: false });
  };

  render() {
    const { char, spinner, error } = this.state;
    const charId = this.props.charId;
    const errorMessage = error ? <Error /> : null;
    const spinnerMessage = spinner ? <Spiner /> : null;
    const content = !(error || spinner) ? (
      <View char={char} charId={charId} />
    ) : null;

    return (
      <div className="char__info">
        {errorMessage}
        {spinnerMessage}
        {content}
      </div>
    );
  }
}
const View = ({ char, charId }) => {
  const { imgSrc, name, description, homepage, wiki, comics } = char;
  let styleImg = { objectFit: "cover" };
  if (
    imgSrc ===
    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
  ) {
    styleImg = { objectFit: "fill" };
  }
  const comicsList = comics.map((item) => {
    return <li className="char__comics-item">{item.name}</li>;
  });
  return (
    <div>
      <div className="char__basics">
        <img style={styleImg} src={imgSrc} alt="abyss" />
        <div>
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul className="char__comics-list">{comicsList}</ul>
    </div>
  );
};
export default CharInfo;