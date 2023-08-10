import Navbar from "./components/Navbar";
import Result from "./components/Result";
import { Container, Grid } from '@mui/material';
import SliderSelect from "./components/SliderSelect";
import TenureSelect from "./components/TenureSelect";
import { useState } from "react";


function App() {
  const [data, setData] = useState(
    {
      homeValue: 500000,
      deposit: 50000,
      mortgageAmount: 200000,
      loanTerm: 30,
      interestRate: 6,
    }  
  );



  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" sx={{mt: 4}}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData}/>
            <TenureSelect />
          </Grid>

          <Grid item xs={12} md={6}>
            <Result />
          </Grid>
          

        </Grid>
      </Container>
    </div>
  );
}

export default App;
