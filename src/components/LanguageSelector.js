import React from 'react';

class LanguageSelector extends React.Component {
    render() {
        return (
            <div>
                Select a language:
            <i className="us flag" onClick={() => this.props.onLanguageChange('english')}></i>
                <i className="tr flag" onClick={() => this.props.onLanguageChange('turkish')}></i>
            </div>
        )
    }
}

export default LanguageSelector;