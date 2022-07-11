function getAdmins(map){
    let admins = [];
    for ([key,value] of map) {
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins
}

const usuarios = new Map();

usuarios.set('Luiz', 'User');
usuarios.set('Stephany', 'User');
usuarios.set('Lucas', 'Admin');
usuarios.set('Ana', 'Admin');

console.log(getAdmins(usuarios));
