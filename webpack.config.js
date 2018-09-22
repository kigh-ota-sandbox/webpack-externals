const externalSettings = [
  {
    name: 'string',
    externals: {
      hoge: 'fuga'
    }
  },
  {
    name: 'array',
    externals: {
      hoge: ['fuga', 'piyo', 'hogehoge']
    }
  },
  {
    name: 'object',
    externals: {
      hoge: {
        root: ['fuga', 'piyo']
      }
    }
  },
  {
    name: 'function-commonjs',
    externals: [
      function(context, request, callback) {
        console.log('LOG ',context, request);
        if (request === 'hoge') {
          return callback(null, 'commonjs ' + request);
        }
        callback();
      }
    ]
  },
  {
    name: 'regex',
    externals: /^hoge$/
  }
]

module.exports = externalSettings.map(s => {
  return {
    target: 'node',
    mode: 'development',
    devtool: 'source-map',
    entry: './main.js',
    output: {
      filename: s.name + '.js'
    },
    externals: s.externals
  };
});

