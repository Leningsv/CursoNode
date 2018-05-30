const express = require('express');
const { verificaToken, verificaAdmin_Role } = require('../middlewares/autenticacion');
const app = express();
const Categoria = require('../models/categoria');
/**
 * Mostrar todas las categorias
 */
app.get('/categoria', [verificaToken], (req, res) => {
    Categoria.find({})
        .sort({ descripcion: 'asc' })
        .populate('usuario', 'nombre email')
        .exec((err, categorias) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            res.json({
                ok: true,
                categorias
            });
        });
});
/**
 * Mostrar una categoria por id
 */
app.get('/categoria/:id', (req, res) => {
    const id = req.params.id;
    Categoria.findById({ _id: id })
        .populate('usuario')
        .exec((err, categoria) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    err
                });
            }
            if (!categoria) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'El id no es valido'
                    }
                });
            }
            res.json({
                ok: true,
                categoria
            });
        });
});
/**
 * Crear nueva categoria
 */
app.post('/categoria', [verificaToken], (req, res) => {
    const body = req.body;
    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });
    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
    //Regresa la nueva categoria
});
/**
 * Actualiza token
 */
app.put('/categoria/:id', (req, res) => {
    const id = req.params.id;
    const body = req.body;
    const descCategoria = {
        descripcion: body.descripcion
    };
    /**
     * new: determina si retorna el valor nuevo o el antiguo
     * runValidators: determina si las validaciones del modelo seran usadas o no
     */
    Categoria.findByIdAndUpdate(id, descCategoria, { new: true, runValidators: true }, (err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB
        });
    });
});
/**
 * Borrado de la categoria
 */
app.delete('/categoria/:id', [verificaToken, verificaAdmin_Role], (req, res) => {
    const id = req.params.id;
    Categoria.findByIdAndRemove(id, (err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'El id no existe'
                }
            });
        }
        res.json({
            ok: true,
            categoria: categoriaDB,
            message: 'Categoria Borrada'
        });
    });
    //Solo un administrado puede borrar categorias
    // Categoria.findByIdAndRemove
});
module.exports = app;