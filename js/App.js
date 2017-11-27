import React from 'react';
import ReactDOM from 'react-dom';
import MyTitle from './MyTitle';

const MyTitleFactory = React.createFactory(MyTitle);

const firstReactComponent = class firstReactComponent extends React.Component {
  render() {
    const wrapperClass = 'title';
    const titleClass = 'title__text';
    return (
      <div className='my-first-component'>
        <MyTitle title = 'hell yeah' wrapperClass = {wrapperClass} titleClass = {titleClass} />
        <MyTitle title = 'react is feeling nice to me' wrapperClass = {wrapperClass} titleClass = {titleClass} />
        <MyTitle title =  'alrighty bitey' wrapperClass = {wrapperClass} titleClass = {titleClass} />
      </div>
    )
  }
};

ReactDOM.render(React.createElement(firstReactComponent),document.querySelector('#app'));
