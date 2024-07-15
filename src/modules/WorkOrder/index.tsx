import React, {lazy} from 'react';
import Routes from './routes';
import languages from './definitions/translations/en.json';
import {BrowserRouter, Router} from 'react-router-dom';
import i18n from 'i18n';
// import CompaniesContext from './context/companiesContext';

i18n.addResourceBundle('en', 'translation', languages, true);

function WorkOrder() {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default WorkOrder;
