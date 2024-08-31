import bcrypt from 'bcryptjs';

class Criptografia {
  /**
   * Encripta uma string usando bcrypt.
   * @param {string} value - String a ser encriptada.
   * @param {number} saltRounds - O número de rounds para gerar o salt (opcional, padrão é 10).
   * @returns {Promise<string>} - A string encriptada.
   */
  static async encriptar(value, saltRounds = 10) {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(value, salt);
  }

  /**
   * Compara uma string em texto puro com uma string encriptada.
   * @param {string} value - String em texto puro.
   * @param {string} hash - O hash da string criptografada.
   * @returns {Promise<boolean>} - Retorna true se a string for igual ao hash, caso contrário false.
   */
  static async comparar(value, hash) {
    return await bcrypt.compare(value, hash);
  }
}

export default Criptografia;