function gerarlista(final = 10) {
    const lista = []
    for (let i = 1; i <=final; i++ ){
        lista.push(<span>{i},</span>)
        
    }
    return lista
}
export default function lista(){
    return (
        <>
            <div>
                {gerarlista(20)}
            </div>
            <div>
                {gerarlista(10)}
            </div>
        </>
    )
}
