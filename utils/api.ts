import { SWRResponse } from 'swr'
import reporting from '~/reporting'

type FetchType = {
	method?: 'GET' | 'PATCH' | 'POST' | 'DELETE' | 'PUT'
	body?: BodyInit | null
	headers?: HeadersInit
	mode?: RequestMode
}

type ParamsType = Omit<FetchType, 'method'>

type getParamsType<T extends {}> = Omit<FetchType, 'method' | 'body'> & { body?: T }

export class Api {
	constructor(private readonly url: string) {
		this.get = this.get.bind(this)
		this.post = this.post.bind(this)
		this.patch = this.patch.bind(this)
		this.delete = this.delete.bind(this)
		this.put = this.put.bind(this)
	}

	get<T extends { [key: string]: number | boolean | string }>(
		path: string,
		params: getParamsType<T>,
	) {
		const { body } = params

		const query =
			body !== undefined
				? Object.entries(body)
						.reduce((acc: string[], [key, value]) => {
							acc.push(`${key}=${encodeURIComponent(value)}`)
							return acc
						}, [])
						.join('&')
				: undefined

		const url = `${this.url}/${path}${query !== undefined ? '?' + query : ''}`
		return fetch(url, {
			method: 'GET',
			...params,
			body: null,
		})
			.then((res) => res.json())
			.catch(reporting)
	}

	post(path: string, params: ParamsType = {}) {
		return fetch(`${this.url}/${path}`, {
			method: 'POST',
			...params,
		})
			.then((res) => res.json())
			.catch(reporting)
	}

	patch(path: string, params: ParamsType = {}) {
		return fetch(`${this.url}/${path}`, {
			method: 'PATCH',
			...params,
		})
			.then((res) => res.json())
			.catch(reporting)
	}

	delete(path: string, params: ParamsType = {}) {
		return fetch(`${this.url}/${path}`, {
			method: 'DELETE',
			...params,
		})
			.then((res) => res.json())
			.catch(reporting)
	}

	put(path: string, params: ParamsType = {}) {
		return fetch(`${this.url}/${path}`, {
			method: 'PUT',
			...params,
		})
			.then((res) => res.json())
			.catch(reporting)
	}
}

const createApi = (url: string) => new Api(url)

export function processSWRResponse<T>(SWRResponse: SWRResponse<T>) {
	const { data, error } = SWRResponse

	return {
		data,
		isLoading: !error && !data,
		isError: error,
	}
}

export default createApi
