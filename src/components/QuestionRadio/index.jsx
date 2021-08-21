import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../store/actions";
import { actionType } from "../../store/actions/type";

class QuestionRadio extends Component {
  constructor(props) {
    super(props);
    this.state = { valuaQuestion:"" };
  }
  handleChange = (event) => {
    this.setState({
      valuaQuestion: event.target.value,
    });
    const selectedAnswer =this.props.item.answers.find(
      (itemQuestion) => +itemQuestion.id === +event.target.value
    );
    this.props.dispatch(
      createAction(actionType.CHECK_ANSWERS, {
        QuestionId: this.props.item.id,
        answer: {
          content: selectedAnswer.content,
          exact: selectedAnswer.exact,
        },
      })
    );
  };
  render() {
    const { content, answers } = this.props.item;
    return (
      <>
        <h2>{content}</h2>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={this.state.valuaQuestion}
          onChange={this.handleChange}
        >
          {answers.map((item) => (
            <FormControlLabel
              key={item.id}
              value={item.id}
              control={<Radio />}
              label={item.content}
            />
          ))}
        </RadioGroup>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrResults: state.course.arrResults,
  };
};

export default connect(mapStateToProps)(QuestionRadio);
