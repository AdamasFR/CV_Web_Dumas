import React, {Component} from '../../../node_modules/react';
import './MenuComponent.scss'

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as MenuComponentActions from "../../store/MenuComponent/actions";
let title = "Anthony Dumas";
let jobTitle = "Développeur Full Stack @ Harvest";
export default class MenuComponent extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <section id="menu" class="hero is-primary dontPrint is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                  {title}
                </h1>
                <h2 class="subtitle">
                  {jobTitle}
                </h2>
            </div>
        </div>
    </section>;
    }
  }
// export default connect(
//     ({ MenuComponent }) => ({ ...MenuComponent }),
//     dispatch => bindActionCreators({ ...MenuComponentActions }, dispatch)
//   )( MenuComponent );
