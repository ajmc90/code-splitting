import React, { Component } from 'react';

// Higher order componenet, is a component that return another component.

export default function asyncCompoennet(importComponent){
  class AsyncCompoennet extends Component {
    constructor (props) {
      super(props);
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      // With destructuring
      const { default: component } = await importComponent();
      this.setState({
        component: component
      })

      // Without destructuring
      // const component = await importComponent();
      // this.setState({
      //   component: component.default
      // })
    }

    render() {
      const Componenet = this.state.component;
      return Componenet ? <Componenet {...this.props} /> : null;
    }
  }

  return AsyncCompoennet;
}