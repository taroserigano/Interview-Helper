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

map = {} 



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
for (let i = 0; i < entries.length; i++) {
    console.log(entries[i])
    for(const j in entries[i])
    console.log(entries[j][0])
}
















