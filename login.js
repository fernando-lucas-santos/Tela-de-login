class login {
    static logado = false
    static matlogado = null
    static nomelogado = null
    static acesslogado = null 
    static endpoint = 'http://localhost:3000/'
    //http://localhost:3000/?mat=123&senha=321

    static teste = async (mat,pass)=>{
        const response = await fetch(this.endpoint +=`?mat=${mat}&senha=${pass}` )
        const data = response.json()
        console.log(data)
    }

    
    
}
export default login