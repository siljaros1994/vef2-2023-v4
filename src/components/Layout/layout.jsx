import React from 'react';
import Departments from '../departments/Departments';
import Courses from '../courses/Courses';

export function Layout({ department }) {

  return (
    <>
      <Departments titleName="Deildir" />
      <Courses titleName="Námskeið" title={department.title} description={department.description} />
    </>
  )
};

export default Layout;
