import React, { FunctionComponent, useState } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { IAppState } from '../../store/reducers';
import Style from "./css"
import { WithStyles } from "@material-ui/core";
import { withStyles, Grid, Typography, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { item, size, cartItem } from '../../store/types/myType';
import { useParams, RouteComponentProps } from 'react-router-dom';
import { useLastLocation } from 'react-router-last-location';

interface MatchParams {
  id: string;
}

interface props extends WithStyles<typeof Style>, RouteComponentProps<MatchParams> {
}

const defaultState = (): {
  currentSize: size,
} => {
  return {
    currentSize: "M",
  }
}

const Item: FunctionComponent<props> = ({ classes, match, history }) => {
  const [state, setState] = useState(defaultState())
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
      imgUrl: item.imgUrl,
      size: state.currentSize,
      price: item.price
    }
    dispatch({ type: "ADD_ITEM", payload: newItem })
  };


  const item = commonState.items.get(Number(match.params.id));
  if (!item) return <div>item not found</div>;

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <div className={classes.item}>
            <div style={{ borderRadius: "15px", boxShadow: "5px 4px 10px grey" }}>
              <div className={classes.itemImgContainer}>
                <img className={classes.itemImg} alt={""} src={item.imgUrl} />
              </div>
              <Typography className={classes.itemTitle}>{item.title}</Typography>
            </div>
          </div>
        </Grid>

        <Grid item sm={5}>
          <div className={classes.item}>
            <div style={{ borderRadius: "15px", boxShadow: "5px 4px 10px grey" }}>
              <Grid container className={classes.itemImgContainerSmall}>
                <Grid item md={4} style={{ padding: "5px" }}>
                  <img className={classes.itemImgSmall} alt={""} src={"https://ae01.alicdn.com/kf/H8caed1fd158341c6bab76fcfa809b68cd/GONTHWID-Creatvie-Arc-En-Ciel-Licorne-Imprim-Manches-Longues-T-shirts-Harajuku-Hip-Hop-D-contract.jpg"} />
                </Grid>
                <Grid item md={4} style={{ padding: "5px" }}>
                  <img className={classes.itemImgSmall} alt={""} src={"https://ae01.alicdn.com/kf/H0db82f597355424fb1c532255ea2565f0/GONTHWID-Creatvie-Arc-En-Ciel-Licorne-Imprim-Manches-Longues-T-shirts-Harajuku-Hip-Hop-D-contract.jpg"} />
                </Grid>
                <Grid item md={4} style={{ padding: "5px" }}>
                  <img className={classes.itemImgSmall} alt={""} src={"https://ae01.alicdn.com/kf/H100e37c75fd6425bbe9927133c08e4f7W/GONTHWID-Creatvie-Arc-En-Ciel-Licorne-Imprim-Manches-Longues-T-shirts-Harajuku-Hip-Hop-D-contract.jpg"} />
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>

        <Grid item xs={7}>
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
        <Grid item xs={5} />

        <Grid item xs={2}>
          {/* <Fade delay={150}> */}
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
          {/* </Fade> */}
        </Grid>

        <Grid item md={4} xs={6}>
          {/* <Fade delay={200}> */}
          <Typography className={classes.numberItemLeft}>
            {item.getNbItemForSize(state.currentSize)} item(s) left
          </Typography>
          {/* </Fade> */}
        </Grid>

        <Grid item xs={12}>
          {/* <Fade delay={250}> */}
          <div>
            <Button
              className={classes.buyButton}
              disabled={item.getNbItemForSize(state.currentSize) > 0 ? false : true}
              onClick={() => { storeItem(item) }}
            >
              ADD TO CART
                </Button>
            <Button className={classes.returnButton} onClick={() => {
              if (lastLocation === null) {
                return history.push("/")
              }
              return history.goBack()
            }}>
              RETURN
            </Button>
          </div>
          {/* </Fade> */}
        </Grid>
      </Grid>
    </div >
  )
}

export default withStyles(Style)(Item);