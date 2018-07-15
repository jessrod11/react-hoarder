import React from 'react';
import allItemsRequest from '../FirebaseRequests/allItems';

import './AllStuff.css';

class AllStuff extends React.Component {
state = {
  allItems: [],
}

componentDidMount () {
  allItemsRequest.getRequest()
    .then((allItems) => {
      this.setState({allItems});
    })
    .catch((err) => {
      console.error('error in all items get request', err);
    });
};

render () {
  const allComponents = this.state.allItems.map((item) => {
    return (
      <h2>{item.itemName}</h2>
    );
  });

  return (
    <div className ="AllStuff">
      <ul>
        {allComponents}
      </ul>
    </div>
  );
}
}

export default AllStuff;
