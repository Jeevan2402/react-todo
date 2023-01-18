import Header from './componets/Header';
import MainTodo from './componets/MainTodo';
import styles from './style.module.css'
function App() {
  return (
    <div className="">
      <Header></Header>
      <div className={styles.mainComp}>
      <MainTodo ></MainTodo>
      </div>
      
    </div>
  );
}

export default App;
