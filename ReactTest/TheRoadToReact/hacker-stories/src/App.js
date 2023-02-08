import logo from './logo.svg';
import './App.css';

// 全局变量定义
const title = "React";
  const list = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

// 函数组件 组件名为 App
function App() {
  return (
  // App.js默认内容
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  // 最简单的JSX
    <div>
      <h1>Hello {title}</h1>
      {/* 调用组件List */}
      <List />
    </div>
  );
  // 返回一个空页面
  return null
}

// 函数组件 组件名为List
function List() {
  // 使用React实现HTML列表
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      { //请注意这里的花括号,这就是React令人惊叹的瞬间之一,在javascript中嵌套HTML外还可以在HTML中嵌套javascript */
        list.map(function (item) { //使用javascript中的map实现html列表
          return (
            <div key={item.objectID/*这里我们要避免使用数组中项目的索引来保证 key 属性是稳定的标识符*/}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
