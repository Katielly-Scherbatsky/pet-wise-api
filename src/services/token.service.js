class TokenService {
  validateToken(request, response) {
    const token = request.headers.authorization;

    if (!token) {
      return response.status(401).send('Token não fornecido');
    }
    
    return 4;
  }
}

export default new TokenService();
