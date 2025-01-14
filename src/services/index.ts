import createClient from 'openapi-fetch'

import type { paths as pathsWithParamsAsTypes} from './openapi-with-params-as-types.d.ts'
import type { paths as pathsWithoutParamsAsTypes} from './openapi-without-params-as-types.d.ts'

const clientWith = createClient<pathsWithParamsAsTypes, 'application/json'>({ baseUrl: 'https://api.example.com' })
const clientWithout = createClient<pathsWithoutParamsAsTypes, 'application/json'>({ baseUrl: 'https://api.example.com' })

export const createSessionWithParamsAsTypes = async (bookingId: string) => {
  const { data, error } = await clientWith.PUT(`/api/bookings/${bookingId}/pay/session`, {
    params: {
      path: {
        id: bookingId
      }
    }
  })

  return { data, error }
}

export const createSessionWithoutParamsAsTypes = async (bookingId: string) => {
  const { data, error } = await clientWithout.PUT(`/api/bookings/{id}/pay/session`, {
    params: {
      path: {
        id: bookingId
      }
    }
  })
  return { data, error }
}
