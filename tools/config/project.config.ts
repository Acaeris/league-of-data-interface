import { join } from 'path';

import { SeedConfig } from './seed.config';
// import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  ENABLE_SCSS = true;

  constructor() {
    super();
        this.APP_TITLE = 'League of Data';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
        ...this.NPM_DEPENDENCIES,
        {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
        //{src: 'semantic-ui/dist/semantic.min.css', inject: true},
        //{src: 'semantic-ui/dist/semantic.min.js', inject: 'libs'},
        {src: 'chart.js/dist/Chart.min.js', inject: 'libs'},
        {src: 'd3/build/d3.min.js', inject: 'libs'}
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
        {src: `${this.APP_SRC}/semantic/semantic.min.js`, inject: 'libs', vendor: false},
        {src: `${this.APP_SRC}/semantic/semantic.min.css`, inject: true, vendor: false},
        //{src: '${this.APP_SRC}/semantic/semantic.min.js', inject: 'libs', vendor: false}
        // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    // Add packages (e.g. ng2-translate)
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //
    // this.addPackagesBundles(additionalPackages);

    /* Add proxy middlewar */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')({ ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
