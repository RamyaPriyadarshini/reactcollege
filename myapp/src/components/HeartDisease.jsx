import React from 'react';
import axios from 'axios';
import '../styles/App.css';

class HeartDisease extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age: null,
            sex: 1,
            cp: 0,
            trestbps: null,
            chol: null,
            fbs:0,
            restecg:0,
            thalach:null,
            oldpeak: null,
            slope: 1,
            ca:0,
            thal: 0
        }
    
        this.changeSex = this.changeSex.bind(this);
        this.changeCp = this.changeCp.bind(this);
        this.changeAge = this.changeAge.bind(this);
        this.changeTrestbps = this.changeTrestbps.bind(this);
        this.changeChol = this.changeChol.bind(this);
        this.changeFbs = this.changeFbs.bind(this);
        this.changeRestecg = this.changeRestecg.bind(this);
        this.changeThalach = this.changeThalach.bind(this);
        this.changeExang = this.changeExang.bind(this);
        this.changeOldpeak = this.changeOldpeak.bind(this);
        this.changeSlope = this.changeSlope.bind(this);
        this.changeCa = this.changeCa.bind(this);
        this.changeThal = this.changeThal.bind(this);
        this.submit = this.submit.bind(this);
    }



    submit(e){
        axios.post(`http://127.0.0.1:8000/heart_disease/`, { "input":Object.values(this.state) })
            .then(res => {
                document.getElementById("result").innerHTML = Object.values(this.state);
            })
        document.getElementById("result").innerHTML = Object.values(this.state);
    }

    changeSex(e) {
        this.setState({sex:parseInt(e.target.value)});
    }

    changeCp(e) {
        this.setState({cp:parseInt(e.target.value)});
    }

    changeAge(e) {
        this.setState({age:parseInt(e.target.value)});
    }

    changeTrestbps(e) {
        this.setState({trestbps:parseInt(e.target.value)});
    }

    changeChol(e) {
        this.setState({chol:parseInt(e.target.value)});
    }

    changeFbs(e) {
        this.setState({fbs:parseInt(e.target.value)});
    }

    changeRestecg(e) {
        this.setState({restecg:parseInt(e.target.value)});
    }

    changeThalach(e) {
        this.setState({thalach:parseInt(e.target.value)});
    }

    changeExang(e) {
        this.setState({exang:parseInt(e.target.value)});
    }

    changeOldpeak(e) {
        this.setState({oldpeak:parseInt(e.target.value)});
    }

    changeSlope(e) {
        this.setState({slope:parseInt(e.target.value)});
    }

    changeCa(e) {
        this.setState({ca:parseInt(e.target.value)});
    }

    changeThal(e) {
        this.setState({thal:parseInt(e.target.value)});
    }

    render() {
    return (
        <div>
        <h1>HEART DISEASE</h1>
        <h3>Enter Details:</h3>
        <label>Age :- </label>
        <input onChange={this.changeAge} type="number" /><br/><br/>
        <label>sex :- </label>
        <select value={this.state.sex} onChange={this.changeSex} >
            <option value="1">Male</option>
            <option value="0">Female</option>
        </select><br/><br/>
        <label>Chest Pain Type :- </label>
        <select value={this.state.cp} onChange={this.changeCp} >
            <option value="0">Typical Angina</option>
            <option value="1">Atypical Angina</option>
            <option value="2">Non-Anginal pain</option>
            <option value="3">Asymptotic</option>
        </select><br/><br/>
        <label>resting blood pressure (in mm Hg on admission to the hospital) :- </label>
        <input onChange={this.changeTrestbps} type="number" /><br/><br/>
        <label>sexserum cholestoral in mg/dl :- </label>
        <input onChange={this.changeChol} type="number" /><br/><br/>
        <label>fasting blood :- </label>
        <select value={this.state.fbs} onChange={this.changeFbs} >
            <option value="1">Greater 120 mg/dl</option>
            <option value="0">Lesser 120 mg/dl</option>
        </select><br/><br/>
        <label>resting electrocardiographic results :- </label>
        <select value={this.state.restecg} onChange={this.changeRestecg} >
            <option value="0">Normal</option>
            <option value="1">ST-T wave abnormality</option>
            <option value="2">Left Ventricular Hypertrophy by Estes' criteria</option>
        </select><br/><br/>
        <label>maximum heart rate achieved :- </label>
        <input type="number" onChange={this.changeThalach} /><br/><br/>
        <label>exercise induced angina :- </label>
        <select value={this.state.exang} onChange={this.changeExang} >
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select><br/><br/>
        <label>ST depression induced by exercise relative to rest :- </label>
        <input type="number" onChange={this.changeOldpeak}/><br/><br/>
        <label>the slope of the peak exercise ST segment :- </label>
        <select value={this.state.slope} onChange={this.changeSlope} >
            <option value="0">Upsloping</option>
            <option value="1">Flat</option>
            <option value="2">Downsloping</option>
        </select><br/><br/>
        <label>number of major vessels colored by flourosopy :- </label>
        <select value={this.state.ca} onChange={this.changeCa} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select><br/><br/>
        <label>Thalaseemia :- </label>
        <select value={this.state.thal} onChange={this.changeThal} >
            <option value="1">normal</option>
            <option value="2">fixed defect</option>
            <option value="3">reversable defect</option>
        </select><br/><br/>
        <button onClick={this.submit}>SUBMIT</button>
        <h1 id="result"> </h1>
        </div>
    );
    }
}

export default HeartDisease;
