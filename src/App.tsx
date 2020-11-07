import React, { FC } from 'react';
import { Route } from 'react-router';
import IndexBody from './components/page/index/body';
import EngineerBody from './components/page/engineer/body';
import VideoGameBody from './components/page/videogame/body'
import PlasticmodelBody from './components/page/plasticmodel/body'
import NovelsBody from './components/page/novels/body'
import Mini4wd from './components/page/mini4wd/body'
import Electronicwork from './components/page/electronicwork/body'
import TechBook from './components/page/techbook/body'

const App: FC = () => {
  return (
    <>
      <Route exact path="/" component={IndexBody} />
      <Route path="/index.html" component={IndexBody} />
      <Route path="/engineer.html" component={EngineerBody} />
      <Route path="/videogame.html" component={VideoGameBody} />
      <Route path="/plasticmodel.html" component={PlasticmodelBody} />
      <Route path="/novels.html" component={NovelsBody} />
      <Route path="/mini4wd.html" component={Mini4wd} />
      <Route path="/electronicwork.html" component={Electronicwork} />
      <Route path="/techbook.html" component={TechBook} />
    </>
  );
};

export default App;
