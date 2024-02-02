## Start with Typescript

#step1:install ts globally on your machine
npm install -g typescript

#step2: Initialize an empty Node.js project 
mkdir Node-app
cd Node-app
npm init -y
npx tsc --init or tsc --init

#step3: Create a .ts file

#step4: Compile the .ts file to .js file
tsc--b



## tsconfig.json
The tsconfig.json file in TypeScript is a configuration file that provides settings for the TypeScript compiler (tsc). It allows you to customize various aspects of the compilation process and define how your TypeScript code should be transpiled into JavaScript. 

Some common examples are :
1 target : tell us about the on which es version we want to convert our ts code to js code.
2.rootDir : this is used to place all the input file i.e, .ts file. all .ts file placed in a src folder  rootdir:./src
3.outDir : this tell about the output directory where the tsc will place the generated .js file . All the .js file will be placed in a dist/build folder. outdir:./dist