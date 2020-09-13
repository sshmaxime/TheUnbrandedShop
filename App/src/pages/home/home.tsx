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
    <>
      {/* <img src={image1} style={{ width: "100vw", height: "100vh" }} /> */}
      <div className={classes.root}>
        <ItemList />
      </div>
    </>
  )
}

export default withStyles(Style)(Home);