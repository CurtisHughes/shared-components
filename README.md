# Shared Components
Testing shared component functionality. Most of the functionality is derived from [Sharing React components between separate projects, self hosting with git, installing with yarn/npm](https://medium.com/@Powderham/sharing-react-components-between-separate-projects-self-hosting-with-git-installing-with-yarn-npm-d3275b64239c)
and [this one](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220)


### Installation
The npm cli provides functionality for installing packages directly from a git remote host https://docs.npmjs.com/cli/install. 
The following command will run the `prepare` script from the `package.json` file and then pull down everything from the git repository (excluding items listed in `.npmignore`):
```
$ npm install --save git+ssh://git@github.com:CurtisHughes/shared-components.git\#master
```

```javascript
// package.json
// ...
"dependencies": {
    "react": "16.1.1",
    "shared-components": "git+ssh://git@github.com/CurtisHughes/shared-components.git\#master",
    // ...
}
//...    
```

Note: You can also specify specific semantic versioning using the [semver](https://github.com/npm/node-semver) module and the `#semver:<semver>` option instead of `#<branch>`

### Example Usage
```javascript
import { TodaysDate } from 'shared-components';
// ...
const AnotherComponent = (props: Props) => (
  <div>
    <TodaysDate />
  </div>
// ...
```