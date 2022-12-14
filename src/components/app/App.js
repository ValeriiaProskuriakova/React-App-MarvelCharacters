import {Component} from 'react';
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";

import decoration from '../../resources/img/vision.png';

class App extends Component {
//пропси не приходят поетому конструктор не обязателен
  state={
    selectedIdChar: '1011334'
  }


  onSelectedIdChar =(id)=> {
    this.setState({
      selectedIdChar: id
    })
  }

  render(){
    return (
        <div className="app">
            <AppHeader/>
            <main>
            <RandomChar/>
            <div className="char__content">
                <CharList onSelectedIdChar={this.onSelectedIdChar}/>
                <CharInfo charId = {this.state.selectedIdChar}/>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
  }
}

export default App;
