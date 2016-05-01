import webpack from 'webpack';
import { loaders, productionPlugins } from './constants';
import nodeExternals from 'webpack-node-externals';

export default {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'server.js'
	},
	module: { loaders },
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '\'production\''
		}),
		...productionPlugins
	],
	target: 'node',
	externals: [nodeExternals()]
};
