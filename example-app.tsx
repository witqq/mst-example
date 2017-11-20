import {CntView} from "./cnt-view";
import * as React from "react";
import {Component} from "react";
import {CntStore} from "./cnt-store";

const cntStore = CntStore.create();

export class ExampleApp extends Component {
  render() {
    return (
      <CntView cntStore={cntStore}/>
    );
  }
}