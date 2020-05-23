import React from 'react';
import '../styles/App.css';
import HeartDisease from './HeartDisease';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: "skin"
    }

    this.setCurrentTab = this.setCurrentTab.bind(this);
  }

  setCurrentTab(tab) {
    this.setState({
      currentTab: tab
    })
  }

  render() {
    return (
      <div>
        <div className="headers">
          <div className="tabs">
            <div className="tab" onClick = {() => {this.setCurrentTab("skin")}}>
              Skin Disease
            </div>
            <div className="tab" onClick = {() => {this.setCurrentTab("heart")}}>
              Heart Disease
            </div>
            <div className="tab" onClick = {() => {this.setCurrentTab("diabetes")}}>
              Diabetes
            </div>
            <div className="tab" onClick = {() => {this.setCurrentTab("kidney")}}>
              Kidney Disease
            </div>
          </div>
        </div>
        <div className="body">
          {this.state.currentTab==="skin" && <div>SKIN DISEASE</div>}
          {this.state.currentTab==="heart" && <HeartDisease />}
          {this.state.currentTab==="diabetes" && <div>DIABETES</div>}
          {this.state.currentTab==="kidney" && <div>KIDNEY DISEASE</div>}
        </div>
      </div>
    );
  }
}

export default App;
