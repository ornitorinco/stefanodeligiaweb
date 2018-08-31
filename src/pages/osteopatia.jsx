import 'antd/dist/antd.css'
import '../layouts/styles.css'
import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'
import lodash from 'lodash'
import { Icon, Row } from 'antd'
import { Grid, Slug, Fade } from 'mauerwerk'
import data from './osteopatia/data'
import Images from '../img/images';
import { background, font, specialFont, enhanceDark, enhanceLight, gold } from '../layouts/colors.css';

const colors = {background: background, font: font, specialFont: specialFont, enhanceDark: enhanceDark, enhanceLight: enhanceLight, gold: gold};
console.log(colors['background']);

const Cell = ({ toggle, name, height, description, subTitle, gradientDirection, colorStart, colorEnd, image, maximized }) => (
  <div
    className="cell"
    style={{ backgroundImage: `linear-gradient(${gradientDirection}, ${colors[colorStart]} 0%, ${colors[colorEnd]} 100%)`, cursor: !maximized ? 'pointer' : 'auto' }}
    onClick={!maximized ? toggle : undefined}>
    <Fade show={maximized} delay={maximized ? 400 : 0}>
      <div className="details">
        <Slug delay={600}>
          <div className="circle" style={{ background: `linear-gradient(${gradientDirection}, ${colors[colorStart]} 0%, ${colors[colorEnd]} 100%)` }} ></div>
          <div className="close">
            <Icon type="close" style={{ cursor: 'pointer' }} onClick={toggle} />
          </div>
          <h1 className="name">{name}</h1>
          <p  className="subTitle">{subTitle}</p>
          <p  className="description" dangerouslySetInnerHTML={{ __html: description }} ></p>
        </Slug>
      </div>
    </Fade>
    <Fade
      show={!maximized}
      from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
      enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
      leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
      delay={maximized ? 0 : 400}>
      <div className="default" style={{ backgroundImage: `linear-gradient(${gradientDirection}, ${colors[colorStart]} 0%, ${colors[colorEnd]} 100%)` , backgroundSize: 'cover'}}>
      <p>{name}</p>
      <div className="shuffleImage" style={{ backgroundImage: `url(${(Images[image])})`, width:200, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', height: height -30}}></div>
      </div>
    </Fade>
  </div>
)

class Osteopatia extends Component {
  state = { data, columns: 2, margin: 70, filter: '', height: true }
  search = e => this.setState({ filter: e.target.value })
  shuffle = () => this.setState(state => ({ data: lodash.shuffle(state.data) }))
  setColumns = e => this.setState({ columns: parseInt(e.key) })
  setMargin = e => this.setState({ margin: parseInt(e.key) })
  setHeight = e => this.setState({ height: e })
  render() {
    const data = this.state.data.filter(
      d => d.name.toLowerCase().indexOf(this.state.filter) != -1
    )
    return (
      <div className="main">
        <Grid
          className="grid"
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={d => d.name}
          // Can be a fixed value or an individual data accessor
          heights={this.state.height ? d => d.height : 200}
          // Number of columns
          columns={this.state.columns}
          // Space between elements
          margin={this.state.margin}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={false}
          // Delay when active elements (blown up) are minimized again
          closeDelay={400}>
          {(data, maximized, toggle) => (
            <Cell {...data} maximized={maximized} toggle={toggle} />
          )}
        </Grid>
      </div>
    )
  }
}

export default Osteopatia
