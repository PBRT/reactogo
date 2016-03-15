import { Link } from 'react-router';

let NestedExample = (props) => <div className='text-center' style={{marginTop: 40}}>
  <h1 style={{marginBottom: 30}}>Nested Example</h1>
  <Link to='nested-example/nested' style={{marginRight: 20}}>SUB NESTED ROUTE</Link>
  <Link to='nested-example'>INDEX ROUTE</Link>
  {props.children}
</div>;

export default NestedExample;
