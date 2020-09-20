
import React, { Component } from "react";
import "./index.css";

export default class StockData extends Component {

  constructor(props) {
    super(props)
    this.state = {
      input: '',
      open: '',
      high: '',
      low: '',
      close: ''
    }
  }

  // componentDidMount() {
  //   fetch('https://jsonmock.hackerrank.com/api/stocks?date={date}')
  //     .then((res) => res.json())
  //     .then(data => {
  //       let open = data.data[0].open
  //       let high = data.data[0].high
  //       let low = data.data[0].low
  //       let close = data.data[0].close

  //       this.setState({
  //         open,
  //         high,
  //         low,
  //         close
  //       })
  //     })
  // }

  render() {
    const { open, high, low, close } = this.state
    return (
      <div className="layout-column align-items-center mt-50">
        <section className="layout-row align-items-center justify-content-center">
          <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input" onChange={this.handleInputChange} value={this.state.input}/>
          <button className="" id="submit-button" data-testid="submit-button" onClick={this.handleFetchData}>Search</button>
        </section>
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data" >
          <li className="py-10">{open}</li>
          <li className="py-10">{high}</li>
          <li className="py-10">{low}</li>
          <li className="py-10">{close}</li>
        </ul>
      <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result"></div>
      </div>
    );
  }

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleFetchData = () => {
    fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${this.state.input}`)
    .then((res) => res.json())
    .then(data => {
      let open = data.data[0].open
      let high = data.data[0].high
      let low = data.data[0].low
      let close = data.data[0].close

      this.setState({
        open,
        high,
        low,
        close
      })
    })
  }
}
