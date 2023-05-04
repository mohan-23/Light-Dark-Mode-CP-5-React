import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isClick: false}

  isClicked = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  render() {
    const {isClick} = this.state
    const bgColor = isClick ? 'dark-mode' : 'light-mode'
    const buttonText = isClick ? 'Dark Mode' : 'Light Mode'
    const headingColor = isClick ? 'dark-color' : 'light-color'

    return (
      <div className="container">
        <div className={`mode-container ${bgColor}`}>
          <h1 className={`heading ${headingColor}`}>Click To Change Mode</h1>
          <div>
            <button className="button" type="button" onClick={this.isClicked}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
