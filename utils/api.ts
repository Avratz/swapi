import { SWRResponse } from 'swr'
import reporting from '~/reporting'

type FetchType<T extends BodyInit> = {
	method?: 'GET' | 'PATCH' | 'POST' | 'DELETE' | 'PUT'
	body?: T
	headers?: HeadersInit
	mode?: RequestMode
}

type ParamsType<T extends BodyInit> = Omit<FetchType<T>, 'method'>

type getParamsType<T extends {}> = Omit<FetchType<never>, 'method' | 'body'> & { body?: T }

function processFetch<T>(fetchCB: () => Promise<Response>): Promise<T> {
	return fetchCB()
		.then((res: Response) => res.json())
		.catch((err: any) => {
			reporting(err)
			throw err
		})
}

export class Api {
	constructor(private readonly url: string) {
		this.get = this.get.bind(this)
		this.post = this.post.bind(this)
		this.patch = this.patch.bind(this)
		this.delete = this.delete.bind(this)
		this.put = this.put.bind(this)
	}

	get<T extends { [key: string]: number | boolean | string }, U>(
		path: string,
		params: getParamsType<T>,
	): Promise<U> {
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

		return processFetch<U>(() =>
			fetch(url, {
				method: 'GET',
				...params,
				body: null,
			}),
		)
	}

	post<T extends BodyInit, U>(path: string, params: ParamsType<T> = {}) {
		return processFetch<U>(() =>
			fetch(`${this.url}/${path}`, {
				method: 'POST',
				...params,
			}),
		)
	}

	patch<T extends BodyInit, U>(path: string, params: ParamsType<T> = {}) {
		return processFetch<U>(() =>
			fetch(`${this.url}/${path}`, {
				method: 'PATCH',
				...params,
			}),
		)
	}

	delete<T extends BodyInit, U>(path: string, params: ParamsType<T> = {}) {
		return processFetch<U>(() =>
			fetch(`${this.url}/${path}`, {
				method: 'DELETE',
				...params,
			}),
		)
	}

	put<T extends BodyInit, U>(path: string, params: ParamsType<T> = {}) {
		return processFetch<U>(() =>
			fetch(`${this.url}/${path}`, {
				method: 'PUT',
				...params,
			}),
		)
	}
}

export function processSWRResponse<T>(SWRResponse: SWRResponse<T>) {
	const { data, error } = SWRResponse

	return {
		data,
		isLoading: !error && !data,
		isError: error,
	}
}

const createApi = (url: string) => new Api(url)
export default createApi
