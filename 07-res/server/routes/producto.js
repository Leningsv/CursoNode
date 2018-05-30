const express = require('express');
const { verificaToken } = require('../middlewares/autenticacion');
const app = express();
const Producto = require('../models/producto');
/**
 * Obtener productos
 */
app.get('/productos', [verificaToken], (req, res) => {
    let desde = req.query.desde || 0;
    desde = Number(desde);
    Producto.find({ disponible: true })
        .skip(desde)
        .limit(5)
        .populate('usuario', 'nombre email')
        .populate('categoria', 'descripcion')
        .exec((err, productos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                productos
            });
        });
});
/**
 * Obtener un producto por id
 */
app.get('/productos/:id', [verificaToken], (req, res) => {
    const id = req.params.id;
    Producto.findById(id)
        .populate('usuario', 'nombre email')
        .populate('categoria', 'descripcion')
        .exec((err, productoDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!productoDB) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'No existe el producto con el id solicitado'
                    }
                });
            }
            res.json({
                ok: true,
                productoDB
            });
        });
});
/**
 * Crear un producto
 */
app.post('/productos', [verificaToken], (req, res) => {
    let body = req.body;
    let producto = new Producto({
        usuario: req.usuario._id,
        nombre: body.nombre,
        precioUni: body.precioUni,
        descripcion: body.descripcion,
        disponible: body.disponible,
        categoria: body.categoria
    });
    producto.save((err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.status(201).json({
            ok: true,
            productoDB
        });
    });
});
/**
 * Atualizar un producto
 */
app.put('/productos/:id', [verificaToken], (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const prodcuto = {
        nombre: body.nombre,
        precioUni: body.precioUni,
        categoria: body.categoria,
        disponible: body.disponible,
        descripcion: body.descripcion
    };
    Producto.findByIdAndUpdate(id, prodcuto, { new: true, runValidators: true }, (err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no exsite'
                }
            });
        }
        res.json({
            ok: true,
            productoDB
        });
    });
});
/**
 * Buscar producto
 */
app.get('/productos/buscar/:termino', [verificaToken], (req, res) => {
    const termino = req.params.termino;
    const regex = new RegExp(termino, 'i');
    Producto.find({ nombre: regex })
        .populate('categoria', 'nombre')
        .exec((err, productos) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                productos
            });
        });
});
/**
 * Elimina un producto
 */
app.delete('/productos/:id', [verificaToken], (req, res) => {
    const id = req.params.id;
    Producto.findById(id, (err, productoDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!productoDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El ID no exsite'
                }
            });
        }
        productoDB.disponible = false;
        productoDB.save((err, productoBorrado) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                productoBorrado,
                mensaje: 'producto borrado'
            });
        });
    });
});
module.exports = app;