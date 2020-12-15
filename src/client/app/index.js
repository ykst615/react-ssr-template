import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from '../router/index';
import routeList from '../router/route-config';
import matchRoute from '../../share/match-route';

function clientRender() {
  //初始数据
  let initialData = {};
  try {
    initialData = JSON.parse(document.getElementById('ssrTextInitData').value);
  } catch (error) {
    console.log('initialData 初始化失败');
  }

  //查找路由
  let matchResult = matchRoute(document.location.pathname, routeList);
  let { targetRoute } = matchResult;

  if (targetRoute) {
    //设置组件初始化数据
    targetRoute.initialData = initialData;
  }

  //渲染 index 组件 到页面
  ReactDom.hydrate(
    <BrowserRouter>
      <App routeList={routeList} />
    </BrowserRouter>,
    document.getElementById('root'),
  );
}

clientRender();
