import React, { FunctionComponent } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from '../../components/itemList/itemList';
import { IAppState } from '../../store/reducers';
import Style from "./css"
import { WithStyles, withStyles } from "@material-ui/core";
import AC from "@material-ui/icons/ArrowDownward";
import imageCover from '../../assets/cover.jpg';
import imageAbout from '../../assets/about.jpg';
import imageAbout1 from '../../assets/about1.jpg';
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion"
import { Grid } from '@material-ui/core';

interface props extends WithStyles<typeof Style> {
}

const Home: FunctionComponent<props> = ({ classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={classes.root}>

      <div className={classes.imgDiv}>
        <div onClick={() => { history.push("/collections"); }} className={classes.shopButton}>
          Shop Now
        </div>

        <motion.div className={classes.arrowDownDiv} animate={{
          y: [10, 0, 10],
        }} transition={{ repeat: Infinity, repeatDelay: 1, duration: 0.4 }}>
          <AC className={classes.arrowDown} />
        </motion.div>

        <img src={imageCover} style={{}} />
      </div>

      <Grid container className={classes.firstContainer}>
        <Grid item xs={12}>
          <div className={classes.TitleSoft}>
            THE UNBRANDED SHOP
          </div>
        </Grid>
      </Grid>

      <Grid container className={classes.container}>
        <Grid item md={6}>
          <img src={imageAbout1} style={{ width: "100%", borderRadius: "5px", }} />
        </Grid>
        <Grid item md={1} />
        <Grid item md={5}>
          <div className={classes.Title}>
            ABOUT US
          </div>
          <div className={classes.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Grid>
      </Grid>

      <Grid container className={classes.container}>
        <Grid item md={5}>
          <div className={classes.Title}>
            POLICY
          </div>
          <div className={classes.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </Grid>
        <Grid item md={1} />
        <Grid item md={6}>
          <img src={imageAbout} style={{ width: "100%", borderRadius: "5px", }} />
        </Grid>
      </Grid>

    </div >
  )
}
// .Unfamous streetwear and fashion garments.
export default withStyles(Style)(Home);