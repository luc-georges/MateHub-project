const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { mailOptionsPassword } = require('../utils/nodemailer.utils');
const { testRefreshToken, generateAccessToken } = require('../utils/jwt.utils');
const { testsecurityString, generateSecurityString, deletesecurityString, saveSecurityString} = require('../utils/newPassword.utils')

module.exports = {
    /**
     * middleware express pour refresh l'access_token
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} l'access token
     */
    refreshToken : async (request, response) => {
        try {
            const refreshToken = request.body.refreshToken;

            if (!refreshToken) {
                return response.status('401').json({error : 'need refreshToken'});
            }
                      
            jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET,async (err, user) => {
                if(err) return response.status('403').json({ error: 'invalid refresh token'});
                
                const tokenIsValid = await testRefreshToken(user, refreshToken);
                if (!tokenIsValid) {
                    return response.status('403').json({error: 'refresh token doesnt exist in cache'});
                }
                    const dataUser = { _id : user.id, _nickname : user.nickname};
                    const accesToken = generateAccessToken(dataUser);
                    response.status('201').json({accesToken});
            })

        } catch (error) {
            console.log('error:', error)
            response.status('500').json({error:'Internal Server Error'});
        }

    },

    /**
     * middleware express pour récupere un code secret qui permet de modifier notre mot de passe
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} message de confirmation 
     */
    forgotPassword : async (request, response, next) => {
        try {
            
            const checkEmail = {email : request.body.email};
            const checkNickname = {nickname : request.body.nickname};
            
            const tryIfUserExist = await User.findBy(checkEmail);
            const tryIfNicknameExist = await User.findBy(checkNickname);
            
            if(!tryIfUserExist) {
                return response.status('409').json({error:'Email doesn\'t exist'});
            }
                       
            if(!tryIfNicknameExist) {
                return response.status('409').json({error:'Nickname doesn\'t exist'});
            }

            if (tryIfUserExist._id !== tryIfNicknameExist._id) {
                return response.status('409').json({error:'email and password do not correspond to the same account'})
            }
            
            const securityString = await generateSecurityString();

            await saveSecurityString(request.body.nickname, securityString);
            /****** send mail at new user *********/  
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
                }
            });

            const options = mailOptionsPassword(request.body.email, securityString);
            transporter.sendMail(options, (err, _) => {
                if (err) {
                    console.log('error', err)
                }
            });
            /*************************************/
            
            response.status('200').json({message: 'mail with security code send'});

        } catch (error) {
            console.log('error:', error)
            response.status('500').json({error:'Internal Server Error'});
        }
    },

    /**
     * middleware express pour changer de mot de passe
     * @param {Object} request - Express request object
     * @param {Object} response - Express response object
     * @returns {json} message de confirmations
     */
    createNewPassword: async (request, response, next) => {
        try {
            const userEmail = { email : request.body.email }
            const user = await User.findBy(userEmail);
            if (!user) return response.status('403').json({error: 'invalide eMail'});

            const securityCode = request.body.securityCode;

            const isValid = await testsecurityString(user._nickname, securityCode);
            if (!isValid){
                return response.status('403').json({error: 'invalid security code'});
            }

            const { password, passwordConfirm } = request.body;
            if (password !== passwordConfirm) {
                return response.status('403').json({error: 'password and confirmPassword must be the same'});
            }

            const saltRounds = 10;
            const encryptedPassword = await bcrypt.hash(password, saltRounds);
            user.password = encryptedPassword;

            const result = await user.update();

            await deletesecurityString(user._nickname);
            
            response.status('201').json({message: 'new password create'});

        } catch (error) {
            console.log('error:', error)
            response.status('500').json({error:'Internal Server Error'});
        }
    }   
        
}