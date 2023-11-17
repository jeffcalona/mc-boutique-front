import { NEXT_PUBLIC_API_URL } from '@/app/config'

const URL = `${NEXT_PUBLIC_API_URL}/products`

const getAllProducts = async () => {
    try {
        const res = await fetch(URL, { cache: 'no-store' });

        if (!res.ok) {
            throw new Error('Request failed');
        }

        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error('Something went wrong');
    }
}

export default getAllProducts