Queue data structure implemented with JavaScript. See: [https://en.wikipedia.org/wiki/Queue_(abstract_data_type)](https://en.wikipedia.org/wiki/Queue_(abstract_data_type))

## Usage

```js
import Queue from 'path/to/queue.format'

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()

console.log(`${queue}`)
```

## Build

`npm run build`

Modify `rollup.config.js` as you please, or use your favourite bundler.
