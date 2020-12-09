let showName = ['Ann', 'Ivan', 'Olga']
name = showName.filter((item)=>{
    return item.length < 4
})
console.log(name)