/* eslint-disable default-case */
import * as templates from './lib.template.email';

const getTemplate = (type, data) => {
  switch (type) {
  case 'change_hospital': return templates.signUpEmail(data);
  }
};

export default getTemplate;
