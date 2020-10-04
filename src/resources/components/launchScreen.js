import React from "react";
import slide1 from "../images/launch1.png"
import launchArrow from "../images/arrow.svg"




class LaunchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      launchHide: false}
    }

  hide = () => {
    this.setState({launchHide: !this.state.launchHide})
  }
 
  render() {

    return (
      <div className={this.state.launchHide ? 'launch__container nodisplay' : 'launch__container ' } onClick={ this.hide }>
        <div className='launch__container__item' >
          <div className='launch__container__item__text' >
            Press to activate chart and map
          </div>
          <img alt="" src={slide1} className="launch__container__item__img" />
        </div>
        <img alt="" className='launch__container__item__arrow' src={launchArrow} />
      </div>
    );
  }

}

export default LaunchScreen;
