import div, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

/*
      this in javascript behaves differently than other languages.
      this can refer different object depending upon its call.
      * if a function is called as part of a method in an object,
        this in that function will always return a reference to that object
        obj.method();
      
      * however if that function is called as a stand-alone function 
        without an object reference this by default returns a reference to the window object
        function();
      
      * if the strict mode is enabled this will return undefined and that's the reason
        in this event handler we don't have access to this
  
*/
