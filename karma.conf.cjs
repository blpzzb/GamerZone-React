const fs = require('fs')
const path = require('path')
const babel = require('@babel/core')

const istanbulModule = require('babel-plugin-istanbul')
const istanbulPlugin =
  istanbulModule.default || istanbulModule

function pluginCobertura() {
  return {
    name: 'babel-istanbul-coverage',

    setup(build) {
      build.onLoad(
        {
          filter: /[\\/]src[\\/].*\.jsx$/,
        },

        async (args) => {
          const codigo = await fs.promises.readFile(
            args.path,
            'utf8'
          )

          const resultado = await babel.transformAsync(
            codigo,
            {
              filename: args.path,

              babelrc: false,
              configFile: false,

              presets: [
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic',
                  },
                ],
              ],

              plugins: [
                [
                  istanbulPlugin,
                  {
                    cwd: process.cwd(),
                    exclude: [
                      '**/*.test.js',
                    ],
                    useInlineSourceMaps: false,
                  },
                ],
              ],

              sourceMaps: 'inline',
            }
          )

          return {
            contents: resultado.code,
            loader: 'js',
            resolveDir: path.dirname(args.path),
          }
        }
      )
    },
  }
}

module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      {
        pattern: 'src/**/*.test.js',
        watched: true,
      },
    ],

    preprocessors: {
      'src/**/*.test.js': ['esbuild'],
    },

    esbuild: {
      loader: {
        '.js': 'jsx',
        '.jsx': 'jsx',
      },

      jsx: 'automatic',
      target: 'es2020',
      sourcemap: 'inline',
      singleBundle: true,

      plugins: [
        pluginCobertura(),
      ],
    },

    reporters: [
      'progress',
      'coverage',
    ],

    coverageReporter: {
      dir: 'coverage',

      reporters: [
        {
          type: 'text-summary',
        },
        {
          type: 'html',
          subdir: 'html',
        },
      ],
    },

    browsers: ['ChromeHeadless'],

    singleRun: true,

    restartOnFileChange: true,

    client: {
      clearContext: false,
    },
  })
}