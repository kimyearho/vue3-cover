import { useQuery } from '@tanstack/vue-query'
import axios from '../modules/http'

interface IOption {
    url: string
    params?: any
}

const fetcher = async (options: IOption | any) =>
    await axios.get(options.url, options.params ? { params: options.params } : {}).then(({ data }) => data)

const useFetch = (queryKey: string, options?: IOption) => {
    const { data, isPending, isSuccess, isError, error } = useQuery({
        queryKey: [queryKey],
        queryFn: () => fetcher(options),
        retry: 3,
        retryDelay: 3000,
        staleTime: 300000, // 5 minute
    })
    return { data, isPending, isSuccess, isError, error }
}

export default useFetch
