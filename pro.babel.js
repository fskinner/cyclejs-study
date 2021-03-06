import webpack from 'webpack';
import { entry, clientOutput, loaders, productionPlugins } from './constants';
import { join } from 'path';
import { writeFileSync } from 'fs';

export default {
	entry,
	output: clientOutput,
	module: { loaders },
	plugins: [
		new webpack.DefinePlugin({
			CLIENT: 'true'
		}),
		...productionPlugins,
		function() {
			this.plugin('done', result =>
				writeFileSync(
					join(__dirname, 'hashes.json'),
					JSON.stringify(result.toJson().assetsByChunkName)
				)
			);
		}
	]
};
