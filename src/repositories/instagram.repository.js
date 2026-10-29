import db from '../config/db.js';

class PostRepository {
  async create(dados) {
    const [post] = await db('posts').insert(dados).returning('*');
    return post;
  }

  async findAll() {
    return await db('posts').select('*');
  }

  async findById(id) {
    return await db('posts').where({ id }).first();
  }

  async update(id, dados) {
    const [post] = await db('posts').where({ id }).update(dados).returning('*');
    return post;
  }

  async delete(id) {
    return await db('posts').where({ id }).del();
  }
}

export default new PostRepository();