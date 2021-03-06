import { Routes, RouterModule }   from '@angular/router';

import {DemoComponent} from './demo.component';

import {TreeViewDemo} from '../components/tree-view/tree-view-demo';
import {ContactList} from '../components/contact-list/contact-list';
import {Directory} from '../components/tree-view/directory';
import {Spreadsheet} from '../components/spreadsheet/spreadsheet';
import {Algorithms} from '../components/algorithms/algorithms';
import {InputControls} from '../components/input-controls/input-controls';
import {Graph} from '../components/algorithms/graph/graph';
import {PubSub} from '../components/pub-sub/pub-sub';
import {TextEditor} from '../components/text-editor/text-editor';
import {SurveyDemo} from '../components/survey/survey-demo';
import {LogDemo} from '../components/log-tail/log-demo';
import {InputOutputDemo} from '../components/input-output/input-output-demo';
import {RxJsStreams} from '../components/rxjs-streams/rxjs-streams';
import {RxJsBuffering} from '../components/rxjs-buffering/rxjs-buffering';
import {CountryDemo} from '../components/lazy-loaded-tree-view/country-demo';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo/spreadsheet',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      { path: 'spreadsheet', component: Spreadsheet},
      { path: 'algorithms', component:Algorithms},
      { path: 'graph', component:Graph},
      { path: 'pub-sub', component:PubSub},
      { path: 'text-editor', component:TextEditor},
      { path: 'treeview', component:TreeViewDemo},
      { path: 'input', component:InputControls},
      { path: 'contact', component:ContactList},
      { path: 'survey', component:SurveyDemo},
      { path: 'redux', component:LogDemo},
      { path: 'iodemo', component:InputOutputDemo},
      { path: 'rxjs', component:RxJsStreams},
      { path: 'buffering', component:RxJsBuffering},
      { path: 'countries', component:CountryDemo}
    ]
  }
];

export const routing = RouterModule.forRoot(routes);
