const local = {
  mapbox: {
    accessToken: "pk.eyJ1IjoiZ2VuZ2hpc2hhY2siLCJhIjoiZ2x6WjZhbyJ9.P8at90QQiy0C8W_mc21w6Q",
    style: "mapbox://styles/genghishack/cjft3tbmb7qyr2sqclts2rz62", // bright
    username: 'genghishack',
    keys: {
      bright: 'cjft3tbmb7qyr2sqclts2rz62'
    }
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://te63jdj17g.execute-api.us-west-2.amazonaws.com/dev'
  },
  apiExpress: {
    REGION: 'us-west-2',
    URL: 'http://52.24.236.138:3000'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_wvUVsyZMh',
    APP_CLIENT_ID: '6ur84l637dvmtvis5gbjnidppa',
    IDENTITY_POOL_ID: 'us-west-2:b966e418-e1df-40ed-af10-847b2ec954c1'
  }
};

const dev = {
  mapbox: {
    accessToken: "pk.eyJ1IjoiZ2VuZ2hpc2hhY2siLCJhIjoiZ2x6WjZhbyJ9.P8at90QQiy0C8W_mc21w6Q",
    style: "mapbox://styles/genghishack/cjft3tbmb7qyr2sqclts2rz62", // bright
    username: 'genghishack',
    keys: {
      bright: 'cjft3tbmb7qyr2sqclts2rz62'
    }
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://te63jdj17g.execute-api.us-west-2.amazonaws.com/dev'
  },
  apiExpress: {
    REGION: 'us-west-2',
    URL: 'http://52.24.236.138:3000'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_wvUVsyZMh',
    APP_CLIENT_ID: '6ur84l637dvmtvis5gbjnidppa',
    IDENTITY_POOL_ID: 'us-west-2:b966e418-e1df-40ed-af10-847b2ec954c1'
  }
};

const test = {
  mapbox: {
    accessToken: "pk.eyJ1IjoiZ2VuZ2hpc2hhY2siLCJhIjoiZ2x6WjZhbyJ9.P8at90QQiy0C8W_mc21w6Q",
    style: "mapbox://styles/genghishack/cjft3tbmb7qyr2sqclts2rz62", // bright
    username: 'genghishack',
    keys: {
      bright: 'cjft3tbmb7qyr2sqclts2rz62'
    }
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://te63jdj17g.execute-api.us-west-2.amazonaws.com/dev'
  },
  apiExpress: {
    REGION: 'us-west-2',
    URL: 'http://52.24.236.138:3000'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_wvUVsyZMh',
    APP_CLIENT_ID: '6ur84l637dvmtvis5gbjnidppa',
    IDENTITY_POOL_ID: 'us-west-2:b966e418-e1df-40ed-af10-847b2ec954c1'
  }
};

const prod = {
  mapbox: {
    accessToken: "pk.eyJ1IjoiZ2VuZ2hpc2hhY2siLCJhIjoiZ2x6WjZhbyJ9.P8at90QQiy0C8W_mc21w6Q",
    style: "mapbox://styles/genghishack/cjft3tbmb7qyr2sqclts2rz62", // bright
    username: 'genghishack',
    keys: {
      bright: 'cjft3tbmb7qyr2sqclts2rz62'
    }
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://te63jdj17g.execute-api.us-west-2.amazonaws.com/dev'
  },
  apiExpress: {
    REGION: 'us-west-2',
    URL: 'http://52.24.236.138:3000'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_wvUVsyZMh',
    APP_CLIENT_ID: '6ur84l637dvmtvis5gbjnidppa',
    IDENTITY_POOL_ID: 'us-west-2:b966e418-e1df-40ed-af10-847b2ec954c1'
  }
};

let config;

switch (process.env.REACT_APP_STAGE) {
  case 'prod':
    config = prod;
    break;
  case 'test':
    config = test;
    break;
  case 'dev':
    config = dev;
    break;
  default:
    config = local;
    break;
}

const configExport =  {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

export default configExport;
