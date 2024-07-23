import { createClient} from '@sanity/client'
import createImageUrlBuilder from "@sanity/image-url";



const client = createClient({
  projectId: 'kakfsfbt', 
  dataset: 'production', 
  useCdn: true, 
  apiVersion: '2021-08-31'
})



const builder = createImageUrlBuilder(client);

export const urlFor = source=> builder.image(source) 

export default client;