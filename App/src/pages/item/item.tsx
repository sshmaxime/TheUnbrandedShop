import React, { FunctionComponent, useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IAppState } from '../../store/reducers';
import Style from "./css"
import Arrow from "@material-ui/icons/KeyboardBackspace";
import { WithStyles, withStyles, Grid, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { item, size, cartItem } from '../../store/types/myType';
import { useParams, RouteComponentProps } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

interface props extends WithStyles<typeof Style> {
  item: item,
  history: any
}

const defaultState = (item: item): {
  currentSize: size,
  currentImg: string
} => {
  return {
    currentSize: "M",
    currentImg: item.imgUrl[0]
  }
}

const Item: FunctionComponent<props> = ({ classes, item, history }) => {
  const [state, setState] = useState(defaultState(item))
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();
  const lastLocation = useLastLocation();

  const handleChange = (event: any) => {
    setState({
      ...state,
      currentSize: event.target.value
    });
  };

  const storeItem = (item: item) => {
    const newItem: cartItem = {
      id: item.id,
      title: item.title,
      imgUrl: item.imgUrl[0],
      size: state.currentSize,
      price: item.price
    }
    dispatch({ type: "ADD_ITEM", payload: newItem })
  };

  useEffect(() => {
    storeItem(item)

  }, [])

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={7} >
          <div className={classes.item}>
            <div style={{ borderRadius: "15px", boxShadow: "5px 4px 10px grey" }}>
              <div className={classes.itemImgContainer}>
                <img className={classes.itemImg} alt={""} src={state.currentImg} />
              </div>
              <Typography className={classes.itemTitle}>{item.title}</Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={5} >
          <div className={classes.item}>
            <div style={{ borderRadius: "15px", boxShadow: "5px 4px 10px grey" }}>
              <Grid container className={classes.itemImgContainerSmall}>
                {item.imgUrl.map((imgUrl: string, index: number) => (
                  <Grid onClick={() => { setState({ ...state, currentImg: imgUrl }) }} key={imgUrl} item xs={4} style={{ padding: "5px" }}>
                    <img className={classes.itemImgSmall} alt={""} src={imgUrl} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={7}>
          <div className={classes.item}>
            <Typography className={classes.informationTitle}>Information:</Typography>
            <div style={{ boxShadow: "5px 4px 10px grey", padding: "10px" }}>
              {Array.from(item.info.entries()).map((info, index) => (
                <div key={index}>
                  <span className={classes.informationDataTitle}>{info[0] + ": "}</span>
                  <span className={classes.informationDataContent}>{info[1]}</span>
                </div>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item md={5} className={classes.displayNoneDownMd} />

        <Grid item xs={4} md={2}>
          <TextField
            required
            id="standard-select-currency"
            select
            style={{ width: "100%" }}
            InputProps={{ style: { fontFamily: "SourceCodePro" } }}
            InputLabelProps={{ style: { fontFamily: "SourceCodePro" } }}
            label="Size"
            value={state.currentSize}
            rows="4"
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          >
            {
              Array.from(item.size.entries()).map((entry: [size, number]) => (
                < MenuItem key={entry[0]} value={entry[0]} >
                  { entry[0]}
                </MenuItem>
              ))
            }
          </TextField>
        </Grid>

        <Grid item xs={8} md={6}>
          <Typography className={classes.numberItemLeft}>
            {item.getNbItemForSize(state.currentSize)} item(s) left
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <div>
            <Button
              className={classes.buyButton}
              disabled={item.getNbItemForSize(state.currentSize) > 0 ? false : true}
              onClick={() => { storeItem(item) }}
            >
              <AddShoppingCart style={{ fontSize: "1.2em" }} />
              &nbsp;ADD TO CART
            </Button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div style={{ position: "relative", display: "flex", float: "right" }}>

            <Button
              className={classes.returnButton}
              disabled={item.getNbItemForSize(state.currentSize) > 0 ? false : true}
              onClick={() => { history.push("/collections") }}
            >
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
                <Arrow style={{
                }} />
              </div>
              &nbsp;Collections
                </Button>
          </div>
        </Grid>
      </Grid>
    </div >
  )
}

export default withStyles(Style)(Item);