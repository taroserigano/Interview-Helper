const toyCompany = {
    redTeam: {
        production: {
            'redProdManager': ['Dan', "Taro", "Jane"],
        },
        sales: {
            'redSalesManager': ['Linda', "Jeff","Ken"],
        }
    },
    blueTeam: {
        production: {
            'blueProdManager': ['Stacy', "Stacy"],
        }
    }
};

for(let team of Object.values(toyCompany)){ 
    for(let dpt of Object.values(team)){
        // console.log(dpt)
        for(let mgr of Object.values(dpt)){
            // console.log(mgr)
            for(let name of Object.values(mgr)){
                console.log(name)
            }
        }
        
    }
}


const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]

Expected output: 2

map = {} 

for (const teams in toyCompany){
    const team = toyCompany[teams]
    for (const titles in team){
        const people = team[titles]
        for ( const person in people){
            const names = people[person]
            for(let name of names){
                console.log(name)
            }
        }
        
    }
}


for (const teams in toyCompany){
    const team = toyCompany[teams]
    // console.log(team)
    for(let mgr in team){ 
        // console.log(mgr)
        const mgrs = team[mgr]
        for(mgr in mgrs){
            // console.log(mgr)
            let p = mgrs[mgr]
            for (let i of p){
                console.log(i)
                map[i] = map[i] +1 || 1 
            }
            
            
            
            
        }

    }
    console.log(map)
}




ENTRIES-------
  
const car = {
    make: "Honda",
    model: "Civic",
    year: 2022
}



const entries = Object.entries(car)

// ["make", "Honda"], ["model", "Civic"], ["year", 2022]
for (let i in entries) {
    console.log(entries[i])
    for(const j in entries[i])
    console.log(entries[j][0])
}
















