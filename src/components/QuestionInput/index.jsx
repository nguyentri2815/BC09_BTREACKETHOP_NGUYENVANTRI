import TextField from "@material-ui/core/TextField";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../store/actions";
import { actionType } from "../../store/actions/type";
class QuestionInput extends Component {
  constructor(props) {
    super(props);
    this.state = { valuaQuestion: "" };
  }
  handleChange = (event) => {
    this.setState({
      valuaQuestion: event.target.value,
    });

    this.props.dispatch(
      createAction(actionType.CHECK_ANSWERS, {
        QuestionId: this.props.item.id,
        answer: {
          content: event.target.value,
          exact:
            event.target.value.toLowerCase() ===
            this.props.item.answers[0].content.toLowerCase()
              ? true
              : false,
        },
      })
    );
  };
  render() {
    const { content, answers } = this.props.item;
    console.log(answers);
    return (
      <>
        <h2>{content}</h2>
        <form noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="Standard"
            fullWidth
            value={this.state.valuaQuestion}
            onChange={this.handleChange}
          />
        </form>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    arrResults: state.course.arrResults,
  };
};
export default connect(mapStateToProps)(QuestionInput);
