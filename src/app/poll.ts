export class Poll  {
    title: String = 'Click here to edit the poll title';
    gif:String = 'Set Gif Url';
    message:String = 'Thank You';
    votes: Number = 0;
    options:[
      {
        label:'click here to write the option';
        hidden: false;
        value: 0;
      }
    ]
};
