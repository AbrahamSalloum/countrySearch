import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';




export default function Country() {
    const router = useRouter()
    const { country } = router.query

    const Wrap = ({ color, children }) => {

        return (
            <div className={color}>
                <Box>{children}</Box>
                <style jsx>{`
        .blue {
          color: blue;
        }

      `}</style>
            </div>
        );

    }

    const CardItem = ({ country }) => {
        return (
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Country
                    </Typography>
                    <Typography variant="h5" component="div">
                        {country}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">

                    </Typography>
                    <Typography variant="body2">
                        On earth
                        <br />

                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        );

    }


    return (
        <div className='coverbg'>
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            sx={{ margin: 2}}
                
        >
            <Grid container spacing={2} maxWidth="lg"   sx={{ margin: 2}}>
                <Grid item xs={8}>
                    <CardItem country={country} />
                </Grid>
                <Grid item xs={4}>
                    <CardItem country={country} />
                </Grid>
                <Grid item xs={4}>
                    <CardItem country={country} />
                </Grid>
                <Grid item xs={8}>
                    <Wrap color="blue"><b>Abraham</b></Wrap>
                </Grid>
            </Grid>

        </Box>
        <style jsx>{`
        .coverbg {
          background-color: grey;
          min-height:100%; 
        }

      `}</style>
        </div>
    )
}
