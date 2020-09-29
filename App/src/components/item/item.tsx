import React, { FunctionComponent } from 'react'
import { Typography, withStyles, WithStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Style from "./css"
import { CardMedia, Card } from "@material-ui/core";
import { item, sizeType } from '../../store/types/items';

interface props extends WithStyles<typeof Style> {
  item: item
}

const Item: FunctionComponent<props> = ({ item, classes }) => {
  let isAvailable = false;

  for (let model of item.models) {
    for (let size of Object.keys(model.sizes)) {
      if (Number(model.sizes[size as sizeType]) > 0) {
        isAvailable = true;
        break;
      }
    }
  }

  return (
    <div className={isAvailable ? classes.root : classes.rootDisabled}>
      <Link to={isAvailable ? "/item/" + item.id : "#"}>
        <Card
          className={isAvailable ? classes.root : classes.rootDisabled}
          meta-index={item.id}
        >
          <CardMedia
            className={isAvailable ? classes.image : classes.imageDisabled}
            image={item.models[0].imgUrl[0]}
          />
          <Typography className={isAvailable ? classes.title : classes.titleDisabled}>
            {isAvailable ? item.id : "Out Of Stock"}
          </Typography>
        </Card>
      </Link>
    </div>
  )
}

export default withStyles(Style)(Item);