const ob = [
    {
        "id": 2,
        "first_name": "Jasmine",
        "last_name": "Henri",
        "phone": "14505582234",
        "email": "hello@hello.com",
        "company": "Hello World",
        "project": "CRM Project",
        "notes": "Lorem ipsum dolor sit amet, duo ne sumo cotidieque. Te sea modo sale numquam, eu sed quando scaevola persecuti, ius quodsi reprehendunt et. Quodsi honestatis in duo. Eam oblique lobortis expetenda te, soleat virtute no per.Lorem ipsum dolor sit amet, duo ne sumo cotidieque. Te sea modo sale numquam, eu sed quando scaevola persecuti, ius quodsi reprehendunt et. Quodsi honestatis in duo. Eam oblique lobortis expetenda te, soleat virtute no per."
    }  
]

const d =ob.concat({
    "id": 5,
    "first_name": "Julie",
    "last_name": "Mckenney",
    "phone": "555-555-2342",
    "email": "hello@hello.com",
    "company": "Red Company",
    "project": "CRM Project",
    "notes": "Lorem ipsum dolor sit amet, duo ne sumo cotidieque."
})

console.log(d == ob)

