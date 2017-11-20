import {CntView} from "./cnt-view";
import * as React from "react";
import {Component} from "react";
import {CntStore} from "./cnt-store";
import {Provider} from "mobx-react";

const cntStore = CntStore.create();

export class ExampleApp extends Component {
  render() {
    return (
      <Provider cntStore={cntStore}>
        <CntView/>
      </Provider>
    );
  }
}