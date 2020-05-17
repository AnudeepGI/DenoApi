import { Router } from 'https://deno.land/x/oak/mod.ts'

const router = new Router()
router.get('/books', ({ response }: { response: any }) => {
      response.body = "Tesing"
      })
      .get('/books/:isbn', ({ response }: { response: any }) => {
            response.body = "Tesing"
      })
      .post('/books', ({ response }: { response: any }) => {
            response.body = "Tesing"
      })
      .put('/books/:isbn', ({ response }: { response: any }) => {
            response.body = "Tesing"
      })
      .delete('/books/:isbn', ({ response }: { response: any }) => {
            response.body = "Tesing"
      })

export default router