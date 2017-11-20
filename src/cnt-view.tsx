import {CntStore} from "./cnt-store";
import {observer, inject} from "mobx-react";
import * as React from "react";
import {Component} from "react";
import {autobind} from "core-decorators";

export interface CntViewProps {
  cntStore?: CntStore;
}

@observer
@inject("cntStore")
export class CntView extends Component<CntViewProps> {

  @autobind
  increment() {
    this.props.cntStore.increment();
  }

  render() {
    return (
      <div>
        cnt = {this.props.cntStore.count}
        <br/>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}