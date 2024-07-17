import React from 'react'
import './Contact.css'
// import Grid from '@mui/material/Grid'
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField'
import config from './includes/configuration.json'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Contact = () => {
  return (
    <div>
      <Card className='mx-3 my-3 px-3 py-3'>
        <Grid container>
          <Grid xs={12} align="center" className='heading'>
            Login
          </Grid>
          {
            config?.map(({ label, type }, indx) => {
              return <>
                <Grid item sm={5} align="right">
                  <b className='mui-label'>{label}</b>
                </Grid>
                <Grid item sm={3}>
                  <TextField type={type} label={label} variant="standard" />
                </Grid>
              </>

            })
          }
          <Grid sm={7} xsOffset={5} className="mt-3" >
            <Button variant="contained">Login</Button>
          </Grid>
        </Grid>
      </Card >
    </div>

  )
}

export default Contact
