## Armstrong

Basic STL file interface and utility built with Typescript + React. See local STL files in the model viewer, or upload your own. Metrics data is generated for local files, with an update coming soon for metrics generation for uploaded files.


## Design decisions

I decided to create a GUI interface in order to learn more about manipulating and displaying basic model files. With the time constraints given, I used various (but a minimal amount of) libraries to help with modal creation, color picking and extra metrics generation. By creating a full fledged GUI + express api, I could work with models on the front end as well as work with basic manipulation of the .stl files. This gave me a lot of time to research and learn about the files used in 3D modeling itself, as well as challenging me to think about 3D space.

The name "armstrong" is just a funny theme I took from my initial model "moon.stl" file. I ended up creating a fun space theme and added more space-based stl model files.


### Potential improvements

Due to the time constraints of the project as well as my own workload, there are a few improvements that need to be made:

* Generation of metrics data from user uploaded .stl files
* Support for reading and converting data from binary-based .stl files, as well as providing support for OBJ files.
* A method to review potential calculation errors, I don't have a way (currently) to check my work and ensure the provided calculations are correct.
* Limitations of the model viewer provide an awkward camera angle as well as shading issues. Using a package that utilizes three.js rather than creating my own limits me from having more customization in that regard.
* There is more cleanup and file size optimization to be done. For example, due to the lack of support of binary stl files I've opted to use the ASCII equivalent, which is bulkier and takes more time to load. 

### Installing

```
npm install
```

### Running

```
npm run start
```

Note: Due to more work needed on the optimization front, give the front-end 10-20 seconds to load the provided models on the left side menu.

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Special thanks

* Jen Saxena - Creative guide on basic CSS animated background used in this project
* https://www.thingiverse.com/ - great community. Used for STL files stored in this project.

## License
[MIT](https://choosealicense.com/licenses/mit/)


