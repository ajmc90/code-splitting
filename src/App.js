import React, { Component } from 'react';
import './App.css';

import Page1 from './components/Page1';
// Without code splitting
// import Page2 from './components/page2';
// import Page3 from './components/page3';
// With code splitting async
import AsyncComponent from './components/AsyncComponent'

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
      component: null
    }
  }

  onRouteChange = (route) => {
    // No Code Splitting
    // this.setState({route: route});

    // With Code Splitting:
    // if(route === 'page1') {
    //   this.setState({ route: route});
    // }else if( route === 'page2') {
    //   import('./components/Page2').then( (Page2) => {
    //     this.setState({ route: route, component: Page2.default });
    //   });
    // }else if( route === 'page3') {
    //   import('./components/Page3').then( (Page3) => {
    //     this.setState({ route: route, component: Page3.default });
    //   });
    // }

    // With Code Splitting and async
    this.setState({route: route});
  }

  render(){
    // No Code Splitting
    // if (this.state.route === 'page1'){
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else if (this.state.route === 'page2'){
    //   return <Page2 onRouteChange={this.onRouteChange} />
    // }else if (this.state.route === 'page3'){
    //   return <Page3 onRouteChange={this.onRouteChange} />
    // }

    // With Code Splitting:
    // if (this.state.route === 'page1'){
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }

    // With Code Splitting and async:
    if (this.state.route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2'){
      const AsyncPage2 = AsyncComponent(()=>import('./components/Page2'));
      return <AsyncPage2 onRouteChange={this.onRouteChange} />
    }else if (this.state.route === 'page3'){
      const AsyncPage3 = AsyncComponent(()=>import('./components/Page3'));
      return <AsyncPage3 onRouteChange={this.onRouteChange} />
    }
  };
}

export default App;


