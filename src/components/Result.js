import { Stack, Typography } from '@mui/material';
import React from 'react'
import { Chart } from "react-google-charts";
import './result.css';



const Result = ({ data }) => {
  const {
    homeValue,
    depost,
    mortgageAmount,
    mortgageLength,
    interestRate
  } = data;

  const totalLoanMoths = mortgageLength * 12;
  const interestPerMonth = interestRate / 100 / 12;

  const monthlyPayment =
    (mortgageAmount * interestPerMonth * Math.pow(1 + interestPerMonth, totalLoanMoths)) /
    (Math.pow(1 + interestPerMonth, totalLoanMoths) - 1);


  const totalInterestGenerated = monthlyPayment * totalLoanMoths - mortgageAmount;

  const newData = [
    ["Interest", "Hours per Day"],
    ["Home value", homeValue],
    ["Total interest", totalInterestGenerated],
  ];

  const options = {
    title: `Total value: £ ${(homeValue + totalInterestGenerated).toFixed(0)}`,
    is3D: true,
    backgroundColor: '#121212',
    titleTextStyle: {
      color: 'white',
      fontSize: 22,
    },
  };

  return (
    <Stack>
      <Typography textAlign='center' variant='h5'>
        Monthly Payment: £ {Math.floor(monthlyPayment * 100) / 100}
      </Typography>

      <Stack>
        <div>
          <Chart
          chartType="PieChart"
          data={newData}
          options={options}
          width={"100%"}
          height={"400px"}
          className='pie'
        />
        </div>
      </Stack>

    </Stack>
  )
}

export default Result
