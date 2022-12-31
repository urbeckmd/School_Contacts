import React from 'react';
import Header from './Header';
import SchoolContactListBody from './SchoolContactListBody';

function SchoolPage() {
  return (
    <>
        <Header homePage={false} />
        <SchoolContactListBody />
    </>
  )
}

export default SchoolPage