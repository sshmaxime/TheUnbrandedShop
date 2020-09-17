import React, { FunctionComponent } from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ItemList from '../../components/itemList/itemList';
import { IAppState } from '../../store/reducers';
import Style from "./css"
import { WithStyles, withStyles } from "@material-ui/core";
import image1 from '../../assets/cover.jpg';

interface props extends WithStyles<typeof Style> {
}

const Home: FunctionComponent<props> = ({ classes }) => {
  const { commonState } = useSelector((state: IAppState) => state);
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>

      <div className={classes.imgDiv}>
        <div className={classes.shopButton}>
          Shop Now
        </div>
        <img src={image1} style={{ width: "100%" }} />
      </div>

      <div>
      </div>

      <ItemList />
    </div>
  )
}

export default withStyles(Style)(Home);