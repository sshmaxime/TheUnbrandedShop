import React, { FunctionComponent, useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import Style from "./css"
import Arrow from "@material-ui/icons/KeyboardBackspace";
import { WithStyles, withStyles, Grid, Typography, Button, Box } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { item, cartItem, sizeType, model } from '../../store/types/items';
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

interface props extends WithStyles<typeof Style> {
  item: item,
  history: any
}

const defaultState = (item: item): {
  currentSize: sizeType,
  currentModel: model,
  currentModelPointer: number,
  quantity: number
} => {
  return {
    currentModelPointer: 0,
    currentSize: Object.keys(item.models[0].sizes)[0] as sizeType,
    currentModel: item.models[0],
    quantity: 1
  }
}

const Item: FunctionComponent<props> = ({ classes, item, history }) => {
  const [state, setState] = useState(defaultState(item))
  const dispatch = useDispatch();

  useEffect(() => {
    const model = item.models[state.currentModelPointer]
    if (model && model.sizes[state.currentSize] === 0 || model.sizes[state.currentSize]) {
      setState({
        ...state,
        currentModel: model,
        currentSize: state.currentSize
      })
    }
  }, [item])

  const handleChange = (event: any) => {
    setState({
      ...state,
      currentSize: event.target.value
    });
  };

  const storeItem = (item: item) => {
    const newItem: cartItem = {
      id: item.id,
      model: state.currentModel,
      size: state.currentSize,
      quantity: state.quantity
    }
    dispatch({ type: "ADD_ITEM", payload: newItem })
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>

        <Grid item xs={12} md={7} >
          <div className={classes.item}>
            <div style={{ borderRadius: "15px", boxShadow: "5px 4px 10px grey" }}>
              <div className={classes.itemImgContainer}>
                <img className={classes.itemImg} alt={""} src={state.currentModel.imgUrl[0]} />
              </div>
              <Typography className={classes.itemTitle}>{item.id}</Typography>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} md={5} >
          <div className={classes.item}>
            <div style={{ borderRadius: "15px", boxShadow: "5px 4px 10px grey" }}>
              <Grid container className={classes.itemImgContainerSmall}>
                {item.models.map((model: model, index: number) => (
                  <Grid onClick={() => { setState({ ...state, currentModelPointer: index, currentModel: model, currentSize: Object.keys(model.sizes)[0] as sizeType }) }} key={model.imgUrl[0]} item xs={4} style={{ padding: "5px" }}>
                    <img className={classes.itemImgSmall} alt={""} src={model.imgUrl[0]} />
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
                  <span className={classes.informationDataTitle}>{info[1][0] + ": "}</span>
                  <span className={classes.informationDataContent}>{info[1][1]}</span>
                </div>
              ))}
            </div>
          </div>
        </Grid>

        {/*
         // @ts-ignore */}
        <Box component={Grid} item md={5} className={classes.displayNoneDownMd} />

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
              Object.keys(state.currentModel.sizes).map((key: string, value: number) => {
                return (
                  <MenuItem key={key} value={key} >
                    {key}
                  </MenuItem>
                )
              })
            }
          </TextField>
        </Grid>

        <Grid item xs={8} md={6}>
          <Typography className={classes.numberItemLeft}>
            {state.currentModel.sizes[state.currentSize]} item(s) left
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <div>
            <Button
              className={classes.buyButton}
              disabled={state.currentModel.sizes[state.currentSize] as Number > 0 ? false : true}
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