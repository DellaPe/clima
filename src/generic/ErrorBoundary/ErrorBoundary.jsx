import React from "react";

class ErrorBoundary extends React.Component {

    //En estos componentes si o si tiene que estar render
    render() {
        //Esto es el cuerpo de la funcion
        return <h1>ErrorBoundary</h1>
    }
}

export default ErrorBoundary;