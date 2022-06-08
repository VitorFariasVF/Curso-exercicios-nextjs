export default function lista() {
    var tela = c(20)
    return(
        <>{tela}</>
        )    
}
function c(vm = 10){
    var array = []
    for (let cont = 0; cont <= vm; cont++) {
        array.push(<li>{cont}</li>)
        }
    return array
}