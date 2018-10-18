import styles from "./Woofr";
import React from "react";
import { compose, withStateHandlers, lifecycle } from "recompose";

export const path = "/woofr";

const delay = t => new Promise(resolve => setTimeout(resolve, t));

const withAsyncData = Component =>
  compose(
    withStateHandlers(
      {
        foo: "bar"
      },
      {
        updateData: (state, props) => payload => ({ foo: payload })
      }
    ),
    lifecycle({
      componentDidMount() {
        delay(2000).then(() => {
          this.props.updateData("boyz");
        });
      }
    })
  )(Component);

const Woof = withAsyncData(({ updateData, foo }) => (
  <div>
    <div>Woof, woof! {foo}</div>
    <button onClick={() => updateData("hello world")}>Get doggos</button>
    <div />
  </div>
));

export const Component = props => (
  <div className={styles.root}>
    <h1>Random Dog Pictures</h1>
    <Woof />
  </div>
);

export default {
  path,
  component: Component
};
