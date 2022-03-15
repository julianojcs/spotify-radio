import config from './config.js'
import { Controller } from './controller.js'
import { logger } from './util.js'

const {
  location,
  pages: { homeHTML, controllerHTML },
  constants: { CONTENT_TYPE }
} = config
const controller = new Controller()

const routes = async (request, response) => {
  const { method, url } = request
  if (method === 'GET' && url === '/') {
    response.writeHead(302, {
      Location: location.home
    })
    return response.end()
  }
  if (method === 'GET' && url === '/home') {
    // const { stream } = controller.getFileStream(homeHTML)
    const fileStream = controller.getFileStream(homeHTML)
    const { stream } = fileStream
    // O padrao do response é text/html, portanto não tem necessidade da linha abaixo
    // response.writeHead(200, { 'Contebt-Type': 'text/html' })
    return stream.pipe(response)
  }
  if (method === 'GET' && url === '/controller') {
    const { stream } = controller.getFileStream(controllerHTML)
    return stream.pipe(response)
  }
  if (method === 'GET') {
    //FILES
    const { stream, type } = await controller.getFileStream(file)
    const contentType = CONTENT_TYPE[type]
    contentType && response.writeHead(200, { 'Content-Type': contentType })
    return stream.pipe(response)
  }

  response.writeHead(404)
  return response.end()
}

const handleError = (error, response) => {
  if (error.message.includes('ENOENT'))
    logger.warn(`Asset not found ${error.stack}`)
  else logger.error(`Caught error on API ${error.stack}`)
  response.writeHead(404)
  return response.end()
}

export const handler = (request, response) => {
  return routes(request, response).catch(
    (error) => handleError(error, response)
    // (error) => logger.error(`Deu ruim ${error.stack}`)
  )
}
