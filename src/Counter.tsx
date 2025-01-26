import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/slices/counterSlice';
import { Button } from './components/ui/button';
import {getNestedValues} from '../utils/recursive-object-functions'
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  return (
    <div className="Counter">
      
      {/* Header 1 */}
      <div className='rounded-xl bg-card-secondary  m-5 relative p-2'>
      <h1>{count}</h1>
      <h1>This is a primary heading (h5).</h1>
      {/* Button for increment */}
      <Button onClick={() => dispatch(increment(1))}>Increment</Button>

      {/* Button for decrement */}
      <Button onClick={() => dispatch(decrement(1))}>Decrement</Button>
      {/* Header 2 */}
      <h2>This is a secondary heading (h2).</h2>
      </div>
      
      <div className='rounded-xl bg-background-secondary m-5 relative p-2 text-primary'>
      <h1>{count}</h1>
      <h1>This is a primary heading (h5).</h1>
      {/* Button for increment */}
      <Button variant={"filter"} size={'lg'} onClick={() => dispatch(increment(1))}>Increment</Button>

      {/* Button for decrement */}
      <Button variant={"accent"} size={'lg'} onClick={() => dispatch(decrement(1))}>Decrement</Button>
      {/* Header 2 */}
      <h2>This is a secondary heading (h2).</h2>
      </div>

      {/* Header 3 */}
      <h3>This is a tertiary heading (h3).</h3>

      {/* Header 4 */}
      <h4>This is a quaternary heading (h4).</h4>

      {/* Header 5 */}
      <h5>This is a quinary heading (h5).</h5>

      {/* Header 6 */}
      <h6>This is a senary heading (h6).</h6>

      {/* Paragraph */}
      <p>This is a paragraph with the base font size and relaxed line height.</p>

      {/* Anchor tag */}
      <a>Click here for more details.</a>


      {/* Blockquote */}
      <blockquote>This is a blockquote styled with custom classes and fonts.</blockquote>

      {/* Example of an unordered list */}
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      {/* Example of an ordered list */}
      <ol>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ol>

      {/* Example of a definition list */}
      <dl>
        <dt>Term 1</dt>
        <dd>Definition of Term 1</dd>
        <dt>Term 2</dt>
        <dd>Definition of Term 2</dd>
      </dl>

      {/* Strong text */}
      <strong>This is bold text using strong tag.</strong>

      {/* Emphasized text */}
      <em>This is italicized text using em tag.</em>

      {/* Code block */}
      <code>const a = 1;</code>

      {/* Preformatted block */}
      <pre>const a = 1;</pre>

      {/* Horizontal Rule */}
      <hr />

      {/* Small text */}
      <small>This is small text.</small>

      {/* Subscript text */}
      <sub>This is subscript text.</sub>

      {/* Superscript text */}
      <sup>This is superscript text.</sup>

      {/* Address tag */}
      <address>Contact us at <a href="mailto:example@example.com">example@example.com</a></address>
    </div>
  );
};

export default Counter;
