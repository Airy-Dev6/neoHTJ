/* Creamos el archivo api.js, el cual contiene un objeto con todas las funciones que querramos exportar. Usamos export default para exportar todo el contenido del objeto*/

export default {

  login( userObject ){
      console.log(userObject)
      let { userName, password } = userObject

      //!userObject && {status:"error", errorMsg:"debes proporcionar tus datos"}

      let response;

       userName === "airy@gmail.com" && password === "123" 
          ? response = { status: "ok", token:123456789, role:"admin"}
          : response = { status: "error", errorCode: 300, errorMsg : "Usuario o contraseña incorrectos" }

      return response
  }
}