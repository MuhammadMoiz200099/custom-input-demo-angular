# CustomInputDemoAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## TO RUN THE PROJECT, FOLLOW THE INSTRUCTIONS

### Setup the Stencil project

First Clone the Repository [custom-input-demo](https://github.com/MuhammadMoiz200099/custom-input-demo) and run the command:
```bash
  npm install
```

Once the node_modules installed successfully hit the command:
```bash
  npm run build
```
then it should create your project build

Once the build is created successfully hit the command:
```bash
  npm link
```
then it should link/add the repository to your local node_modeules globally
It should show the message something like:


### Now, Setup the angular project 

Once you successfully link your stencil project to your local node_modeules globally.
Now, Clone this angular project [custom-input-demo-angular](https://github.com/MuhammadMoiz200099/custom-input-demo-angular) and run the command:
```bash
  npm install
```

After the node_modules installed successfully run the command:
```bash
  npm link custom-input-demo
```
this going to link your stencil web component to your angular project.

Once everything runs successfully, you're ready to serve your project, using a simple command
```bash
  npm start
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Email me on muhmmadmoiz0087@gmail.com
