const express = require('express');

const user = require('../models/userModel')

exports.getAllusers = function()
{
    return new Promise((resolve,reject) =>
        {
            user.find({}, function(err, usersData)
            {
                if(err)
                {
                    reject(err)
                }   
                else
                {
                    resolve(usersData)
                }
            });
        })
}

exports.getuser = function(userID)
{
    return new Promise((resolve,reject) =>
        {
            user.findById(userID,function(err, userData)
            {
                if(err)
                {
                    reject(err)
                }   
                else
                {
                    resolve(userData)
                }
            });
        })
}

exports.adduser = function(newuser)
{
    return new Promise((resolve,reject) =>
    {
        let user = new user({
                            name : newuser.name,
                            email : newuser.email,
                            street : newuser.street,
                            zipcode : newuser.zipcode,
                            tasks : newuser.tasks,
                            posts : newuser.posts

                            });

            user.save(function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve("user created !")
                }
            })
    })
}


exports.updateuser = function(userID, upatedData)
{
    return new Promise((resolve,reject) =>
    {
           user.findByIdAndUpdate(userID,
            {
                name : upatedData.name,
                email : upatedData.email,
                street : upatedData.street,
                zipcode : upatedData.zipcode,
                tasks : upatedData.tasks,
                posts : upatedData.posts

            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('user was updated !')
                }
            })
    })
}

exports.deleteuser = function(userID)
{
    return new Promise((resolve,reject) =>
        {
            user.findByIdAndDelete(userID,function(err)
            {
                if(err)
                {
                    reject(err)
                }   
                else
                {
                    resolve("user deleted !")
                }
            });
        })
}