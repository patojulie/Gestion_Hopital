const users = require('../models/users');
const bcrypt = require('bcryptjs');

const validateRole =['admin','medecin','patient'];
const userService = {
  async createUser(userData) {
    const { role = 'patient', speciality, email, password, name, lastName} = userData;
    if (!name || !lastName || !email || !password) {
      throw new Error('Les champs name, lastName, email et password sont requis');
    }
    if (role === 'medecin' && !speciality) {
      throw new Error('La spécialité est requise pour un médecin');
    }
    // if((role === 'medecin' || role === 'admin') && !photo){
    //   throw new Error('La photo est requise pour un médecin et un admin');
    // }
    const existingUser = await users.findOne({ where: { email } });
    if (existingUser) {
      throw new Error('Email déjà utilisé');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await users.create({
      ...userData,
      role,
      password: hashedPassword,
    });

    return newUser;
  },

  async loginUser(data) {
    const { email, password } = data;

    const user = await users.findOne({ where: { email } });
    if (!user) throw new Error('Utilisateur non trouvé');

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error('Mot de passe incorrect');

    return { email: user.email };
  },

  async getUsersByRole(role){
      if(!validateRole.includes(role)){
        const error = new Error('role not valid');
        error.statusCode = 400;
        throw error;
      }
      const getUsers =  await users.findAll({where :{role}});
      return getUsers;
  }
};

module.exports = userService;
