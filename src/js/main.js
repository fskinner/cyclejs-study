import { Observable } from 'rx';
import { div, br, label, input } from '@cycle/dom';
import { Input } from './helpers';

export default ({ DOM }) => {
  const height$ = Input(DOM.select('#Height')).startWith('186');
  const weight$ = Input(DOM.select('#Weight')).startWith('70');

  const bmi$ = Observable.combineLatest(height$, weight$,
    (height, weight) => (weight / (height / 100) ** 2).toFixed(1)
  );

  return {
    DOM: Observable.combineLatest(height$, weight$, bmi$, (height, weight, bmi) =>
      div('.p2.measure', [
        label({ htmlFor: 'Height' }, 'Height: '),
        input('#Height', { value: height }),
        br(),
        label({ htmlFor: 'Weight' }, 'Weight: '),
        input('#Weight', { value: weight }),
        br(),
        'BMI: ' + bmi
      ])
    )
  };
}
