import React, { Component } from "react";
import { connect } from "react-redux";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { COLORS, REGIONSTITLE, REGIONSMAP } from './constants'

export class Map extends Component {
  constructor(props) {
    super(props);
    this.colorUpdater = this.colorUpdater.bind(this);
    this.dataUpdater = this.dataUpdater.bind(this);
  }

  colorUpdater(ind) {
    let max = Math.max(...this.props.data.mapData.map(a => a.value));
    let cData = this.props.data.mapData[ind].value;
    if (cData === 0) return COLORS[4];
    if (cData === max) return COLORS[0]
    let currentColor = COLORS.length - Math.ceil(cData / (max / (COLORS.length)));
    return COLORS[currentColor||0]

  }

  dataUpdater(ind) {
    let cData = this.props.data.mapData[ind] ? this.props.data.mapData[ind].value : 0;
    return (cData)
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="h3">Карта регионов {this.props.data["value"]}</div>
        <div className="map__container">
          <svg
            className="svg"
            viewBox="0 0 600 400"
            xmlns="http://www.w3.org/2000/svg"
            amcharts="http://amcharts.com/ammap"
            xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="500"
          >
            <g>
              {
                REGIONSMAP.map((region, ind, arr) => {
                  return (
                    <OverlayTrigger
                      key={ind + 'land'}
                      placement={ind === 3 || ind === 5 ? "bottom" : "top"}
                      overlay={
                        <Tooltip id={ind + 'tooltip'}>
                          {REGIONSTITLE[ind]}{ind + 1}
                          <div className='map__tooltip__item'>
                            <div className="map__tooltip__item__img map__tooltip__item__img" style={{ backgroundColor: this.colorUpdater(ind) }} ></div>
                            <span>{this.dataUpdater(ind)}</span>
                          </div>
                        </Tooltip>
                      }>
                      <path
                        key={'CY-0' + (ind)}
                        title={REGIONSTITLE[ind]}
                        className="land"
                        fill={this.colorUpdater(ind)}
                        stroke="#818181"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity="0.5"
                        original="#ffffff"
                        d={REGIONSMAP[ind]}
                      />
                    </OverlayTrigger>)
                })
              }
            </g>
          </svg>
        </div>
        <div className="map__legend__conrainer">
          {
            COLORS.map((color, ind, arr) => {
              return (
                <div className="map__legend__conrainer__item" key={ind}>
                  <div className="map__legend__conrainer__item__img" style={{ backgroundColor: color }}></div>
                  <div className="map__legend__conrainer__item__text">
                    Значения <span> от </span>
                    {Math.round((Math.max(...this.props.data.mapData.map(a => a.value)) / arr.length) * (arr.length - ind - 1)) || 0}
                    <span> до </span>
                    {Math.round((Math.max(...this.props.data.mapData.map(a => a.value)) / arr.length) * (arr.length - ind)) || 0}</div>
                </div>)
            })
          }

        </div>
      </div>
    );
  }
}

export default connect(state => ({ data: state }), dispatch => ({}))(Map);

