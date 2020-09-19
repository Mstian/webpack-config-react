import './style.less';
import React from 'react';
import { Button } from 'antd-mobile';
import { useHistory } from "react-router-dom";
function Home(props: any) {
  const history = useHistory();
  const [count, setCount] = React.useState(0);
  const [people, setPeople] = React.useState({name:'lisa', age: 18});
  const toApp = () => {
    const id = 'lucy';
    history.push({ pathname: '/app/' + id });
    // props.history.push({pathname:'/app', query:{name:name}})
    // props.history.push({pathname: '/app', state:{name:name}})
  };
  const countPlus = () => {
    setCount(count + 1);
  };
  const changeName = (val:string) => {
    setPeople((prev) => {
      return {...prev, ...{name:val}}
    })
  }
  React.useEffect(() => {
    console.log("effect");
    return () => {
      console.log('销毁');
    }
  },[count])
  return (
    <div className='App'>
      <div>
        <div>{count}</div>
        <div>
          <Button type='primary' onClick={countPlus}>
            +
          </Button>
        </div>
        {/* <img onClick={toApp} src="../../public/static/test4.jpeg" alt=""/> */}
        <div>
          <Button type='primary' onClick={toApp}>
            跳转页面
          </Button>
        </div>
        <div>
          {people.name}{people.age}
          <Button type='primary' onClick={() => {changeName('ray')}}>
            changeName
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Home;
