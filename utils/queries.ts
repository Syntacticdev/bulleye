export const allPosts = `{
    posts {
      id
      slug
      excerpt
      title
      createdAt
    tags
      author {
        name
        picture {
          id
          fileName
          url
        }
      }
      coverImage {
        id
        fileName
        url
      }
      content {
        markdown
      }
      
    }
  }`


export const getMatchPost = `
query getPost ($slug:String!) {
  post(where:{slug: $slug}) {
    title
    id
tags 
createdAt
coverImage {
id
fileName
url
}
content {
  markdown
}
author {
  name
  picture {
    url
  }
}
  }
}
`
export const getPostComments = `
query GetComments($id:ID!){   
  comments(where: {post: {id: $id}}) {
    id
    name
    message
  } 
}
`