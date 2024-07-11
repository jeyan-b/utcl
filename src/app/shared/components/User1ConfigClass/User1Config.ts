import { CommonConfigClass } from '../ConfigurationClasses/CommonConfigClass';

export class User1Config extends CommonConfigClass {
  user1Data: CommonConfigClass[] = [];

  static user1: any[] = [
    {
      type: 'text',
      placeholder: 'Enter your name',
      controlName: 'name',
      setValidations: { required: true, maxLength: 10, minLength: 5 },
    },
    {
      type: 'number',
      placeholder: 'Enter your age',
      controlName: 'age',
      setValidations: { required: true, maxLength: null, minLength: null },
    },
    {
      type: 'text',
      placeholder: 'Enter your phone number',
      controlName: 'phoneNumber',
      setValidations: { required: false, maxLength: null, minLength: null },
    },
    {
      type: 'select',
      placeholder: 'Enter your favorite food',
      controlName: 'favFood',
      setValidations: { required: false, maxLength: null, minLength: null },
    },
  ];

  constructor(){
    super();
    this.setData();
  }

  setData() {
    User1Config.user1.forEach((obj: any, index: number) => {
      this.user1Data.push(obj);
    });
    console.log('this.user1Data.configData ', this.user1Data);
  }
}
