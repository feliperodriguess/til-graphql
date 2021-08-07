import { Post } from '../../../models/Post'
import { User } from '../../../models/User'

export default {
  Post: {
    author: async (post) => await User.findById(post.author),
  },
  Query: {
    getPosts: () => Post.find(),
    getPostById: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { data }) => Post.create(data),
    updatePost: (_, { id, data }) => Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => !!(await Post.findByOneAndDelete(id)),
  },
}
