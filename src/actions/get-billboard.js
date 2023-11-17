import { NEXT_PUBLIC_API_URL } from '@/app/config'

const getBillboard = async (billboardId) => {
    const res = await fetch(`${NEXT_PUBLIC_API_URL}/billboards/${billboardId}`, { cache: 'no-store' })
    if(!res.ok) {
        throw new Error('Something went wrong')
    }
    const data = await res.json()
    return data
}

export default getBillboard