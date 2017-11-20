import {CntStore} from "./cnt-store";
import {observer} from "mobx-react";
import * as React from "react";
import {Component} from "react";
import {autobind} from "core-decorators";
import {injectStore} from "./inject-store";

@observer
export class CntView extends Component {

  @injectStore("cntStore")
  cntStore: CntStore;

  @autobind
  increment() {
    this.cntStore.increment();
  }

  render() {
    return (
      <div>
        cnt = {this.cntStore.count}
        <br/>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}