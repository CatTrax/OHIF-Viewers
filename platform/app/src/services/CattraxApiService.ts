import type { Types } from '@ohif/core';
import Cookies from 'js-cookie';

export default class CattraxApiService {
  static REGISTRATION = {
    name: 'myApiService',
    create: ({ configuration = {} }) => {
      return new CattraxApiService(configuration);
    },
  };

  configuration: any;
  host: string;

  constructor(configuration: any) {
    this.configuration = configuration;
    if (window.location.origin.indexOf('localhost') !== -1) {
      this.host = 'https://dev.cattrax.co.nz/cattrax-rest-api';
    } else {
      this.host = 'cattrax-rest-api';
    }
  }

  async fetchPatient(patientId: number, practiceId: number): Promise<any> {
    const response = await fetch(`${this.host}/api/patients/${patientId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-practice-id': `${practiceId}`,
        authorization: `Bearer ${Cookies.get('cattrax_bearer_token')}`,
      },
    });

    return await response.json();
  }
}
