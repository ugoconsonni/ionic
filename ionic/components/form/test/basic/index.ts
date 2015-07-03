import {Component, Directive, View} from 'angular2/angular2';

import {FormBuilder, Validators, formDirectives, ControlGroup} from 'angular2/forms';
//import {Switch, Form, List, Label, Item, Input, Content} from 'ionic/ionic';


@Component({ selector: 'ion-app' })
@View({
  templateUrl: 'main.html'
})
class IonicApp {
  constructor() {
    var fb = new FormBuilder();
    this.form = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      description: ['', Validators.required],
      note : ['', Validators.required]
    });
  }

  deleteClicked() {
    alert('Deleting');
  }
}

export function main(ionicBootstrap) {
  ionicBootstrap(IonicApp);
}
