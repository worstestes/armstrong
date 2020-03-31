## Armstrong

Basic STL file interface and utility built with Typescript + React


## Design decisions

I decided to create a GUI interface in order to learn more about manipulating and displaying basic model files. With the time constraints given, I used various (but a minimal amount of) libraries to help with modal creation, color picking and extra metrics generation. By creating a full fledged GUI + express api, I could work with models on the front end as well as work with basic manipulation of the .stl files. This gave me a lot of time to research and learn about the files used in 3D modeling itself, as well as challenging me to think about 3D space.


### Potential improvements

Due to the time constraints of the project as well as my own workload, there are a few improvements that need to be made:

* Generation of metrics data from user uploaded .stl files
* Support for reading and converting data from binary-based .stl files, as well as providing support for OBJ files.
* A method to review potential calculation errors, I don't have a way (currently) to check my work and ensure the provided calculations are correct.
* Limitations of the model viewer provide an awkward camera angle as well as shading issues. Using a package that utilizes three.js rather than creating my own limits me from having more customization in that regard.

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm install
```

### `Running`

```
npm run start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Special thanks

* Jen Saxena - Creative guide on basic CSS animated background used in this project
* https://www.thingiverse.com/ - great community. Used for STL files stored in this project.

## License
[MIT](https://choosealicense.com/licenses/mit/)


