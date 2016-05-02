import { Observable } from 'rx';
import { div, button, p, label } from '@cycle/dom';
import { Button } from './helpers';

export default ({ DOM }) => {
  const increment$ = Button(DOM.select('.increment')).map(() => +1);
  const decrement$ = Button(DOM.select('.decrement')).map(() => -1);

  const counter$ = Observable.merge(increment$, decrement$)
    .startWith(0)
    .scan((prev, curr) => prev + curr);

  return {
    DOM: counter$.map(data =>
      div([
        button('.increment', 'Increment'),
        p([
          label(String(data))
        ]),
        button('.decrement', 'Decrement')
      ])
    )
  };
}
