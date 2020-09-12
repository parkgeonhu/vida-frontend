import client from './client';

export const createSearch = ({ tags }) =>
  client.post('/api/posts', { tags });

// export const readSearch = tag => client.get(`/api/posts/${tag}`);

// export const readSearch = tag => {
//   client.get(`http://localhost:3000/test.json`);
// }


// export const readSearch = tag => client.get(`/api/test?tag=${tag}`);

export const readSearch = tag => client.get(`/api/search`);

// export const listPosts = ({ page, username, tag }) => {
//   const queryString = qs.stringify({
//     page,
//     username,
//     tag,
//   });
//   return client.get(`/api/posts?${queryString}`);
// };

// export const updatePost = ({ id, title, body, tags }) =>
//   client.patch(`/api/posts/${id}`, {
//     title,
//     body,
//     tags,
//   });

// export const removePost = id => client.delete(`/api/posts/${id}`);