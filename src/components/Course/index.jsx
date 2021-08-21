import {
  Card,
  CardActionArea, withStyles
} from "@material-ui/core";
import React, { Component } from "react";
import QuestionInput from ".././QuestionInput";
import QuestionRadio from ".././QuestionRadio";
import styles from "./style";

class Course extends Component {
  render() {
    const { questionType } = this.props.item;
    return (
      <Card>
        <CardActionArea>
          {questionType === 1 && <QuestionRadio item={this.props.item} />}
          {questionType === 2 && <QuestionInput item={this.props.item} />}
        </CardActionArea>
      </Card>
    );
  }
}

export default withStyles(styles)(Course);
