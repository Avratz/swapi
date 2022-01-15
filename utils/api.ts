type FetchType = {
	method?: 'GET' | 'PATCH' | 'POST' | 'DELETE' | 'PUT'
	body?: BodyInit | null
	headers?: HeadersInit
	mode?: RequestMode
}

type OthersParamsType = Omit<FetchType, 'method' | 'body'>

export class Api {
	constructor(private readonly url: string) {}

	get<T extends {}>(path: string, params: T, othersParams: OthersParamsType = {}) {
		const urlParams = new URLSearchParams(params)
		return fetch(`${this.url}/${path}?${urlParams}`, {
			method: 'GET',
			body: null,
			...othersParams,
		})
	}

	post(path: string, body: BodyInit, othersParams: OthersParamsType = {}) {
		return fetch(`${this.url}/${path}`, {
			method: 'POST',
			body,
			...othersParams,
		})
	}

	patch(path: string, body: BodyInit, othersParams: OthersParamsType = {}) {
		return fetch(`${this.url}/${path}`, {
			method: 'PATCH',
			body,
			...othersParams,
		})
	}

	delete(path: string, body: BodyInit, othersParams: OthersParamsType = {}) {
		return fetch(`${this.url}/${path}`, {
			method: 'DELETE',
			body,
			...othersParams,
		})
	}

	put(path: string, body: BodyInit, othersParams: OthersParamsType = {}) {
		return fetch(`${this.url}/${path}`, {
			method: 'PUT',
			body,
			...othersParams,
		})
	}
}

const createApi = (url: string) => new Api(url)

export default createApi
