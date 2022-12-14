import './charInfo.scss';
import thor from '../../resources/img/thor.jpeg';
import {Component} from 'react';
import MarvelServices from '../../services/services';
import Spiner from '../spinner/Spiner';
import Error from '../error/error';

class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            char:{}, // obj from services/ getOneCharacter (transformCharacter)
            spinner:true,
            error:false
        }
    }

    marvelService = new MarvelServices();

    componentDidMount() {
        let id = this.props.charId
        this.marvelService.getOneCharacter(id)
        .then(this.onCharInfoLoaded) // ми не можем тут визвать фцию, в char автоматически приходит значение кот. пришло с getOneCharacter
        .catch(this.onError)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps!== this.props) {
            this.setState({spinner:true})
            let id = this.props.charId
            this.marvelService.getOneCharacter(id)
            .then(this.onCharInfoLoaded) // ми не можем тут визвать фцию, в char автоматически приходит значение кот. пришло с getOneCharacter
            .catch(this.onError)
        }
      }

    onCharInfoLoaded = (char) => {
        this.setState({char,spinner:false, error:false})
    }

    onError = () => {
        this.setState({error:true, spinner:false})
    }

    render() {
        const {char, spinner, error} = this.state;
        const charId = this.props.charId;
        const errorMessage = error ? <Error/> : null;
        const spinnerMessage = spinner ? <Spiner/> : null;
        const content = !(error || spinner) ? <View char = {char} charId = {charId}/> : null;

        return (
            <div className="char__info">
                {errorMessage}{spinnerMessage}{content}

            </div>
        )
    }
 
}
const View = ({char, charId}) => {
    const {imgSrc, name, description, homepage, wiki, comics} = char;
    let styleImg = {'objectFit':'cover'}
    if(imgSrc == 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'){
      styleImg = {'objectFit':'fill'}
    }
    const comicsList = comics.map(item => {
        return(
            <li className="char__comics-item">
              {item.name}
            </li>
        )
    })
    return(
    <div>
        <div className="char__basics">
            <img style={styleImg} src={imgSrc} alt="abyss"/>
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
        <div className="char__descr">
            {description}
        </div>
        <div className="char__comics">Comics:</div>
        <ul className="char__comics-list">
            {comicsList}
        {/*
            <li className="char__comics-item">
                All-Winners Squad: Band of Heroes (2011) #3
            </li>
            <li className="char__comics-item">
                Alpha Flight (1983) #50
            </li>
            <li className="char__comics-item">
                Amazing Spider-Man (1999) #503
            </li>
            <li className="char__comics-item">
                Amazing Spider-Man (1999) #504
            </li>
            <li className="char__comics-item">
                AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)
            </li>
            <li className="char__comics-item">
                Amazing-Spider-Man: Worldwide Vol. 8 (Trade Paperback)
            </li>
            <li className="char__comics-item">
                Asgardians Of The Galaxy Vol. 2: War Of The Realms (Trade Paperback)
            </li>
            <li className="char__comics-item">
                Vengeance (2011) #4
            </li>
            <li className="char__comics-item">
                Avengers (1963) #1
            </li>
            <li className="char__comics-item">
                Avengers (1996) #1
            </li>
         */}   
        </ul>
    </div>
    )
}
export default CharInfo;