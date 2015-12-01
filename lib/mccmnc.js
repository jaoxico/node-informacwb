var mccmnc = function (mcc, mnc) {
    var lista = [
        {
            mcc: 724,
            mnc: 0,
            rede: 'Nll Holdings, INC',
            operadora: 'Nextel'
        },
        {
            mcc: 724,
            mnc: 1,
            rede: 'CRT Cellular',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 2,
            rede: 'Telecom Italia Mobile',
            operadora: 'TIM'
        },
        {
            mcc: 724,
            mnc: 3,
            rede: 'Telecom Italia Mobile',
            operadora: 'TIM'
        },
        {
            mcc: 724,
            mnc: 4,
            rede: 'Telecom Italia Mobile',
            operadora: 'TIM'
        },
        {
            mcc: 724,
            mnc: 5,
            rede: 'Claro',
            operadora: 'Claro'
        },
        {
            mcc: 724,
            mnc: 6,
            rede: 'Vivo S.A',
            operadora: 'Vivo'
        },
        {
            mcc: 724,
            mnc: 7,
            rede: 'CTBC Telecom',
            operadora: 'CTBC Celular'
        },
        {
            mcc: 724,
            mnc: 8,
            rede: 'Telecom Italia Mobile',
            operadora: 'TIM'
        },
        {
            mcc: 724,
            mnc: 9,
            rede: 'Telepar Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 10,
            rede: 'Vivo S.A',
            operadora: 'Vivo'
        },
        {
            mcc: 724,
            mnc: 11,
            rede: 'Vivo S.A',
            operadora: 'Vivo'
        },
        {
            mcc: 724,
            mnc: 12,
            rede: 'Americel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 13,
            rede: 'Telesp Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 14,
            rede: 'Maxitel BA',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 15,
            rede: 'Sercomtel Celular',
            operadora: 'Sercomtel'
        },
        {
            mcc: 724,
            mnc: 16,
            rede: 'Brasil Telecom Celular S.A',
            operadora: 'Oi'
        },
        {
            mcc: 724,
            mnc: 17,
            rede: 'Ceterp Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 18,
            rede: 'Norte Brasil Tel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 19,
            rede: 'Telemig Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 21,
            rede: 'Telerj Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 23,
            rede: 'Vivo S.A',
            operadora: 'Oi'
        },
        {
            mcc: 724,
            mnc: 24,
            rede: 'Amazonia Celular S/A',
            operadora: 'Oi / Brasil Telecom'
        },
        {
            mcc: 724,
            mnc: 25,
            rede: 'Telebrasilia Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 27,
            rede: 'Telegoias Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 29,
            rede: 'Telemat Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 31,
            rede: 'TNL PCS',
            operadora: 'Oi'
        },
        {
            mcc: 724,
            mnc: 32,
            rede: 'CTBC Celular',
            operadora: 'CTBC Celular'
        },
        {
            mcc: 724,
            mnc: 33,
            rede: 'CTBC Celular',
            operadora: 'CTBC Celular'
        },
        {
            mcc: 724,
            mnc: 34,
            rede: 'CTBC Celular',
            operadora: 'CTBC Celular'
        },
        {
            mcc: 724,
            mnc: 37,
            rede: 'Unicel Do Brasil',
            operadora: 'Aeiou'
        },
        {
            mcc: 724,
            mnc: 39,
            rede: 'NII Holdings Inc',
            operadora: 'Nextel'
        },
        {
            mcc: 724,
            mnc: 41,
            rede: 'Telpe Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 43,
            rede: 'Telepisa Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 45,
            rede: 'Telpa Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 47,
            rede: 'Telern Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 48,
            rede: 'Teleceara Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 51,
            rede: 'Telma Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 53,
            rede: 'Telepara Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 55,
            rede: 'Teleamazon Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 57,
            rede: 'Teleamapa Cel',
            operadora: ''
        },
        {
            mcc: 724,
            mnc: 59,
            rede: 'Telaima Cel',
            operadora: ''
        }
    ];

    var r;
    for (var m = 0; m < lista.length; m++) {
        r = lista[m];
        if (r.mcc === mcc && r.mnc === mnc) break;
        r = null;
    }
    return r;
};

module.exports = mccmnc;
