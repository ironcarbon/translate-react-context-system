import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        return this.setState({ language: language })
    }

    render() {
        return (
            <div className="ui container">
                <LanguageSelector onLanguageChange={this.onLanguageChange} />
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