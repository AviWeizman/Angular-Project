const { response } = require('express');
const express = require('express');
const appRouter = express.Router();

const usersBL = require('../models/usersBL');

appRouter.route('/')
    .get(async function(req,resp)
    {
        let users = await usersBL.getAllusers()
      
        return resp.json(users);
    });

appRouter.route('/:id')
    .get(async function(req,resp)
    {
        let userId = req.params.id;

        let user = await usersBL.getuser(userId)
      
        return resp.json(user);
    });

appRouter.route('/')
    .post(async function(req,resp)
    {
        let userObj = req.body;

        let result = await usersBL.adduser(userObj)
      
        return resp.json(result);
    });

appRouter.route('/:id')
    .put(async function(req,resp)
    {
        let userId = req.params.id;
        let userObj = req.body;
        let result = await usersBL.updateuser(userId,userObj)
      
        return resp.json(result);
    });

appRouter.route('/:id')
    .delete(async function(req,resp)
    {
        let userId = req.params.id;
       
        let result = await usersBL.deleteuser(userId)
      
        return resp.json(result);
    });


module.exports = appRouter;