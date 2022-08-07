import scrape from 'website-scraper'; // only as ESM, no CommonJS
import SaveToExistingDirectoryPlugin from 'website-scraper-existing-directory';

const options = {
  urls: ['https://web.archive.org/web/20181204191319/http://www.shinewayintl.com/'],
  directory: './shineway/',
  plugins: [ new SaveToExistingDirectoryPlugin() ],
  filenameGenerator: 'bySiteStructure',
  urlFilter: function(url) {
    if (url.match(/https:\/\/web\.archive\.org\/web\//)){
        //console.log(url);
        return true;
    }
    else{
        //console.log("skip...", url);
        return false;
    }    
  },
  recursive: true,
  maxRecursiveDepth: 2
};

// with async/await
const result = await scrape(options);

// with promise
scrape(options).then((result) => {});