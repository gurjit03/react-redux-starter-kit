import React from 'react';

const MyTitle = class MyTitle extends React.Component {
  render() {
    return (
      React.DOM.div({className: this.props.wrapperClass},
        React.DOM.h1({className: this.props.titleClass},this.props.title)
      )
    )
  }
};

export default MyTitle;
