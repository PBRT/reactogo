import Header from 'header.jsx';

let Index = (props) =>
  (<div>
    <Header />
    {props.children}
  </div>);

Index.displayName = 'Index';

export default Index;
