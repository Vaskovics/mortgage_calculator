import React, { Fragment } from 'react'
import SliderComponent from './Common/SliderComponent'

const SliderSelect = ({ data, setData, ltv }) => {

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
            deposit: value * 0.2,
            mortgageAmount: value * 0.8,
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
            mortgageAmount: (data.homeValue - value),
            deposit: value,
          });
        })}
        value={data.deposit}
        amount={data.deposit}
        unit='£'
        ltv={100 - ltv}
      />

      <SliderComponent
        label="Mortgage Amount"
        def={data.mortgageAmount}
        min={0}
        max={data.homeValue}
        step={1000}
        onChange={(e, value) => setData(data => {
          return ({
            ...data,
            deposit: (data.homeValue - value),
            mortgageAmount: value,
          });
        })}
        value={data.mortgageAmount}
        amount={data.mortgageAmount}
        unit='£'
        ltv={ltv}
      />

      <SliderComponent
        label="Interest Rate"
        def={data.interestRate}
        min={0}
        max={10}
        step={0.01}
        onChange={(e, value) => setData(data => {
          return ({
            ...data,
            interestRate: value,
          });
        })}
        value={data.interestRate}
        amount={data.interestRate}
        unit='%'
      />

    </Fragment>
  )
}

export default SliderSelect
