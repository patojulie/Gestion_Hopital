const userService = require('../services/userService');

const userController = {
    async createUser(req,res){
        try {
            const newUser = await userService.createUser(req.body);
            res.status(201).json({message:'user enregistrer avec succes ',user:newUser});
        } catch (error) {
            res.status(400).json({error :error.message});
        }
    },

    async loginUser(req,res){
        try {
            const user = await userService.loginUser(req.body);
            res.status(200).json({message:'login reussi avec succes'+user});
        } catch (error) {
            res.status(401).json({error:error.message});
        }
    },

    async getUsersRole(req,res){
        const {role} = req.params;
        try {
            const users = await userService.getUsersByRole(role);
            res.status(200).json(users);
        } catch (err) {
            console.error("Erreur récupération utilisateurs:", err);
            res.status(err.statusCode || 500).json({ message: err.message || "Erreur serveur" });
        }
    }
}

module.exports = userController;