import React, { FunctionComponent } from 'react'
import Style from "./css"
import { WithStyles, withStyles } from "@material-ui/core";
import AC from "@material-ui/icons/ArrowDownward";
import imageCover from '../../assets/cover.jpg';
import imageAbout from '../../assets/about.jpg';
import imageAbout1 from '../../assets/about1.jpg';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { IAppState } from '../../store/reducers';
import ItemList from '../../components/itemList/itemList';

// @ts-ignore
import Ticker from 'react-ticker'

interface props extends WithStyles<typeof Style> {
}

const Home: FunctionComponent<props> = ({ classes }) => {
  const history = useHistory();
  const { storeState } = useSelector((state: IAppState) => state);

  return (
    <div className={classes.root}>
      <div className={classes.imgDiv}>
        <div onClick={() => { history.push("/collections"); }} className={classes.shopButton}>
          Shop Now
        </div>

        <motion.div className={classes.arrowDownDiv} animate={{ y: [10, 0, 10], }} transition={{ repeat: Infinity, repeatDelay: 1, duration: 0.4 }}>
          <AC className={classes.arrowDown} />
        </motion.div>
      </div>

      {/* <Grid container className={classes.container}>
        <Grid item md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div>
            <div className={classes.text}>
            </div>
          </div>
        </Grid>
        <Grid item md={6}>
          <img src={imageAbout1} alt={"homeimg1"} style={{ width: "100%", borderRadius: "5px", }} />
        </Grid>
      </Grid> */}

      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <div className={classes.TitleSoft}>
            EXCLUSIVE
          </div>
        </Grid>
      </Grid>
      <ItemList exclusiveOnly type="ALL" items={storeState.items} />

    </div >
  )
}
// .Unfamous streetwear and fashion garments.
export default withStyles(Style)(Home);



