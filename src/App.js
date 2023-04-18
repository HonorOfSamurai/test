import './App.css';
import Strong from './components/Strong';
import Userage from './components/Userage';

function App() {
  return (
    <div className="App">
      <div>
      <Strong initialCount={0} title="My Counter" />
      <Userage/>
    </div>
    </div>
  );
}

export default App;

// В первых двух строках кода мы импортируем две функции из библиотеки React: React и useState. 
// React используется для создания React-компонентов, а useState используется для добавления состояния в компонент.

// Далее мы создаем функциональный компонент Strong, который принимает два пропса: initialCount и title.

// С помощью useState мы создаем состояние count, которое инициализируется значением initialCount. 
// Функция setCount используется для обновления состояния count при нажатии на кнопки "Increment" и "Decrement".

// Функции handleIncrement и handleDecrement используют функцию setCount для увеличения и уменьшения значения count.

// Код возвращает элементы JSX, которые отображают заголовок title, текущее значение count, и две кнопки для увеличения и уменьшения значения count.

// Наконец, мы экспортируем компонент Strong, который может быть использован в других компонентах.

// В строке <Strong initialCount={0} title="My Counter" /> мы используем компонент Strong, передавая ему значения для initialCount и title. 
// Это отображает компонент на странице с начальным значением счетчика 0 и заголовком "My Counter".