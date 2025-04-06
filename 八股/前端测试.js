const a = '\\\\\\'.replace(new RegExp('\\\\\\\\', 'gi'), '/')
console.log(a)
