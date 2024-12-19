import createClient from 'openapi-fetch'

import type { paths as pathsWithParamsAsTypes} from './openapi-with-params-as-types.d.ts'
import type { paths as pathsWithoutParamsAsTypes} from './openapi-without-params-as-types.d.ts'

const clientWith = createClient<pathsWithParamsAsTypes, 'application/json'>({ baseUrl: 'https://api.example.com' })
const clientWithout = createClient<pathsWithoutParamsAsTypes, 'application/json'>({ baseUrl: 'https://api.example.com' })

export const createSessionWith = async () => {
  return clientWith.POST('/api/sessions/create', {})
}

export const createSessionWithout = async () => {
  return clientWithout.POST('/api/sessions/create', {})
}
