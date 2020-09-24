import React, { FunctionComponent, useState } from 'react'

import { withStyles, WithStyles } from "@material-ui/core";
import Style from "./css"
import { Card } from "@material-ui/core";
import ContentLoader from "react-content-loader"

interface props extends WithStyles<typeof Style> {
}

const ItemPlaceholder: FunctionComponent<props> = ({ classes }) => {
  return (
    <Card className={classes.root}>
      <div className={classes.image1}>
        <ContentLoader
          speed={1.1}
          width={"100%"}
          height={"1000"}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="2" ry="2" width="100%" height="100%" />
        </ContentLoader>
      </div>
    </Card>
  )
}

export default withStyles(Style)(ItemPlaceholder);