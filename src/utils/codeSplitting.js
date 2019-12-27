import Loadable from 'react-loadable';

export default function codeSplitting(path) {
	return Loadable({
		loader: () => import(`../modules/${path}`),
		loading: () => `<div>Loading</div>`
	});
}
