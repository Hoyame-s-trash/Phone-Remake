export default {
    bossGrade:14,
    playerGrade:14,
    grades:{
        14:{id:14,label:"maître",permissions:{
            "recuit-player":{id:4,action:"recuit-player",label:"recruter joueurs",entreprise:null},
            "dismiss-player":{id:5,action:"dismiss-player",label:"virer joeurs",entreprise:null},
            "sell-medic":{id:6,action:"sell-medic",label:"vendre médicament",entreprise:2},
            "sell-test":{id:7,action:"sell-test",label:"test perm not have",entreprise:2}}
        },
        23:{id:23,label:"homme de main",permissions:{
            "recuit-player":{id:4,action:"recuit-player",label:"recruter joueurs",entreprise:null},
            "dismiss-player":{id:5,action:"dismiss-player",label:"virer joeurs",entreprise:null},
            "sell-medic":{id:6,action:"sell-medic",label:"vendre médicament",entreprise:2}}
        },
        32:{id:32,label:"esclave",permissions:{
            "recuit-player":{id:4,action:"recuit-player",label:"recruter joueurs",entreprise:null},
            "dismiss-player":{id:5,action:"dismiss-player",label:"virer joeurs",entreprise:null},
            "sell-medic":{id:6,action:"sell-medic",label:"vendre médicament",entreprise:2}},
        },
        44:{id:44,label:"ptite fiotte",permissions:{"recuit-player":{id:4,action:"recuit-player",label:"recruter joueurs",entreprise:null}}
        },
        55:{id:55,label:"petite frappe",permissions:{
            "recuit-player":{id:4,action:"recuit-player",label:"recruter joueurs",entreprise:null},
            "dismiss-player":{id:5,action:"dismiss-player",label:"virer joeurs",entreprise:null}},
        },
        77:{id:77,label:"feinéant",permissions:{}},
    },
    employers:[
        {id:1, player_identity:'{"nom":"Sancho","age":"18","prenom":"Alvarès"}', gang_grade:14, salary:5000},
        {id:2, player_identity:'{"nom":"test","age":"18","prenom":"test2"}', gang_grade:44, salary:5000}
    ],
    gain:0,
    spent:0,
    money:0,
}