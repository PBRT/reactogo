import { Link } from 'react-router';

let s = getStyle();

let Index = (props) =>
  (<div>
    <div style={s.container}>
      <div style={s.logo}><Link to='home'>ReacToGo</Link></div>
      <div style={s.links}>
        <div style={s.link}><Link to='todos'>Todos</Link></div>
        <div style={s.link}><Link to='about'>About</Link></div>
        <div style={s.link}><Link to='contact'>Contact</Link></div>
      </div>
    </div>
    {props.children}
  </div>);


function getStyle() {
  return {
    container: {
      width: '100%',
      height: 60,
      backgroundColor: UI.lightWhite,
      display: 'flex',
      alignItems: 'center',
    },
    logo: {
      flex: 'initial',
      padding: 20,
      cursor: 'pointer',
    },
    links: {
      flex: 1,
      textAlign: 'right',
      display: 'flex',
      justifyContent: 'flex-end',
    },
    link: {
      padding: 20,
      cursor: 'pointer',
      color: 'red',
    },
  };
}
Index.displayName = 'Index';

export default Index;
