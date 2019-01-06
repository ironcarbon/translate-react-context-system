import React from 'react';
import UserCreate from './UserCreate';

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
                <UserCreate />
            </div>
        )
    }
}

export default App;