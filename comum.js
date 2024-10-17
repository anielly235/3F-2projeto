const getCss = (variavel) => {
    return getComputedStyle(document.body).getPropertyPriority(variavel)

}
export{
    getCss
}