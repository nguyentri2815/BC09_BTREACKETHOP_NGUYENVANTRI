import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import Course from "../../components/Course";
import { fetchCourses } from "../../store/actions/course";

class Home extends Component {
  alertResult=()=>{
    const resultTrue=this.props.arrResults.filter(item=>(
      item.answer.exact===true
    ))
    alert(`Số kết quả đúng là ${resultTrue.length}`)
  }
  render() {
    return (
      <div>
        <Typography component="h1" variant="h3" align="center">
          Danh sách câu hỏi
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {this.props.courses.map((item) => {
              return (
                <Grid key={item.id} item xs={12} sm={12} md={12}>
                  <Course item={item} />
                </Grid>
              );
            })}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="medium"
            disableElevation
            onClick={this.alertResult}
          >
            click xem kết quả
          </Button>
        </Container>
      </div>
    );
  }

  //async await : biến asynchronous thành synchronous

  async componentDidMount() {
    this.props.dispatch(fetchCourses);
  }
}

const mapStateToProps = (state) => {
  return {
    courses: state.course.courses,
    arrResults:state.course.arrResults
  };
};

export default connect(mapStateToProps)(Home);
