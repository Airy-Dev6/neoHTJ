/* Creamos el archivo api.js, el cual contiene un objeto con todas las funciones que querramos exportar. Usamos export default para exportar todo el contenido del objeto*/

export default {

  async getAllSchools(){
    /*creamos una variable para almacenar la respuesta de la promesa, usamos await para esperar a que la promesa se resuelva*/
    const response = await fetch( `https://neohtj-default-rtdb.firebaseio.com/schools/.json` )

    /*regresamos la respuesta de la petición, usando await para esperar que resuelva el método .json()*/
    return await response.json()
  },
  
  async getSingleSchool( postId ){
    const response = await fetch( `https://neohtj-default-rtdb.firebaseio.com/schools/${postId}.json` )

    return await response.json()
},


  login( userObject ){
      console.log(userObject)
      let { userName, password } = userObject
      let response;

       userName === "airy@gmail.com" && password === "123" 
          ? response = { status: "ok", token:123456789, role:"admin"}
          : response = { status: "error", errorCode: 300, errorMsg : "Usuario o contraseña incorrectos" }

      return response
  }
}