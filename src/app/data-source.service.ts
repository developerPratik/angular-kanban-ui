import { Injectable } from '@angular/core';
import { INgxDnd, ENgxContainer, ENgxOrientation, INgxMail } from 'src/utils/app.interfaces';
import { randomBackground } from 'src/utils/ngx.utils';


export interface ISwimlaneDataItem {
  user: string,
  avatar: string,
  mailAddress: string
}

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor() { }

  _randomStrings = (length: number): string => {

    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

  };

  generator(numOfGroups: number = 10, numOfItemPerGroup: number): INgxDnd {

    let data: INgxDnd = {
      mailGroups: [],
      props: {
        orientation: ENgxOrientation.horizontal,
        className: 'container'
      },
      type: ENgxContainer.container
    };

    for (let i = 0; i < numOfGroups; i++) {
      let numOfMailsInGroups: number = Math.ceil(Math.random() * (500 - numOfItemPerGroup) + numOfItemPerGroup);

      let mails: INgxMail[] = [];

      for (let j = 0; j < numOfMailsInGroups; j++) {
        mails.push({
          avatar: 'random_avatar',
          mailAddress: 'random@mail.com',
          name: 'random_bahadur',
          props: {
            className: 'card',
            style: {
              background: randomBackground()
            }
          }
        })
      }

      data.mailGroups.push(
        {
          id: 'Machines' + i.toString(),
          type: ENgxContainer.container,
          name: 'Machines',
          props: {
            orientation: ENgxOrientation.vertical,
            className: 'card-container'
          },
          mails
        }
      )
    }

    return data;

  }
}
