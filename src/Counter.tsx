import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/slices/counterSlice';
import { Button } from './components/ui/button';
import {getNestedValues} from '../utils/recursive-object-functions'
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

const data = [
  {
      "color": "hhh",
      "description": "ll;dele",
      "id": 40,
      "images": [
          "https://res.cloudinary.com/dujdz2jbl/image/upload/v1731091402/frontend/lstqkufcngq8oafogobp.png"
      ],
      "material": "hhhy",
      "name": "Aplaca brooches",
      "price": 66.0,
      "status": "available"
  },
  {
      "color": "fff",
      "description": "Unicorn toy made of wool. Unicorn.\n\nThe toy is made from wool by me. Made to order within 3-5 days. To order, I will make a similar version, which may differ slightly from the original version.\n\n100% handmade\n100% original product\n\nMade with love ❤️",
      "id": 33,
      "images": [
          "https://i.etsystatic.com/27994452/r/il/e8617f/5793915362/il_1588xN.5793915362_gtqp.jpg"
      ],
      "material": "wool",
      "name": "Unicorn wool toy. Easter",
      "price": 55.0,
      "status": "available"
  },
  {
      "color": "white red yellow",
      "description": "Cute Christmas alpaca brooch🦙\nFinished product, one in stock, but I can make a similar one to order✨\n🖇️Length 4 inches\n🖇️Width 1.5 inches\n100% handmade\n100% original product\nMade with love ❤️",
      "id": 32,
      "images": [
          "https://res.cloudinary.com/dujdz2jbl/image/upload/v1731091398/frontend/ftpzdd0ddoktyjtjqoy1.png",
          "https://res.cloudinary.com/dujdz2jbl/image/upload/v1731091398/frontend/ftpzdd0ddoktyjtjqoy1.png"
      ],
      "material": "wool",
      "name": "Christmas Alpaca brooch",
      "price": 25.0,
      "status": "available"
  },
  {
      "color": "white red",
      "description": "Christmas brooch sleeping sheep.\nHeight 1 inch.\nWidth 2 inches.\nDeep 0.6 inches.\nMade of wool.\n100% handmade. 100% original product.\nI will make a similar product for you to your order.\nIt may differ slightly from the original photo, because the brooch is made by hand.",
      "id": 27,
      "images": [
          "https://res.cloudinary.com/dujdz2jbl/image/upload/v1731091400/frontend/kimua6mud7w5batol514.png"
      ],
      "material": "wool",
      "name": "easter brooch sleeping ",
      "price": 30.0,
      "status": "available"
  },
  {
      "color": "white red",
      "description": "Brooch Sleeping Rabbit ❤️\n\nMade with my own hands.\n\nI will make you a similar one, you can choose variations of secondary colors for yourself\n\n(white is the main one, pink, lavender, burgundy, light blue, dark blue - at your discretion)\n\nHeight: 1.5 inches.\nWidth: 1.3 inches.\nDepth: 0.3 inches.",
      "id": 29,
      "images": [
          "https://i.etsystatic.com/27994452/r/il/450128/5466809159/il_1588xN.5466809159_2uj5.jpg"
      ],
      "material": "wool",
      "name": "Brooch Sleeping Rabbit",
      "price": 20.0,
      "status": "available"
  },
  {
      "color": "pink grey",
      "description": "This decoration toy is already sold out❗️\nBut I can make a similar product especially for you.\n100% handmade\nMaterials: wool, beads, threads.\n🖇️Width: 2 inches\n🖇️Height: 8 inches\n🖇️Depth: 1 inch\nCreating such a toy will take 2-4 days.\nMade with love ❤️",
      "id": 30,
      "images": [
          "https://i.etsystatic.com/27994452/r/il/e7bae3/5473595769/il_1588xN.5473595769_5lw1.jpg"
      ],
      "material": "wool, beads, threads",
      "name": "Cute pink bunny angel",
      "price": 30.0,
      "status": "available"
  }
]

const keys = ['name','color', 'status', 'material'];

const result = getNestedValues(data, keys);
console.log(result);
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
