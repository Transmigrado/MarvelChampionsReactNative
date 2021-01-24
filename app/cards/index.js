export const cards = [
    {
        type: 'upgrade',
        name: 'Casco de la Capitana Marvel',
        cost: 2,
        objetive: ['hero'],
        resource: ['physical'],
        actions: [
            {
                def: {
                    type:'plus',
                    value: 1
                }
            },
            {
                def: {
                    condition:{
                        feature: 'aerial'
                    },
                    type:'plus',
                    value: 1
                }
            }
        ]
    },
    {
        
        type: 'support',
        name: 'Base Orbital de Alpha Fligth',
        cost:1,
        conditions:[
            {
                type:'exhaust'
            },
            {
                type:'discard',
                amount: 1
            }
        ],
        actions: [
            {
                draw: {
                    value: 1
                }
            },
            {
                draw: {
                    condition:{
                        mode: 'alterego'
                    },
                    value: 1
                }
            },
        ]
    }
]