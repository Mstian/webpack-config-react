// import 'Src/style/app.scss';
import './style.less';
// import spider from 'Src/spider.jpeg';
import React from 'react';
function App(props: any) {
  console.log(props);
  const { count, addNumber, minNumber, addTwo} = props;
  const name = props.match.params.id; // 路由传参 params 需配置路由 刷新数据不丢失
  // const name = props.location.query.name; // query 刷新丢失数据
  // const name = props.location.state.name; // state传参 刷新数据丢失
  return (
    <div className='App'>
      <div>{name}</div>
      <div>count:{count}</div>
      <div>
        <button onClick={addNumber}> + </button>
      </div>
      <div>
        <button onClick={minNumber}> - </button>
      </div>
      <div>
        <button onClick={() => {addTwo(2)}}>+2</button>
      </div>
      {/* <div>
        <img src='Src/Assets/spider.jpeg' alt='' />
      </div>
      <div>
        <img src="../../public/static/test4.jpeg" alt=""/>
      </div> */}
    </div>
  );
}
export default App;
