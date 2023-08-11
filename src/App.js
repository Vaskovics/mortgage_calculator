import Navbar from "./components/Navbar";
import Result from "./components/Result";
import { Container, Grid } from '@mui/material';
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { useState } from "react";
import { getLtv } from "./utils/helper";


function App() {
  const [data, setData] = useState(
    {
      homeValue: 500000,
      deposit: 50000,
      mortgageAmount: 200000,
      mortgageLength: 35,
      interestRate: 6,
    }  
  );

  const ltv = getLtv(data.homeValue, data.mortgageAmount);
  console.log(ltv);


  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{mt: 4}}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect
              data={data}
              setData={setData}
              ltv={ltv}
            />
            <TenureSelect data={data} setData={setData} />
          </Grid>

          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
          

        </Grid>
      </Container>
    </div>
  );
}

export default App;
