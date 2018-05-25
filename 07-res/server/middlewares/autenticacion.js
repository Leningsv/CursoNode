const jwt = require('jsonwebtoken');

/**
 * Verificacion Token
 */
let verificaToken = (req, res, next) => {
    let token = req.get('token'); // Authorization   
    console.log(process.env.SEED);
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    name: 'JsonWebToken',
                    message: 'token invalido'
                }
            });
        }
        // Obteniendo informacion del payload
        req.usuario = decoded.usuario;
        next();
    });
};
/**
 * Verifica admin rol
 */
let verificaAdmin_Role = (req, res, next) => {
    let usuario = req.usuario;
    if (usuario.role !== 'ADMIN_ROLE') {
        return res.json({
            ok: false,
            err: {
                name: 'ROLE',
                message: 'Rol sin permisos suficientes'
            }
        })
    }
    next();
};
module.exports = {
    verificaToken,
    verificaAdmin_Role
};