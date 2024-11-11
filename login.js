class Login {
    static logado = false
    static matlogado = null
    static nomelogado = null
    static acesslogado = null 
    static endpoint = 'http://localhost:3000/'
    //http://localhost:3000/?mat=fernando@example.com&senha=321

    static login = async (mat,pass)=>{
        console.log(mat +' ' + pass)
        const response = await fetch(`http://localhost:3000/?mat=${mat}&senha=${pass}`)
        const data = response.json()
        data.
        console.log(data)
        console.log(data.result != null)
        if(data =! null){
            window.location.href = '/usuarioLogado.html'

        }else{
            alert('Verifique seu usuario e senha')
         }
    }
    static verificaLogin = ()=>{
        const matricula = document.querySelector('.email').value
        const senha = document.querySelector('.senha').value
        this.login(matricula,senha)
    }
    static login_Ok =()=>{
        const btn_login = document.querySelector('.btn-login')  
        btn_login.addEventListener('click',(evt)=>{
            evt.preventDefault()
            this.verificaLogin()
            
            
        })

        
    }

    
    
}
export default Login
/*

const http = require('http')
const url = require('url')

http.createServer((req,res)=>{
    res.setHeader( 'Access-Control-Allow-Origin', '*')
    res.writeHead(200, {'Content-Type' : 'text/html'})

    let parametro = url.parse(req.url, true).query
    let mat = parametro.mat
    let pass = parametro.senha

    let dados = null

    if(mat == 'fernando@example.com' && pass == '321'){
        dados ={
            nome: 'Fernando',
            acesso: 10
        }
    }
    res.end(JSON.stringify(dados))

}).listen(3000,console.log('Servidor Rodando...'))
*/