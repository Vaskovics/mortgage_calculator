import React from 'react';
import Slider from '@mui/material/Slider';
import { Typography, Stack } from '@mui/material'

const SliderComponent = ({ 
  def, 
  min, 
  max, 
  step,
  onChange,
  amount,
  label,
  unit,
  ltv,
}) => {
  return (
    <div >
      <Stack my={2}>
        <Stack gap={3} >
          <Typography variant='subtitle'>
            { label }
          </Typography>
          <Typography variant='h5'>
            {unit} { amount }
          </Typography>
        </Stack>
        <Slider 
          defaultValue={def} 
          aria-label="Default" 
          valueLabelDisplay="auto"
          min={min}
          max={max}
          marks
          step={step}
          onChange={onChange}
          value={amount}
        />

        <Stack 
          direction="row" 
          justifyContent="space-between"
          >
          <Typography color="text.secondary" variant="caption">
            {unit} { min }
          </Typography>

          {ltv && (
            <Typography color="text.secondary" variant="caption">
              {'%'} { ltv }
            </Typography>
          )}

          <Typography color="text.secondary" variant="caption">
            {unit} { max }
        </Typography>
        </Stack>
      </Stack>
    </div>
  )
}

export default SliderComponent
