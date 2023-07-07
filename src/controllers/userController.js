const { where } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async getAll(req, res){
        const users = await User.findAll();

        res.status(200).send({users});
    },

    async getById(req, res){
        const id = req.params.id;

        const user = await User.findByPk(id);

        res.status(200).send({user});
    },

    async store(req, res){
        const {name, email} = req.body;

        const userCreate = await User.create({name, email});

        res.status(200).send({userCreate});
    },

    async delete(req, res){
        const id = req.params.id;

        await User.destroy({
            where:{
                id
            }
        });

        res.status(200).send({message: 'User deleted successfully'});
    },

    async update(req, res){
        const id = req.params.id;
        const {name, email} = req.body;

        await User.update({name, email}, {
            where: {
                id
            }
        });

        const user = await User.findByPk(id);

        res.status(200).send({user});
    }
}