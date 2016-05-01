import webpack, { optimize as oz } from 'webpack';
import { entry, clientOutput, loaders } from './constants';

export default {
	entry,
	output: clientOutput,
	module: { loaders },
	plugins: [
		new webpack.DefinePlugin({
			CLIENT: 'true'
		}),
		new oz.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	devtool: 'eval'
};
