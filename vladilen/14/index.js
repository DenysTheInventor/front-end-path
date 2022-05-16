const developer = {
    // key: value
    name: 'Debis',
    job: 'Front-End developer',
    experience: 24,
    // jobAllinfo: {
    //     type: 'Front-End',
    //     framework: 'React'
    // }
}

// console.log(developer.jobAllinfo.framework)

// Опциональная цепочка ?.

// Через if без опциональной цепочки - длинно и некрасиво
// if (developer && developer.jobAllinfo && developer.jobAllinfo.framework) {
//     console.log('Our dev already knows this framework')
// } else {
//     console.log('Our dev does not know this framework') 
// }

// Через if с опциональной цепочки
if (developer?.jobAllinfo?.framework) {
    console.log('Our dev already knows this framework')
} else {
    console.log('Our dev does not know this framework') 
}