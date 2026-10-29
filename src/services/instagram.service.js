import postRepository from '../repositories/post.repository.js';

class PostService {
  async create(dados) {
    return await postRepository.create(dados);
  }

  async getAll() {
    return await postRepository.findAll();
  }

  async getById(id) {
    return await postRepository.findById(id);
  }

  async update(id, dados) {
    return await postRepository.update(id, dados);
  }

  async delete(id) {
    return await postRepository.delete(id);
  }
}

export default new PostService();