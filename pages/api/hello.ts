import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {
name: string
isPresent: boolean
}
export default function handler(
req: NextApiRequest,
res: NextApiResponse<Data>
) {
res.status(200).json({
    name: 'John Doe',
    isPresent: true
})
}