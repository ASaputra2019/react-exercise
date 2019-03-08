import React from 'react';
import ListItem from './ListItem.js'

const List = (props) =>
  (
  <div className="center vertical" id="list">
    {props.items.map( (itm, idx) => <ListItem item={itm} index={idx} deleteItem={props.deleteItem} updateItem={props.updateItem} />)}
  </div>
  );

export default List;
