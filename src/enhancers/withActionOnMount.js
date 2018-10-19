import React from "react";
import { connect } from "react-redux";
import { compose, lifecycle, mapProps } from "recompose";

export default action => Component =>
  compose(
    connect(
      null,
      dispatch => ({ dispatch })
    ),
    lifecycle({
      componentDidMount() {
        this.props.dispatch(action);
      }
    }),
    mapProps(({ dispatch, ...ownerProps }) => ({ ...ownerProps })) // omit the dispatch prop
  )(Component);
