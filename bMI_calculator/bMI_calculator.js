import { LightningElement, track } from 'lwc';

export default class BMI_calculator extends LightningElement {

    height;
    weight;
    @track bmi ;


    weightHandler(event){
        this.weight=parseFloat(event.target.value);
    }
    heightHandler(event)
    {
        this.height=parseFloat(event.target.value);
    }

    bmiCalculator()
    {
        this.bmi=this.weight/(this.height*this.height);
    }


    get bmivalue(){
        if(this.bmi===undefined)
        return "";

        return `your bmi is ${this.bmi}`;
    }




}