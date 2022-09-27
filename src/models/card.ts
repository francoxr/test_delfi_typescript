import {index, prop, getModelForClass } from '@typegoose/typegoose'

@index({ token: 1 },{ expireAfterSeconds: 15 })
class Card {

    @prop({
        validate: {
            validator: (v: string) => {
                return (v.toString().length >= 13 && v.toString().length <= 16);
            },
            message: 'value is betweem 13 and 16 characters long!'
      },
      required: true,
      type: () => Number})
    card_number: number;

    @prop({
        validate: {
            validator: (v: number) => {
                return (v.toString().length >= 3 && v.toString().length <= 4);
            },
            message: 'value is betweem 3 and 4 characters long!'
      },
      required: true,
      type: () => Number})
    cvv: number;
    
    @prop({validate: {
        validator: (v: string) => {
            return ['01','02','03','04','05','06','07','08','09','10','11','12'].includes(v);
        },
        message: 'value is betweem 1 and 12'
    },
    minlength: 1,
    maxlength: 2, 
    required: true,
    type: () => String})
    expiration_month: string;

    @prop({validate: {
        validator: (v: string) => {
            console.log(new Date().getFullYear()+1)
            let min = new Date().getFullYear();
            let max = min + 5;
            let years = [];
            for (let i = min; i < max; i++) {
                years.push(i.toString())
              }
            return years.includes(v);
        },
        message: 'value not is valid'
    },
    minlength: 4,
    maxlength: 4,
    required: true,
    type: () => String})
    expiration_year: string;

    @prop({validate: {
        validator: (v: string) => {
            let re = /^[a-z0-9._%+-]+@(gmail.com|hotmail.com|yahoo.es)$/;
            return re.test(v);
        },
        message: 'value not is valid'
    },
    minlength: 5,
    maxlength: 100,
    required: true,
    type: () => String})
    email: string;

    @prop({maxlength: 16, required: true, type: () => String})
    token: string;

}

const CardModel = getModelForClass(Card)
export default CardModel