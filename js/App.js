import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

const MyTitleFactory = React.createFactory(MyTitle);

const firstReactComponent = class firstReactComponent extends React.Component {
  render() {
    const wrapperClass = 'title';
    const titleClass = 'title__text';
    return (
      React.DOM.div({className: 'my-first-component',id: 'oye-mitra'},
        MyTitleFactory({title : 'bushy bro', wrapperClass, titleClass }),
        MyTitleFactory({title : 'react is feeling nice to me', wrapperClass, titleClass }),
        MyTitleFactory({title : 'alrighty bitey', wrapperClass, titleClass }),
        React.DOM.p(null,"This component is construced with the help of plain React without JSX")
      )
    )
  }
};

ReactDOM.render(React.createElement(firstReactComponent),document.querySelector('#app'));
