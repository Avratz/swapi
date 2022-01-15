import type { ApiCoinsSimpleParams } from './types'
import swapi from '~/api/api'

const simple = {
	price(params: ApiCoinsSimpleParams) {
		return swapi.get('coins/price/', params)
	},
}

const api = {
	simple,
}

export default api
