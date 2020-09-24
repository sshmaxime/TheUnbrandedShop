import React, { FunctionComponent } from 'react'
import { Grid } from "@material-ui/core";

import {
  withStyles, WithStyles
} from "@material-ui/core";
import Style from "./css"

interface props extends WithStyles<typeof Style> {
}

const Footer: FunctionComponent<props> = ({ classes }) => {
  return (
    <>
      <div className={classes.divider} />
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} >
                Refund Policy
            </Grid>
              <Grid item xs={12} >
                Privacy Policy
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} >
                Terms of Service
            </Grid>
              <Grid item xs={12} >
                Blog
            </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
            <Grid container spacing={1}>
              <Grid item xs={12} >
                Instagram
            </Grid>
              <Grid item xs={12} >
                Facebook
            </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.endTitle} item xs={12} md={3}>
            The Unbranded Shop, 2020
        </Grid>
        </Grid>
      </div>
    </>
  )
}

export default withStyles(Style)(Footer);