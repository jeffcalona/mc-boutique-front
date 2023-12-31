import { NEXT_PUBLIC_API_URL } from '@/app/config'
import qs from 'query-string'

const URL = `${NEXT_PUBLIC_API_URL}/products`

const getProducts = async ({ categoryId, colorId, billboardId }) => {

    const query = {};

    if (categoryId !== undefined) {
        query.categoryId = categoryId;
    }

    if (billboardId !== undefined) {
        query.billboardId = billboardId;
    }

    if (colorId !== undefined) {
        query.colorId = colorId;
    }

    const url = qs.stringifyUrl({
        url: URL,
        query: query
    })

    try {
        const res = await fetch(url, { cache: 'no-store' });

        if (!res.ok) {
            throw new Error('Request failed');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error('Something went wrong');
    }
}

export default getProducts