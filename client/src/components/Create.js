import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }
  this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    });
  }

  handleInput = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.value);
    this.setState({ value: '' });
  }
 
  render () {
    return (
      <div className="center">
        <form action="" onSubmit={this.handleInput}>
          <input type="text" onChange={(text)=>this.handleChange(text)} value={this.state.value}/>
          <button type="submit">add</button>
        </form>
      </div>
    )
  }
}

export default Create;