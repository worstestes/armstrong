let THREE = require('three')


/**
 * Quick method for parsing ASCII-based .stl file. (needs more triage) 
 */
const parseStlFile = (str) => {
    if(typeof str !== 'string') {
      str = str.toString();
    }
  
    const vertices = [];
    const cells = [];
    const facetNormals = [];
    let name = null;

    let vectorArray = []
    let boundingBoxCalArray = []
    const aggregatedSurfaceAreas = []
  
    const lines = str.split('\n');
    let cell = [];
  
    for(let i = 0; i < lines.length; i++) {
  
      const parts = lines[i]
        .trim()
        .split(' ')
        .filter(part => part !== '');
  
      switch(parts[0]) {
        case 'solid':
          name = parts.slice(1).join(' ');
          break;
        case 'facet':
          const normal = parts.slice(2).map(Number);
          facetNormals.push(normal);
          break;
        case 'vertex':
          var position = parts.slice(1).map(Number);
          cell.push(vertices.length);
          const vector = new THREE.Vector3( position[0], position[1], position[2] )
          vectorArray.push(vector)
          boundingBoxCalArray.push(vector)
          vertices.push(position);
          break;
        case 'endfacet':
          const facetSurfaceArea = new THREE.Triangle( vectorArray[0], vectorArray[1], vectorArray[2] ).getArea()
          aggregatedSurfaceAreas.push(facetSurfaceArea)
          vectorArray = []
          cells.push(cell);
          cell = [];
        default:
        // skip
    }
    }

  const totalArea = aggregatedSurfaceAreas.reduce(function(sum, value) {
    return sum + value;
}, 0)

const minBoundingBox = new THREE.Box3().setFromPoints(boundingBoxCalArray)
const numberOfFacets = facetNormals.length
  
    return {
      name,
      facetNormals,
      vertices,
      cells,
      totalArea,
      numberOfFacets,
      minBoundingBox
    };
  }

  module.exports = parseStlFile;
