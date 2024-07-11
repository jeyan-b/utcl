import { CommonConfigClass } from '../ConfigurationClasses/CommonConfigClass';

export class User2Config extends CommonConfigClass {
  user2Data: CommonConfigClass[] = [];

  static user2: any[] = [
    {
      type: 'text',
      placeholder: 'Enter your name',
      controlName: 'name',
      setValidations: { required: true, maxLength: null, minLength: null },
    },
    {
      type: 'number',
      placeholder: 'Enter your age',
      controlName: 'age',
      setValidations: { required: false, maxLength: null, minLength: null },
    },
    {
      type: 'text',
      placeholder: 'Enter your phone number',
      controlName: 'phoneNumber',
      setValidations: { required: false, maxLength: null, minLength: null },
    },
  ];

  constructor() {
    super();
    this.setData();
  }

  setData() {
    User2Config.user2.forEach((obj: any) => {
      this.user2Data.push(obj);
    });
    console.log('this.user2Data ', this.user2Data);
  }
}
