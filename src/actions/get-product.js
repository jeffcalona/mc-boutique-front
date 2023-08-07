import { NEXT_PUBLIC_API_URL } from '@/app/config'

const getProduct = async (id) => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/products/${id}`, { cache: 'no-store' })
    if(!res.ok) {
        throw new Error('Something went wrong')
    }
    const data = await res.json()
    return data
}

export default getProduct