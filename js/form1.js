Vue.use(VeeValidate);

const dictionary = {
    pt: {
        custom: {
            nome: {
                required: 'Por favor, insira seu nome'
            },
            email: {
                required: 'Por favor, insira seu e-mail',
                email: 'O e-mail deve ser válido'
            },
            mensagem: {
                required: 'Por favor, insira sua mensagem'
            }
        }
    }
};

VeeValidate.Validator.updateDictionary(dictionary);
VeeValidate.Validator.setLocale('pt');

new Vue({
    el: '#form',
    delimiters: ['${', '}'],
    methods: {
      validateBeforeSubmit: function () {
          this.$validator.validateAll();
          if (!this.errors.any()) {
            this.$refs.contato.submit();
          }
        }
    }
});