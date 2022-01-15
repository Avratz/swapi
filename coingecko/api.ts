import createApi from "~/utils/api"

const url = "https://api.coingecko.com/api/v3"
const coinGecko = createApi(url)

export default coinGecko