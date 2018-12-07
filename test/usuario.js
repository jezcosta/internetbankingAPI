var supertest = require('supertest')
var should = require('should')

var server = supertest.agent('localhost:3000')

describe("Testes de usuário", function(){

    describe("Testes de login", function(){

        it("Tentativa de login válida", function(done){
            server
            .post("/api/v1/usuario/logon")
            .send({"cpf": "123","senha": "123"})
            .expect(200) 
            .end(function(err,res){
                res.status.should.equal(200)
                res.body.success.should.equal(true)
                res.body.should.have.property('token')
                if (err) return done(err)
                done();
            })
        })

        it("Tentativa de login inválida", function(done){
            server
            .post("/api/v1/usuario/logon")
            .send({"cpf": "invalido","senha": "invalida"})
            .expect(500) 
            .end(function(err,res){
                res.status.should.equal(500)
                res.body.success.should.equal(false)
                res.body.should.not.have.property('token')
                if (err) return done(err)
                done();
            })
        })

        it("Chamada de URL incorreta no login", function(done){
            server
            .post("/api/v1/usuario/login")
            .send({"cpf": "123","senha": "123"})
            .expect(404)
            .end(function(err,res){
                res.status.should.equal(404)
                if (err) return done(err)
                done();
            }) 
        })
    })

    describe("Testes de logout", function(){

        it("Tentativa de logout inválida", function(done){
            server
            .post("/api/v1/usuario/logout")
            .expect(500)
            .end(function(err,res){
                res.status.should.equal(500)
                res.body.success.should.equal(false)
                if (err) return done(err)
                done()
            })
        })

        it("Chamada de URL incorreta no logout", function(done){
            server
            .post("/api/v1/usuario/logou")
            .expect(404)
            .end(function(err,res){
                res.status.should.equal(404)
                if (err) return done(err)
                done()
            })
        })
    })

    describe("Testes de informações de usuários", function(){

        it("Tentativa váliida de obtenção de dados de usuário", function(done){
            server
            .post("/api/v1/usuario")
            .send({"idUsuario": 1})
            .expect(200)
            .end(function(err,res){
                res.status.should.equal(200)
                res.body.success.should.equal(true)
                res.body.should.have.property("nome")
                res.body.should.have.property("email")
                res.body.should.have.property("cpf")
                if (err) return done(err)
                done()
            })
        })

        it("Tentativa inváliida de obtenção de dados de usuário", function(done){
            server
            .post("/api/v1/usuario")
            .send({"idUsuario": "eraPraSerID"})
            .expect(500)
            .end(function(err,res){
                res.status.should.equal(500)
                res.body.success.should.equal(false)
                res.body.should.not.have.property("nome")
                res.body.should.not.have.property("email")
                res.body.should.not.have.property("cpf")
                if (err) return done(err)
                done()
            })
        })

        it("Tentativa de obtenção de dados de usuário em URL incorreta", function(done){
            server
            .post("/api/v1/usuari")
            .send({"idUsuario": 1})
            .expect(404)
            .end(function(err,res){
                res.status.should.equal(404)
                if (err) return done(err)
                done()
            })
        })
    })
})