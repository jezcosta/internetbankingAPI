var supertest = require('supertest')
var should = require('should')
var server = supertest.agent('localhost:3000')

describe("Testes de conta", function(){

    describe("Testes obtenção de informações de conta", function(){

        it("Tentativa de obter conta do usuário válida", function(done){
            server
            .post("/api/v1/conta")
            .send({"idUsuario": 1})
            .expect(200) 
            .end(function(err,res){
                res.status.should.equal(200)
                res.body.success.should.equal(true)
                res.body.should.have.property('tipoConta')
                res.body.should.have.property('banco')
                res.body.should.have.property('agencia')
                res.body.should.have.property('conta')
                if (err) return done(err)
                done();
            })
        })

        it("Tentativa de obter conta do usuário inválida", function(done){
            server
            .post("/api/v1/conta")
            .send({"idUsuario": "eraPraSerID"})
            .expect(500) 
            .end(function(err,res){
                res.status.should.equal(500)
                res.body.success.should.equal(false)
                res.body.should.not.have.property('tipoConta')
                res.body.should.not.have.property('banco')
                res.body.should.not.have.property('agencia')
                res.body.should.not.have.property('conta')
                if (err) return done(err)
                done();
            })
        })

        it("Tentativa de obter conta do usuário com URL incoorreta", function(done){
            server
            .post("/api/v1/cont")
            .send({"idUsuario": 1})
            .expect(404) 
            .end(function(err,res){
                res.status.should.equal(404)
                if (err) return done(err)
                done();
            })
        })
    })

    describe("Testes de obtenção de favorecidos", function(){
        it("Tentativa válida de obtenção de dados de favorecidos", function(done){
            server
            .post("/api/v1/conta/favorecidos")
            .send({"idUsuario": 1,"conta": "12345678-9","agencia": "01955"})
            .expect(200) 
            .end(function(err,res){
                res.status.should.equal(200)
                res.body.success.should.equal(true)
                res.body.should.have.property("favorecidos")
                if (err) return done(err)
                done();
            })
        })

        it("Tentativa inválida de obtenção de dados de favorecidos", function(done){
            server
            .post("/api/v1/conta/favorecidos")
            .send({"idUsuario": 1})
            .expect(500) 
            .end(function(err,res){
                res.status.should.equal(500)
                res.body.success.should.equal(false)
                res.body.should.not.have.property("favorecidos")
                if (err) return done(err)
                done();
            })
        })

        it("Tentativa de obtenção de dados de favorecidos com URL incorreta", function(done){
            server
            .post("/api/v1/conta/favorecido")
            .send({"idUsuario": 1,"conta": "12345678-9","agencia": "01955"})
            .expect(404) 
            .end(function(err,res){
                res.status.should.equal(404)
                if (err) return done(err)
                done();
            })
        })
    })

    
})