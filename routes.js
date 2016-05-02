import { join } from 'path';

const localJoin = (...args) => './' + join(...args);
const appDir = 'src/js';
const pageDir = 'src/html';

/* endpoint configs
app relative to ./src/js
page relative to ./src/html
*/

export default [
	{
		app: 'index.js',
		page: 'index.jade',
		route: '/'
	}, {
		app: 'about.js',
		page: 'index.jade',
		route: '/about'
	},
	{
		app: 'counter.js',
		page: 'index.jade',
		route: '/counter'
	},
	{
		app: 'todos.js',
		page: 'index.jade',
		route: '/todos'
	}
].map(({ app, page, ...rest }, index) => ({
	app: localJoin(appDir, app),
	page: localJoin(pageDir, page),
	id: index,
	...rest
}));
