/**
 * Variables de configuracion: puerto
 */
process.env.PORT = process.env.PORT || 3000;

/**
 * Entorno
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/**
 * Base de datos
 */
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
    // urlDB = 'mongodb://cafe-user:nada1234@ds231740.mlab.com:31740/cafe1';
} else {
    urlDB = 'mongodb://cafe-user:nada1234@ds231740.mlab.com:31740/cafe1';
}
process.env.URLDB = urlDB;