import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        return this.setState({ language: language })
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="us flag" onClick={() => this.onLanguageChange('english')}></i>
                    <i className="tr flag" onClick={() => this.onLanguageChange('turkish')}></i>
                </div>
                {this.state.language}

                <ColorContext.Provider value='red'>
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate />
                    </LanguageContext.Provider>
                </ColorContext.Provider>

                <LanguageContext.Provider value='english'>
                    <UserCreate />
                </LanguageContext.Provider>

                <UserCreate />
            </div>
        )
    }
}

export default App;