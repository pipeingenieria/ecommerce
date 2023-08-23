//const Product = require('./_models/product.model.js');
const Argollas = require('./_models/argollas.model.js');
const Pulseras = require('./_models/pulseras.model.js');
const Collares = require('./_models/collares.model.js');
const Aretes = require('./_models/aretes.model.js');
const Dijes = require('./_models/dijes.model.js');
const ClientJuridico = require('./_models/client.model');
const ClientNatural = require('./_models/clientNatural.model');
const botonLinkPagos = require('./_models/botonLinkPagos.model');
const transactions = require('./_models/transaction.model');
var mc2p = require('mc2p')('bb26f8e2d9a24a85b08a310054c5ad63', 'b790a87c4271433ab38ce4c268496560');

/* //Create new Product
exports.create = (req, res) => {
    // Request validation
    if(!req.body) {
        
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Create a Product
    const product = new Product({
        title: req.body.title || "No product title", 
        description: req.body.description,
        price: req.body.price,
        company: req.body.company
    });

    // Save Product in the database
    product.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the product."
        });
    });
};


// Retrieve all products from the database.
exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};

// Find a single product with a productId
exports.findOne = (req, res) => {
    Product.findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving product with id " + req.params.productId
        });
    });
};

// Update a product
exports.update = (req, res) => {
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Product content can not be empty"
        });
    }

    // Find and update product with the request body
    Product.findByIdAndUpdate(req.params.productId, {
        title: req.body.title || "No product title", 
        description: req.body.description,
        price: req.body.price,
        company: req.body.company
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.params.productId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send({message: "Product deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Could not delete product with id " + req.params.productId
        });
    });
}; */

//---------------- Crear Nuevo Producto ------------------------------------------
exports.createProduct = (req, res) => {
    // Request de validacion
    if (!req.body) {
        return res.status(400).send({
            message: "La informacion de Cliente no puede estar vacia"
        });
    }

    switch (req.body.tipoProducto) {

    }

    if (req.body.tipoProducto == "argollas") {
        Argollas.find()
            .then(product => {
                if (!product) {
                   
                    const argolla = new Argollas({
                        nombre: req.body.nombre,
                        gramos: req.body.gramos,
                        descripcion: req.body.descripcion,
                        referencia: req.body.referencia,
                        valor: req.body.valor,
                        foto: req.body.foto,
                        tipoProducto: req.body.tipoProducto,
    
    
                    });
    
                    argolla.save()
                        .then(data => {
                            res.send(data);
                        }).catch(err => {
                            res.status(500).send({
                                message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                            });
                        });
                }


                /*  return res.status(404).send({
                        message: "Producto ya existe con id " + req.body.referencia
                    }); */

                    Argollas.findOneAndUpdate({ referencia: req.body.referencia }, 
                        {
                        $set:{
                            nombre: req.body.nombre,
                            gramos: req.body.gramos,
                            descripcion: req.body.descripcion,
                            referencia: req.body.referencia,
                            valor: req.body.valor,
                            foto: req.body.foto,
                            tipoProducto: req.body.tipoProducto,
                        }})
                        .then(product => {
                            res.send(product);

                         }).catch(err => {
                            if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                    message: "Product not found with id " + req.body.tipoProducto
                                });
                            }
                            return res.status(500).send({
                                message: "Something wrong retrieving product with id " + req.body.tipoProducto
                            });
                        });
                
                //res.send(product);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Product not found with id " + req.body.tipoProducto
                    });
                }
                return res.status(500).send({
                    message: "Something wrong retrieving product with id " + req.body.tipoProducto
                });
            });


    }

    if (req.body.tipoProducto == "pulseras") {
        Pulseras.findOne({ referencia: req.body.referencia })
            .then(product => {
                if (!product) {
                   
                    const pulseras = new Pulseras({
                        nombre: req.body.nombre,
                        gramos: req.body.gramos,
                        descripcion: req.body.descripcion,
                        referencia: req.body.referencia,
                        valor: req.body.valor,
                        foto: req.body.foto,
                        tipoProducto: req.body.tipoProducto,
    
    
                    });
    
                    pulseras.save()
                        .then(data => {
                            res.send(data);
                        }).catch(err => {
                            res.status(500).send({
                                message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                            });
                        });
                }


                /*  return res.status(404).send({
                        message: "Producto ya existe con id " + req.body.referencia
                    }); */

                    Pulseras.findOneAndUpdate({ referencia: req.body.referencia }, 
                        {
                        $set:{
                            nombre: req.body.nombre,
                            gramos: req.body.gramos,
                            descripcion: req.body.descripcion,
                            referencia: req.body.referencia,
                            valor: req.body.valor,
                            foto: req.body.foto,
                            tipoProducto: req.body.tipoProducto,
                        }})
                        .then(product => {
                            res.send(product);

                         }).catch(err => {
                            if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                    message: "Product not found with id " + req.body.tipoProducto
                                });
                            }
                            return res.status(500).send({
                                message: "Something wrong retrieving product with id " + req.body.tipoProducto
                            });
                        });
                
                //res.send(product);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Product not found with id " + req.body.tipoProducto
                    });
                }
                return res.status(500).send({
                    message: "Something wrong retrieving product with id " + req.body.tipoProducto
                });
            });
    }

    if (req.body.tipoProducto == "collares") {
        Collares.findOne({ referencia: req.body.referencia })
            .then(product => {
                if (!product) {
                   
                    const collares = new Collares({
                        nombre: req.body.nombre,
                        gramos: req.body.gramos,
                        descripcion: req.body.descripcion,
                        referencia: req.body.referencia,
                        valor: req.body.valor,
                        foto: req.body.foto,
                        tipoProducto: req.body.tipoProducto,
    
    
                    });
    
                    collares.save()
                        .then(data => {
                            res.send(data);
                        }).catch(err => {
                            res.status(500).send({
                                message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                            });
                        });
                }


                /*  return res.status(404).send({
                        message: "Producto ya existe con id " + req.body.referencia
                    }); */

                    Collares.findOneAndUpdate({ referencia: req.body.referencia }, 
                        {
                        $set:{
                            nombre: req.body.nombre,
                            gramos: req.body.gramos,
                            descripcion: req.body.descripcion,
                            referencia: req.body.referencia,
                            valor: req.body.valor,
                            foto: req.body.foto,
                            tipoProducto: req.body.tipoProducto,
                        }})
                        .then(product => {
                            res.send(product);

                         }).catch(err => {
                            if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                    message: "Product not found with id " + req.body.tipoProducto
                                });
                            }
                            return res.status(500).send({
                                message: "Something wrong retrieving product with id " + req.body.tipoProducto
                            });
                        });
                
                //res.send(product);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Product not found with id " + req.body.tipoProducto
                    });
                }
                return res.status(500).send({
                    message: "Something wrong retrieving product with id " + req.body.tipoProducto
                });
            });
    }
    if (req.body.tipoProducto == "aretes") {
        Aretes.findOne({ referencia: req.body.referencia })
            .then(product => {
                if (!product) {
                   
                    const aretes = new Aretes({
                        nombre: req.body.nombre,
                        gramos: req.body.gramos,
                        descripcion: req.body.descripcion,
                        referencia: req.body.referencia,
                        valor: req.body.valor,
                        foto: req.body.foto,
                        tipoProducto: req.body.tipoProducto,
    
    
                    });
    
                    aretes.save()
                        .then(data => {
                            res.send(data);
                        }).catch(err => {
                            res.status(500).send({
                                message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                            });
                        });
                }


                /*  return res.status(404).send({
                        message: "Producto ya existe con id " + req.body.referencia
                    }); */

                    Aretes.findOneAndUpdate({ referencia: req.body.referencia }, 
                        {
                        $set:{
                            nombre: req.body.nombre,
                            gramos: req.body.gramos,
                            descripcion: req.body.descripcion,
                            referencia: req.body.referencia,
                            valor: req.body.valor,
                            foto: req.body.foto,
                            tipoProducto: req.body.tipoProducto,
                        }})
                        .then(product => {
                            res.send(product);

                         }).catch(err => {
                            if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                    message: "Product not found with id " + req.body.tipoProducto
                                });
                            }
                            return res.status(500).send({
                                message: "Something wrong retrieving product with id " + req.body.tipoProducto
                            });
                        });
                
                //res.send(product);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Product not found with id " + req.body.tipoProducto
                    });
                }
                return res.status(500).send({
                    message: "Something wrong retrieving product with id " + req.body.tipoProducto
                });
            });

    }

    if (req.body.tipoProducto == "dijes") {
        Dijes.findOne({ referencia: req.body.referencia })
            .then(product => {
                if (!product) {
                   
                    const dijes = new Dijes({
                        nombre: req.body.nombre,
                        gramos: req.body.gramos,
                        descripcion: req.body.descripcion,
                        referencia: req.body.referencia,
                        valor: req.body.valor,
                        foto: req.body.foto,
                        tipoProducto: req.body.tipoProducto,
    
    
                    });
    
                    dijes.save()
                        .then(data => {
                            res.send(data);
                        }).catch(err => {
                            res.status(500).send({
                                message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                            });
                        });
                }


                /*  return res.status(404).send({
                        message: "Producto ya existe con id " + req.body.referencia
                    }); */

                    Dijes.findOneAndUpdate({ referencia: req.body.referencia }, 
                        {
                        $set:{
                            nombre: req.body.nombre,
                            gramos: req.body.gramos,
                            descripcion: req.body.descripcion,
                            referencia: req.body.referencia,
                            valor: req.body.valor,
                            foto: req.body.foto,
                            tipoProducto: req.body.tipoProducto,
                        }})
                        .then(product => {
                            res.send(product);

                         }).catch(err => {
                            if (err.kind === 'ObjectId') {
                                return res.status(404).send({
                                    message: "Product not found with id " + req.body.tipoProducto
                                });
                            }
                            return res.status(500).send({
                                message: "Something wrong retrieving product with id " + req.body.tipoProducto
                            });
                        });
                
                //res.send(product);
            }).catch(err => {
                if (err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Product not found with id " + req.body.tipoProducto
                    });
                }
                return res.status(500).send({
                    message: "Something wrong retrieving product with id " + req.body.tipoProducto
                });
            });
    }












}


//---------------- MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN - MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN - Crear Nuevo Producto ------------------------------------------

/* ********************************************************************************************
 ***********************************************************************************************
 */



//---------------- Obtener Producto ------------------------------------------
exports.getProduct = (req, res) => {
    // Request de validacion
    if (!req.body) {
        return res.status(400).send({
            message: "La informacion de Cliente no puede estar vacia"
        });
    }

    switch (req.body.tipoProducto) {
        case "argollas":
            Argollas.find()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                    });
                });


            break;
        case "pulseras":
            Pulseras.find()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                    });
                });

            break;
        case "collares":
            Collares.find()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                    });
                });

            break;
        case "aretes":
            Aretes.find()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                    });
                });

            break;
        case "dijes":
            Dijes.find()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Algo ha salido mal, al crear el nuevo cliente"
                    });
                });

            break;
    }













}


//---------------- MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN - MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN - Crear Obtener Producto ------------------------------------------

/* ********************************************************************************************
 ***********************************************************************************************
 */


/* ********************************************************************************************
 ***********************************************************************************************
 */



//---------------- Update Producto ------------------------------------------
exports.updateProduct = (req, res) => {
    // Request de validacion
    if (!req.body) {
        return res.status(400).send({
            message: "La informacion de Cliente no puede estar vacia"
        });
    }

    switch (req.body.tipoProducto) {
        case "argollas":
            Argollas.findOne({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });


            break;
        case "pulseras":
            Pulseras.findOne({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });
            break;
        case "collares":
            Collares.findOne({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });

            break;
        case "aretes":
            Aretes.findOne({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });

            break;
        case "dijes":
            Dijes.findOne({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });

            break;
    }




}


//---------------- MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN - MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN - Crear Update Producto ------------------------------------------

/* ********************************************************************************************
 ***********************************************************************************************
 */

/* ********************************************************************************************
 ***********************************************************************************************
 */



//---------------- Delete Producto ------------------------------------------
exports.deleteProduct = (req, res) => {
    // Request de validacion
    if (!req.body) {
        return res.status(400).send({
            message: "La informacion de Cliente no puede estar vacia"
        });
    }

    switch (req.body.tipoProducto) {
        case "argollas":
            Argollas.findOneAndRemove({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });


            break;
        case "pulseras":
            Pulseras.findOneAndRemove({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });
            break;
        case "collares":
            Collares.findOneAndRemove({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });

            break;
        case "aretes":
            Aretes.findOneAndRemove({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });

            break;
        case "dijes":
            Dijes.findOneAndRemove({ referencia: req.body.referencia })
                .then(product => {
                    if (!product) {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    res.send(product);
                }).catch(err => {
                    if (err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Product not found with id " + req.body.tipoProducto
                        });
                    }
                    return res.status(500).send({
                        message: "Something wrong retrieving product with id " + req.body.tipoProducto
                    });
                });

            break;
    }




}


//---------------- MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN - MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN - Delete Producto ------------------------------------------

/* ********************************************************************************************
 ***********************************************************************************************
 */


 /* ********************************************************************************************
 ***********************************************************************************************
 */



//---------------- GET ALL PRODUCTS ------------------------------------------
exports.getAllProducts = (req, res) => {
    // Request de validacion
    if (!req.body) {
        return res.status(400).send({
            message: "La informacion de Cliente no puede estar vacia"
        });
    }
            var acumular
   
            Argollas.find()
                .then(data => {
                    //res.send(data);
                    acumular.push(data)
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the product."
                    });
                });


            Pulseras.find()
                .then(data => {
                    //res.send(data);
                    acumular.push(data)
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the product."
                    });
                });
           

            Collares.find()
                .then(data => {
                    //res.send(data);
                    acumular.push(data)
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the product."
                    });
                });
           
            Aretes.find()
                .then(data => {
                    //res.send(data);
                    acumular.push(data)
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the product."
                    });
                });

           
            Dijes.find()
                .then(data => {
                   //res.send(data);
                   acumular.push(data);
                   res.send(acumular);
                   console.log("ACUMULADO::::",acumular)
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Something wrong while creating the product."
                    });
                });

        
    




}


//---------------- MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN - MAILER SERVICIO DE MENSAJERIA ------------------------------------------




//---------------- FIN -GET ALL PRODUCTS ------------------------------------------

/* ********************************************************************************************
 ***********************************************************************************************
 */
