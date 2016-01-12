import Header from 'header.jsx';
import { connect } from 'react-redux';
import RouteTransition from 'route-transition.jsx';

let Index = (props) =>
  (<div>
    <Header />
    <RouteTransition pathname={props.routing.path}>
      {props.children}
    </RouteTransition>
  </div>);

Index.displayName = 'Index';

export default connect((state) => ({routing: state.routing}))(Index);
