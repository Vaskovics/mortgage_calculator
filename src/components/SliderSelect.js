import React, { Fragment } from 'react'
import SliderComponent from './Common/SliderComponent'

const SliderSelect = ({ data, setData }) => {

  const onChangeSelect = (e, value) => {
    console.log(value)
  }
  return (
    <Fragment>
      <SliderComponent
        label="Home value"
        def={data.homeValue}
        min={50000}
        max={1000000}
        step={1000}
        onChange={(e, value) => setData(data => {
          return ({
            ...data,
            homeValue: value,
          });
        })}
        value={data.homeValue}
        amount={data.homeValue}
        unit='£'
      />
    
      <SliderComponent
        label="Deposit"
        def={data.deposit}
        min={0}
        max={data.homeValue}
        step={1000}
        onChange={(e, value) => setData(data => {
          return ({
            ...data,
            deposit: value,
          });
        })}
        value={data.deposit}
        amount={data.deposit}
        unit='£'
      />



    </Fragment>
  )
}

export default SliderSelect
