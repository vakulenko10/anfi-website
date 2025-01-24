import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/slices/counterSlice';
import { Button } from './components/ui/button';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <div className="Counter">
      <h1>{count}</h1>
      <Button onClick={() => dispatch(increment(1))}>Increment</Button>
      <Button onClick={() => dispatch(decrement(1))}>Decrement</Button>
    </div>
  );
};

export default Counter;
