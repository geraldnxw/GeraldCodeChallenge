// your code here:

// Create an instance of the adapter
var adapter = new JSDataHttp.HttpAdapter();

// Configuring the adapter
import { HttpAdapter } from 'js-data-http';

const adapter = new HttpAdapter({
  // Instead of using relative urls, force absolute
  // urls using this basePath
  basePath: 'https://api.myapp.com'
});

// Registering the adapter
// It is recommended that you use a Container or DataStore manage your Mappers
import { Mapper } from 'js-data';
import { HttpAdapter } from 'js-data-http';

// Create a mapper
const userService = new Mapper({
  name: 'user',
  endpoint: 'https://static.ngnrs.io/test/prices'
});

// Create an adapter
const adapter = new HttpAdapter();

// Register the adapter with the Mapper and make
// it the default adapter. It is recommended that
// you use DataStore or Container to organize
// your Mappers.
userService.registerAdapter('http', adapter, { 'default': true });

// The http adapter is now usable by userService

// Customize adaptor behaviour
import { MongoDBAdapter } from 'js-data-mongodb';

const adapter = new MongoDBAdapter({
  beforeCreate: function (mapper, props, opts) {
    // preserve default behavior
    MongoDBAdapter.prototype.beforeCreate.call(this, mapper, props, opts);
    
    // If you return a promise then MongoDBAdapter#create will
    // wait for the promise to resolve before continuing
    return new Promise((resolve, reject) => {
        // do something asynchronous

        resolve = Datasource.getPrices();
    });
  }
});