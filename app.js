let consoles = [
    {
        ps2: {
            storage: '100mb',
            input: 'controller',
            disc: 'disc',
            wifi: 'no wifi'
        },

        ps3: {
            storage: '100gb',
            input: 'controller',
            disc: 'yes',
            wifi: 'yes'
        },

        ps4: {
            storage: '500gb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        },

        ps5: {
            storage: '1tb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        }

    },

    {
        xbox360: {
            storage: '10gb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        },

        xbox1: {
            storage: '500gb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        },

        xbox1s: {
            storage: '1tb',
            input: 'controller',
            disc: 'disc',
            wifi: 'wifi'
        }

    },

    {
        ds2: {
            storage: '100mb',
            input: 'buttons',
            disc: 'no disc',
            wifi: 'no wifi'
        },

        ds3: {
            storage: '1gb',
            input: 'buttons',
            disc: 'no disc',
            wifi: 'no wifi'
        },

        switch: {
            storage: '100gb',
            input: 'buttons',
            disc: 'no disc',
            wifi: 'wifi'
        }

    },

    {
        highend: {
            storage: '1tb',
            input: 'keyboard and mouse',
            disc: 'disc',
            wifi: 'wifi'
        },

        lowend: {
            storage: '100gb',
            input: 'keyboard and mouse',
            disc: 'disc',
            wifi: 'wifi'
        }

    }

]

const dropdown = document.getElementById('drop')

let dis = 0

function check(f){
    
    if(f.checked == true){
        dis++
        
        const map = consoles.filter((e, i) => {
            if(f.value == i){
                return e
            }
        })
        dropdown.removeAttribute('disabled')
        
        const keys = Object.keys(map[0])
        
        for(let j = 0 ; j<keys.length ; j++){
           let opt =document.createElement('option')
           opt.value = keys[j]
           opt.innerHTML = keys[j]
        
           dropdown.appendChild(opt)
        }

    }

else{
    dis--

//     let removeMap = consoles.filter((e, i) => {
//         if(f.value == i){
//             return e
//         }
//     })

//     const keys = Object.keys(removeMap[0])
        
//     for(let j = 0 ; j<keys.length ; j++){
//        let opt =document.createElement('option')
//        opt.value = keys[j]
//        opt.innerHTML = keys[j]
       
//  console.log(dropdown.children[j+1])
//     // dropdown.remove(opt[j])
       
//         // for(let k = 0; k<dropdown.children.length; k++){
            
//         //     if(opt == dropdown.children[k]){
//         //         console.log(dropdown.children[k])
//         //     }
            
           
//         // }
       

//     }

}


if(dis == 0){
    dropdown.setAttribute('disabled', 'disabled')
}
}

    


    let respan = document.getElementsByClassName('result')




//     // result



function result(){
    Object.values([dropdown.value])

   for(let i = 0; i<result.length; i++){
        respan[i].innerHTML = result[i]
    }
}



