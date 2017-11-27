import React from 'react';

const MyTitle = class MyTitle extends React.Component {
  render() {
    return (
      <div className={this.props.wrapperClass} >
        <h1 className={this.props.titleClass}>
          {this.props.title}
        </h1>
      </div>
    )
  }
};

export default MyTitle;
