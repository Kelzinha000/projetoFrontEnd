
//propriedades ou props 
const Titulo = (props) =>{
    return(
        <h1 style={{color:props.cor}}>{props.texto}</h1>
    )
}

const Subtitulo = ({texto, cor}) => {
    return(
        <p style={{color:cor}}>{texto}</p>
    )
}
const Cabecalho = (props) => {
    return(
        <h1>{props.children}</h1>
    )
}

const App = () => {
    return(
        <>
        <Cabecalho>
            <p>Esse é o meu Cabecalho</p>
        </Cabecalho>
        <Titulo cor="blue" texto="Meu título" />
        <Subtitulo cor="purple" texto="Esse é subtitulo"/>
        <Titulo texto="Esse é meu outro título"/>
        <Titulo texto="Esse é meu terceiro título"/>
        </>

    )
}

export default App