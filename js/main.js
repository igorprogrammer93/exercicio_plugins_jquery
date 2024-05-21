$(document).ready(function(){
        $('#cep').mask('00000-000')

        $('#cpf').mask('000.000.000-00')

        $('#telefone').mask('(00) 00000-0000')

        $('form').validate({
            rules: {
                nome: {
                required: true
                },
                    email: {
                    required: true,
                },
                    telefone: {
                    required: true
            },
                    Cpf: {
                    required: true,
            },
                    EnderecoCompleto:{
                    required: true
            },
                    Cep:{
                    required: true
            },

        },
            messages: {
            nome: 'por favor, insira o seu nome',
            email:'por favor, insira seu email',
            telefone: 'por favor, ensira seu telefone',
            Cpf:'por favor, insira seu CPF',
            EnderecoCompleto:'por favor, ensira seu endereço',
            Cep:'por favor, ensira seu cep'
        },
            submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            console.log(camposIncorretos)
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
        
    })
    
    })
